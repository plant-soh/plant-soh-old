import * as Papa from 'papaparse';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firstBy } from 'thenby';
import EditTable, { EditTableType } from '../../components/Editable';
import { amplifyFetcher } from '../../lib/fetcher';
// import { API } from '../../lib/fetcher';

import {
  ListProjektStuelisDocument,
  ListProjektStuelisQuery,
  ListProjektStuelisQueryVariables,
  ListReferenzStuelisDocument,
  ListReferenzStuelisQuery,
  ListReferenzStuelisQueryVariables,
  ProjektStueli,
  Role,
  useCreateProjektStueliMutation,
  useDeleteProjektStueliMutation,
  useGetProjektQuery,
  useListKurzspezifikationVorschlaegeQuery,
  useProjektStueliByKurzspezifikationQuery,
  useReferenzStueliByKurzspezifikationQuery,
  useSetCurrentProjektIdMutation,
  useUpdateProjektMutation,
  useUpdateProjektStueliMutation,
} from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';
import { useModal } from '../../providers/ModalProvider';

function nameof<T>(key: keyof T): keyof T {
  return key;
}

type ProjektStueliParams = {
  id: string;
};

const ProjektStueckliste = () => {
  const { id = '' } = useParams<ProjektStueliParams>();

  const { currentProjektId, refreshSession, role } = useAuth();

  const inputRef = useRef<HTMLInputElement>(null);

  let { handleModal } = useModal();

  const [newStueck, setNewStueck] = useState<{
    bmk: string;
    kurzspezifikation: string;
    lieferant: string;
    nennweite: string;
    feinspezifikation: string;
    kurzspezifikationVorschlag?: string;
    lieferantVorschlag?: string;
    nennweiteVorschlag?: string;
    feinspezifikationVorschlag?: string;
    custom1: string;
    custom2: string;
    custom3: string;
  }>({
    bmk: '',
    kurzspezifikation: '',
    lieferant: '',
    nennweite: '',
    feinspezifikation: '',
    custom1: '',
    custom2: '',
    custom3: '',
  });
  const [editStueck, setEditStueck] = useState('');

  const [selectedFile, setSelectedFile] = useState();
  const [
    selectedKurzspezifikationVorschlag,
    setSelectedKurzspezifikationVorschlag,
  ] = useState<string | undefined>();

  const isAdmin = role === Role.Admin;

  const getProjektQuery = useGetProjektQuery(
    { id: id },
    {
      refetchOnWindowFocus: false,
    },
  );

  let columns = {
    [nameof<ProjektStueli>('bmk')]: 'BMK',
    [nameof<ProjektStueli>('kurzspezifikation')]: 'Kurzspezifikation',
    [nameof<ProjektStueli>('lieferant')]: 'Lieferant',
    [nameof<ProjektStueli>('nennweite')]: 'Nennweite',
    [nameof<ProjektStueli>('feinspezifikation')]: 'Feinspezifikation',
  };

  var availableCustomColumn: string | undefined = undefined;
  for (const column of [
    'custom1ColumnName',
    'custom2ColumnName',
    'custom3ColumnName',
  ]) {
    if (
      !getProjektQuery.data?.getProjekt?.[
        column as
          | 'custom1ColumnName'
          | 'custom2ColumnName'
          | 'custom3ColumnName'
      ]
    ) {
      availableCustomColumn = column;
      break;
    }
  }

  if (availableCustomColumn) {
    columns = {
      ...columns,
      plus: '+',
    };
  }

  if (getProjektQuery.data?.getProjekt?.custom1ColumnName) {
    columns = {
      ...columns,
      [nameof<ProjektStueli>('custom1')]:
        getProjektQuery.data?.getProjekt?.custom1ColumnName,
    };
  }

  if (getProjektQuery.data?.getProjekt?.custom2ColumnName) {
    columns = {
      ...columns,
      [nameof<ProjektStueli>('custom2')]:
        getProjektQuery.data?.getProjekt?.custom2ColumnName,
    };
  }

  if (getProjektQuery.data?.getProjekt?.custom3ColumnName) {
    columns = {
      ...columns,
      [nameof<ProjektStueli>('custom3')]:
        getProjektQuery.data?.getProjekt?.custom3ColumnName,
    };
  }

  if (isAdmin) {
    columns = { ...columns, actions: 'Aktionen' };
  }

  // console.log(`columns=${JSON.stringify(columns)}`);

  useEffect(() => {
    if (!id || currentProjektId === id) return;
    void (async () => {
      console.log(`projektId=${id}`);
      await setCurrentProjektId.mutateAsync({
        input: {
          projektId: id,
        },
      });

      //refresh
      await refreshSession();
      await refetch();
    })();
  }, [id]);

  const { data, isLoading, refetch } = useProjektStueliByKurzspezifikationQuery(
    { projektId: id },
    {
      refetchOnWindowFocus: false,
    },
  );

  let sortedProjektStueli: { [key: string]: string }[] | undefined =
    data?.projektStueliByKurzspezifikation?.items
      ?.sort(
        firstBy<ProjektStueli>((s1, s2) =>
          s1!.kurzspezifikation!.localeCompare(s2!.kurzspezifikation!),
        )
          .thenBy<ProjektStueli>((s1, s2) =>
            s1!.lieferant!.localeCompare(s2!.lieferant!),
          )
          .thenBy((s1, s2) => s1!.nennweite!.localeCompare(s2!.nennweite!)),
      )
      .map((stueck) => {
        return {
          id: stueck?.id ?? '',
          bmk: stueck?.bmk ?? '',
          bmkDouble: String(stueck?.bmkDouble ?? false),
          kurzspezifikation: stueck?.kurzspezifikation ?? '',
          lieferant: stueck?.lieferant ?? '',
          nennweite: stueck?.nennweite ?? '',
          feinspezifikation: stueck?.feinspezifikation ?? '',
          custom1: stueck?.custom1 ?? '',
          custom2: stueck?.custom2 ?? '',
          custom3: stueck?.custom3 ?? '',
        };
      });

  const listKurzspezifikationVorschlaege =
    useListKurzspezifikationVorschlaegeQuery(
      { input: { anlageId: getProjektQuery.data?.getProjekt?.anlageId ?? '' } },
      {
        refetchOnWindowFocus: false,
      },
    );

  const referenzStueckeByKurzspezifikation =
    useReferenzStueliByKurzspezifikationQuery(
      {
        anlageId: getProjektQuery.data?.getProjekt?.anlageId ?? 'init',
        kurzspezifikation: { eq: selectedKurzspezifikationVorschlag ?? 'init' },
      },
      {
        refetchOnWindowFocus: false,
      },
    );

  const kurzspezifikationVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter(
          (stueck) =>
            stueck?.kurzspezifikation != '' &&
            (!newStueck.lieferantVorschlag ||
              stueck?.lieferant === newStueck.lieferantVorschlag) &&
            (!newStueck.nennweiteVorschlag ||
              stueck?.nennweite === newStueck.nennweiteVorschlag) &&
            (!newStueck.feinspezifikation ||
              stueck?.feinspezifikation ===
                newStueck.feinspezifikationVorschlag),
        )
        .map((stueck) => stueck?.lieferant),
    ),
  );
  kurzspezifikationVorschlaege;

  const lieferantVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter(
          (stueck) =>
            (!newStueck.kurzspezifikationVorschlag ||
              stueck?.kurzspezifikation ===
                newStueck.kurzspezifikationVorschlag) &&
            stueck?.lieferant != '' &&
            (!newStueck.nennweiteVorschlag ||
              stueck?.nennweite === newStueck.nennweiteVorschlag) &&
            (!newStueck.feinspezifikationVorschlag ||
              stueck?.feinspezifikation ===
                newStueck.feinspezifikationVorschlag),
        )
        .map((stueck) => stueck?.lieferant),
    ),
  );

  const nennweiteVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter(
          (stueck) =>
            (!newStueck.kurzspezifikationVorschlag ||
              stueck?.kurzspezifikation ===
                newStueck.kurzspezifikationVorschlag) &&
            (!newStueck.lieferantVorschlag ||
              stueck?.lieferant === newStueck.lieferantVorschlag) &&
            stueck?.nennweite != '' &&
            (!newStueck.feinspezifikationVorschlag ||
              stueck?.feinspezifikation ===
                newStueck.feinspezifikationVorschlag),
        )
        .map((stueck) => stueck?.nennweite),
    ),
  ).sort();

  const feinspezifikationVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter(
          (stueck) =>
            (!newStueck.kurzspezifikationVorschlag ||
              stueck?.kurzspezifikation ===
                newStueck.kurzspezifikationVorschlag) &&
            (!newStueck.lieferantVorschlag ||
              stueck?.lieferant === newStueck.lieferantVorschlag) &&
            (!newStueck.nennweiteVorschlag ||
              stueck?.nennweite === newStueck.nennweiteVorschlag) &&
            stueck?.feinspezifikation != '',
        )
        .map((stueck) => stueck?.feinspezifikation),
    ),
  ).sort();

  const vorschlaege = {
    lieferant: lieferantVorschlaege,
    nennweite: nennweiteVorschlaege,
    feinspezifikation: feinspezifikationVorschlaege,
  };

  const setCurrentProjektId = useSetCurrentProjektIdMutation();

  const deleteStueck = useDeleteProjektStueliMutation();
  const createStueck = useCreateProjektStueliMutation();
  const updateStueck = useUpdateProjektStueliMutation();

  const updateProjekt = useUpdateProjektMutation();

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const onClick = (_e: any) => {
    console.log('start parsing');
    if (!selectedFile) return;
    Papa.parse<any>(selectedFile, {
      header: true,
      skipEmptyLines: 'greedy',
      complete: async (results) => {
        console.log(results.data);
        await Promise.all(
          results.data.map(async (row) => {
            await createStueck.mutateAsync({
              input: {
                projektId: id,
                kurzspezifikation: row.Kurzspezifikation,
                lieferant: row.Lieferant,
                nennweite: row['NW/P'],
                feinspezifikation: row.Feinsp,
              },
            });
          }),
        );
        await refetch();
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6"
      data-testid="kunde"
    >
      <h1 className="flex gap-6 text-xl">
        <div key="kunde" className="flex gap-2">
          <span>Kunde:</span>
          <span>{getProjektQuery.data?.getProjekt?.anlage.firma}</span>
        </div>
        <div key="standort" className="flex gap-2">
          <span>Standort:</span>
          <span>{getProjektQuery.data?.getProjekt?.anlage.standort} </span>
        </div>
        <div key="projektnummer" className="flex gap-2">
          <span>Projektnummer:</span>
          <span>{getProjektQuery.data?.getProjekt?.projektNummer} </span>
        </div>
        {/* <div key="custom1" className="flex gap-2">
          <span>Custom1ColumnName:</span>
          <span>{getProjektQuery.data?.getProjekt?.custom1ColumnName} </span>
        </div>
        <div key="custom2" className="flex gap-2">
          <span>Custom2ColumnName:</span>
          <span>{getProjektQuery.data?.getProjekt?.custom2ColumnName} </span>
        </div>
        <div key="custom3" className="flex gap-2">
          <span>Custom3ColumnName:</span>
          <span>{getProjektQuery.data?.getProjekt?.custom3ColumnName} </span>
        </div> */}
      </h1>

      <div className="flex flex-col">
        <input type="file" name="file" onChange={changeHandler} accept=".csv" />
        <div>
          <button
            className={`px-4 py-2 font-bold text-white bg-blue-500 rounded ${
              selectedFile
                ? 'hover:bg-blue-700'
                : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={(e) => onClick(e)}
          >
            <span>Importieren</span>
          </button>
        </div>
      </div>
      <table className="w-full mt-4 table-fixed">
        <thead>
          <tr>
            {Object.keys(columns).map((col, index) => (
              <th
                scope="col"
                className="relative w-20 p-3 text-xs font-semibold text-left text-white whitespace-pre-line align-top bg-bblue-500"
                key={index}
              >
                {col === 'plus' ? (
                  <button
                    key={col}
                    className="px-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={async () => {
                      await updateProjekt.mutateAsync({
                        input: {
                          id: getProjektQuery.data?.getProjekt?.id ?? '',
                          [availableCustomColumn as
                            | 'custom1ColumnName'
                            | 'custom2ColumnName'
                            | 'custom3ColumnName']: 'Zusätzliche Spalte',
                        },
                      });
                      await getProjektQuery.refetch();
                      await refetch();
                    }}
                  >
                    <span>+</span>
                  </button>
                ) : col.startsWith('custom') ? (
                  <EditTable
                    key={col}
                    text={
                      columns[col] === '' ? 'Zusätzliche Spalte' : columns[col]
                    }
                    onSave={async () => {
                      await updateProjekt.mutateAsync({
                        input: {
                          id: getProjektQuery.data?.getProjekt?.id ?? '',
                          [col + 'ColumnName']: editStueck,
                        },
                      });
                      await getProjektQuery.refetch();
                      await refetch();
                    }}
                    onCancel={() => {
                      setEditStueck(columns[col] ?? '');
                    }}
                    childRef={inputRef}
                    type={EditTableType.input}
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      name={col}
                      className="text-black"
                      placeholder={''}
                      defaultValue={columns[col] ?? ''}
                      onChange={async (e) => {
                        setEditStueck(e.target.value);
                      }}
                    />
                  </EditTable>
                ) : (
                  columns[col]
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-50" data-testid="recent-calls-table-body">
          {sortedProjektStueli?.map(
            (stueck, row_index) =>
              stueck && (
                <tr key={row_index} className="border-b border-gray-400">
                  {Object.keys(columns).map((col, index) => (
                    <td
                      key={index}
                      className="w-20 p-3 text-left whitespace-pre-line"
                    >
                      {col === 'actions' ? (
                        <button
                          key={col}
                          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                          onClick={async () => {
                            await deleteStueck.mutateAsync({
                              input: {
                                id: stueck.id,
                              },
                            });
                            await refetch();
                          }}
                        >
                          <span>Löschen</span>
                        </button>
                      ) : col === 'plus' ? (
                        <div key="plus"></div>
                      ) : (
                        <EditTable
                          className={
                            col === 'bmk' && stueck.bmkDouble === 'true'
                              ? 'text-red-500'
                              : ''
                          }
                          key={col}
                          text={stueck[col]}
                          onSave={async () => {
                            // Check ob gleiche BMK in einem Projekt bereits existiert
                            const foundStueckeInProjekten =
                              await amplifyFetcher<
                                ListProjektStuelisQuery,
                                ListProjektStuelisQueryVariables
                              >(ListProjektStuelisDocument, {
                                filter: { bmk: { eq: editStueck } },
                              }).call(undefined);

                            let projektStueckExist =
                              (foundStueckeInProjekten.listProjektStuelis?.items
                                ?.length ?? 0) > 0;

                            if (projektStueckExist) {
                              await handleModal(
                                `BMK existiert bereits im Projektstückliste: ${Array.from(
                                  new Set(
                                    foundStueckeInProjekten.listProjektStuelis?.items?.map(
                                      (foundStueck) =>
                                        `Firma: ${foundStueck?.projekt.anlage.firma} Standort: ${foundStueck?.projekt.anlage.standort} Projektnummer: ${foundStueck?.projekt.projektNummer} `,
                                    ),
                                  ),
                                ).join(', ')}!`,
                              );
                            }

                            // Check ob gleiche BMK in einer Referenzstueli bereits existiert
                            const foundStueckeInReferenz = await amplifyFetcher<
                              ListReferenzStuelisQuery,
                              ListReferenzStuelisQueryVariables
                            >(ListReferenzStuelisDocument, {
                              filter: { bmk: { eq: editStueck } },
                            }).call(undefined);

                            const referenzStueckExist =
                              (foundStueckeInReferenz.listReferenzStuelis?.items
                                ?.length ?? 0) > 0;

                            if (referenzStueckExist) {
                              await handleModal(
                                `BMK existiert bereits in Referenzstückliste: ${Array.from(
                                  new Set(
                                    foundStueckeInReferenz.listReferenzStuelis?.items?.map(
                                      (foundStueck) =>
                                        `Firma: ${foundStueck?.anlage.firma} Standort: ${foundStueck?.anlage.standort} `,
                                    ),
                                  ),
                                ).join(', ')}!`,
                              );
                            }

                            await updateStueck.mutateAsync({
                              input: {
                                id: stueck.id,
                                [col]: editStueck,
                                bmkDouble:
                                  projektStueckExist || referenzStueckExist,
                              },
                            });
                            await refetch();
                          }}
                          onCancel={() => {
                            setEditStueck(stueck[col]);
                          }}
                          childRef={inputRef}
                          type={EditTableType.input}
                        >
                          <input
                            key={col}
                            ref={inputRef}
                            type="text"
                            name={col}
                            placeholder={''}
                            defaultValue={stueck[col]}
                            onChange={async (e) => {
                              setEditStueck(e.target.value);
                            }}
                          />
                        </EditTable>
                      )}
                    </td>
                  ))}
                </tr>
              ),
          )}
          {isAdmin && (
            <tr key="insert_row" className="border-b border-gray-400">
              {Object.keys(columns).map((col, _index) => (
                <td
                  key={col}
                  className="w-20 p-3 overflow-hidden text-left whitespace-pre-line"
                >
                  {col === 'actions' ? (
                    <button
                      className={`px-4 py-2 font-bold text-white bg-blue-500 rounded ${
                        !newStueck.kurzspezifikation ||
                        !newStueck.lieferant ||
                        !newStueck.nennweite ||
                        !newStueck.feinspezifikation
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-blue-700'
                      }`}
                      onClick={async () => {
                        await createStueck.mutateAsync({
                          input: {
                            projektId: id,
                            ...newStueck,
                          },
                        });
                        await refetch();
                      }}
                    >
                      <span>Einfügen</span>
                    </button>
                  ) : col === 'plus' ? (
                    <></>
                  ) : col === 'kurzspezifikation' ? (
                    <div className="flex flex-col ">
                      <select
                        className="border-2 border-black"
                        onChange={(e) => {
                          setSelectedKurzspezifikationVorschlag(e.target.value);
                          setNewStueck({
                            ...newStueck,
                            kurzspezifikationVorschlag: e.target.value,
                            kurzspezifikation: e.target.value,
                            lieferantVorschlag: undefined,
                            nennweiteVorschlag: undefined,
                            feinspezifikationVorschlag: undefined,
                          });
                        }}
                      >
                        <option value={undefined}></option>
                        {listKurzspezifikationVorschlaege.data?.listKurzspezifikationVorschlaege?.map(
                          (kurzspezifikation) => (
                            <option
                              key={kurzspezifikation}
                              value={kurzspezifikation || ''}
                            >
                              {kurzspezifikation}
                            </option>
                          ),
                        )}
                      </select>
                      <input
                        className="border-2 border-black"
                        type="text"
                        id={col}
                        name={col}
                        value={newStueck.kurzspezifikation}
                        onChange={(e) =>
                          setNewStueck({ ...newStueck, [col]: e.target.value })
                        }
                      />
                    </div>
                  ) : col === 'lieferant' ||
                    col === 'nennweite' ||
                    col === 'feinspezifikation' ? (
                    <div className="flex flex-col ">
                      {selectedKurzspezifikationVorschlag && (
                        <select
                          className="border-2 border-black"
                          onChange={(e) => {
                            setNewStueck({
                              ...newStueck,
                              [`${col}Vorschlag`]: e.target.value,
                              [col]: e.target.value,
                            });
                          }}
                        >
                          <option value={undefined}></option>
                          {vorschlaege[col]?.map((vorschlag) => (
                            <option key={vorschlag} value={vorschlag || ''}>
                              {vorschlag}
                            </option>
                          ))}
                        </select>
                      )}
                      <input
                        className="border-2 border-black"
                        type="text"
                        id={col}
                        name={col}
                        value={newStueck[col]}
                        onChange={(e) =>
                          setNewStueck({
                            ...newStueck,
                            [col]: e.target.value,
                          })
                        }
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col ">
                      <input
                        className="border-2 border-black"
                        type="text"
                        id={col}
                        name={col}
                        value={
                          newStueck[col as 'custom1' | 'custom2' | 'custom3']
                        }
                        onChange={(e) =>
                          setNewStueck({ ...newStueck, [col]: e.target.value })
                        }
                      />
                    </div>
                  )}
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjektStueckliste;
