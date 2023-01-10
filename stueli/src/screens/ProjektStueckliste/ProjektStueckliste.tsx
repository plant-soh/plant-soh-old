import * as Papa from 'papaparse';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firstBy } from 'thenby';
import EditTable, { EditTableType } from '../../components/Editable';
// import { API } from '../../lib/fetcher';

import {
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

  const [newStueck, setNewStueck] = useState<{
    kurzspezifikation: string;
    lieferant: string;
    nennweite: string;
    feinspezifikation: string;
    vorschlagKurzspezifikation?: string;
    vorschlagLieferant?: string;
    vorschlagNennweite?: string;
    vorschlagFeinspezifikation?: string;
    custom1: string;
    custom2: string;
    custom3: string;
  }>({
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
    [nameof<ProjektStueli>('kurzspezifikation')]: 'Kurzspezifikation',
    [nameof<ProjektStueli>('lieferant')]: 'Lieferant',
    [nameof<ProjektStueli>('nennweite')]: 'Nennweite',
    [nameof<ProjektStueli>('feinspezifikation')]: 'Feinspezifikation',
    plus: '+',
  };

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
            (!newStueck.vorschlagLieferant ||
              stueck?.lieferant === newStueck.vorschlagLieferant) &&
            (!newStueck.vorschlagNennweite ||
              stueck?.nennweite === newStueck.vorschlagNennweite) &&
            (!newStueck.feinspezifikation ||
              stueck?.feinspezifikation ===
                newStueck.vorschlagFeinspezifikation),
        )
        .map((stueck) => stueck?.lieferant),
    ),
  );
  kurzspezifikationVorschlaege;

  const lieferantenVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter(
          (stueck) =>
            (!newStueck.vorschlagKurzspezifikation ||
              stueck?.kurzspezifikation ===
                newStueck.vorschlagKurzspezifikation) &&
            stueck?.lieferant != '' &&
            (!newStueck.vorschlagNennweite ||
              stueck?.nennweite === newStueck.vorschlagNennweite) &&
            (!newStueck.vorschlagFeinspezifikation ||
              stueck?.feinspezifikation ===
                newStueck.vorschlagFeinspezifikation),
        )
        .map((stueck) => stueck?.lieferant),
    ),
  );

  const nennweiteVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter(
          (stueck) =>
            (!newStueck.vorschlagKurzspezifikation ||
              stueck?.kurzspezifikation ===
                newStueck.vorschlagKurzspezifikation) &&
            (!newStueck.vorschlagLieferant ||
              stueck?.lieferant === newStueck.vorschlagLieferant) &&
            stueck?.nennweite != '' &&
            (!newStueck.vorschlagFeinspezifikation ||
              stueck?.feinspezifikation ===
                newStueck.vorschlagFeinspezifikation),
        )
        .map((stueck) => stueck?.nennweite),
    ),
  ).sort();

  const feinspezifikationVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter(
          (stueck) =>
            (!newStueck.vorschlagKurzspezifikation ||
              stueck?.kurzspezifikation ===
                newStueck.vorschlagKurzspezifikation) &&
            (!newStueck.vorschlagLieferant ||
              stueck?.lieferant === newStueck.vorschlagLieferant) &&
            (!newStueck.vorschlagNennweite ||
              stueck?.nennweite === newStueck.vorschlagNennweite) &&
            stueck?.feinspezifikation != '',
        )
        .map((stueck) => stueck?.feinspezifikation),
    ),
  ).sort();

  const setCurrentProjektId = useSetCurrentProjektIdMutation();

  const deleteStueck = useDeleteProjektStueliMutation();
  const createStueck = useCreateProjektStueliMutation();
  const updateStueck = useUpdateProjektStueliMutation();

  const updateProjekt = useUpdateProjektMutation();

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    // setIsFilePicked(true);
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
                  availableCustomColumn && (
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
                  )
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
          {data!
            .projektStueliByKurzspezifikation!.items!.sort(
              firstBy<ProjektStueli>((s1, s2) =>
                s1!.kurzspezifikation!.localeCompare(s2!.kurzspezifikation!),
              )
                .thenBy<ProjektStueli>((s1, s2) =>
                  s1!.lieferant!.localeCompare(s2!.lieferant!),
                )
                .thenBy((s1, s2) =>
                  s1!.nennweite!.localeCompare(s2!.nennweite!),
                ),
            )
            .map((stueck) => {
              return {
                id: stueck?.id ?? '',
                kurzspezifikation: stueck?.kurzspezifikation ?? '',
                lieferant: stueck?.lieferant ?? '',
                nennweite: stueck?.nennweite ?? '',
                feinspezifikation: stueck?.feinspezifikation ?? '',
                custom1: stueck?.custom1 ?? '',
                custom2: stueck?.custom2 ?? '',
                custom3: stueck?.custom3 ?? '',
              };
            })
            .map(
              (stueck, row_index) =>
                stueck && (
                  <tr key={row_index} className="border-b border-gray-400">
                    {Object.keys(columns).map(
                      (col, index) =>
                        (col === 'actions' ||
                          col === 'plus' ||
                          col === 'kurzspezifikation' ||
                          col === 'lieferant' ||
                          col === 'nennweite' ||
                          col === 'feinspezifikation' ||
                          col === 'custom1' ||
                          col === 'custom2' ||
                          col === 'custom3') && (
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
                                key={col}
                                text={stueck[col]}
                                onSave={async () => {
                                  await updateStueck.mutateAsync({
                                    input: {
                                      id: stueck.id,
                                      [col]: editStueck,
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
                        ),
                    )}
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
                            vorschlagKurzspezifikation: e.target.value,
                            kurzspezifikation: e.target.value,
                            vorschlagLieferant: undefined,
                            vorschlagNennweite: undefined,
                            vorschlagFeinspezifikation: undefined,
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
                  ) : col === 'lieferant' ? (
                    <div className="flex flex-col ">
                      {selectedKurzspezifikationVorschlag && (
                        <select
                          className="border-2 border-black"
                          onChange={(e) => {
                            setNewStueck({
                              ...newStueck,
                              vorschlagLieferant: e.target.value,
                              lieferant: e.target.value,
                            });
                          }}
                        >
                          <option value={undefined}></option>
                          {lieferantenVorschlaege?.map((lieferant) => (
                            <option key={lieferant} value={lieferant || ''}>
                              {lieferant}
                            </option>
                          ))}
                        </select>
                      )}
                      <input
                        className="border-2 border-black"
                        type="text"
                        id={col}
                        name={col}
                        value={newStueck.lieferant}
                        onChange={(e) =>
                          setNewStueck({
                            ...newStueck,
                            lieferant: e.target.value,
                          })
                        }
                      />
                    </div>
                  ) : col === 'nennweite' ? (
                    <div className="flex flex-col ">
                      {selectedKurzspezifikationVorschlag && (
                        <select
                          className="border-2 border-black"
                          onChange={(e) =>
                            setNewStueck({
                              ...newStueck,
                              vorschlagNennweite: e.target.value,
                              nennweite: e.target.value,
                            })
                          }
                        >
                          <option value={undefined}></option>
                          {nennweiteVorschlaege?.map((nennweite) => (
                            <option key={nennweite} value={nennweite || ''}>
                              {nennweite}
                            </option>
                          ))}
                        </select>
                      )}
                      <input
                        className="border-2 border-black"
                        type="text"
                        id={col}
                        name={col}
                        value={newStueck.nennweite}
                        onChange={(e) =>
                          setNewStueck({
                            ...newStueck,
                            nennweite: e.target.value,
                          })
                        }
                      />
                    </div>
                  ) : col === 'feinspezifikation' ? (
                    <div className="flex flex-col ">
                      {selectedKurzspezifikationVorschlag && (
                        <select
                          className="border-2 border-black"
                          onChange={(e) => {
                            setNewStueck({
                              ...newStueck,
                              vorschlagFeinspezifikation: e.target.value,
                              feinspezifikation: e.target.value,
                            });
                          }}
                        >
                          <option value={undefined}></option>
                          {feinspezifikationVorschlaege?.map(
                            (feinspezifikation) => (
                              <option
                                key={feinspezifikation}
                                value={feinspezifikation || ''}
                              >
                                {feinspezifikation}
                              </option>
                            ),
                          )}
                        </select>
                      )}
                      <input
                        className="border-2 border-black"
                        type="text"
                        id={col}
                        name={col}
                        value={newStueck.feinspezifikation}
                        onChange={(e) =>
                          setNewStueck({ ...newStueck, [col]: e.target.value })
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
