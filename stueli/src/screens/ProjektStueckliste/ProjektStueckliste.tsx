import * as Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firstBy } from 'thenby';
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

  const [newStueck, setNewStueck] = useState<
    | {
        kurzspezifikation?: string;
        lieferant?: string;
        nennweite?: string;
        feinspezifikation?: string;
        vorschlagKurzspezifikation?: string;
        vorschlagLieferant?: string;
        vorschlagNennweite?: string;
        vorschlagFeinspezifikation?: string;
      }
    | undefined
  >(undefined);
  const [selectedFile, setSelectedFile] = useState();
  const [
    selectedKurzspezifikationVorschlag,
    setSelectedKurzspezifikationVorschlag,
  ] = useState<string | undefined>();

  const isAdmin = role === Role.Admin;

  let columns = {
    [nameof<ProjektStueli>('kurzspezifikation')]: 'Kurzspezifikation',
    [nameof<ProjektStueli>('lieferant')]: 'Lieferant',
    [nameof<ProjektStueli>('nennweite')]: 'Nennweite',
    [nameof<ProjektStueli>('feinspezifikation')]: 'Feinspezifikation',
  };

  if (isAdmin) {
    columns = { ...columns, actions: 'Aktionen' };
  }

  const getProjektQuery = useGetProjektQuery(
    { id: id },
    {
      refetchOnWindowFocus: false,
    },
  );

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

  const kurzspezifikationVorschlaege = useListKurzspezifikationVorschlaegeQuery(
    { input: { anlageId: getProjektQuery.data?.getProjekt?.anlageId ?? '' } },
    {
      refetchOnWindowFocus: false,
    },
  );
  // setSelectedKurzspezifikationVorschlag(
  //   kurzspezifikationVorschlaege.data?.listKurzspezifikationVorschlaege?.[0] ??
  //     undefined,
  // );

  const referenzStueckeByKurzspezifikation =
    useReferenzStueliByKurzspezifikationQuery(
      {
        anlageId: getProjektQuery.data?.getProjekt?.anlageId ?? '',
        kurzspezifikation: { eq: selectedKurzspezifikationVorschlag },
      },
      {
        refetchOnWindowFocus: false,
      },
    );

  const lieferantenVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter((stueck) => stueck?.lieferant && stueck?.lieferant != '')
        .map((stueck) => stueck?.lieferant),
    ),
  );

  const nennweiteVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter((stueck) => stueck?.nennweite && stueck?.nennweite != '')
        .map((stueck) => stueck?.nennweite),
    ),
  ).sort();

  const feinspezifikationVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter(
          (stueck) =>
            stueck?.feinspezifikation && stueck?.feinspezifikation != '',
        )
        .map((stueck) => stueck?.feinspezifikation),
    ),
  ).sort();

  const setCurrentProjektId = useSetCurrentProjektIdMutation();

  const deleteStueck = useDeleteProjektStueliMutation();
  const createStueck = useCreateProjektStueliMutation();

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    // setIsFilePicked(true);
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
        <div className="flex gap-2">
          <span>Kunde:</span>
          <span>{getProjektQuery.data?.getProjekt?.anlage.firma}</span>
        </div>
        <div className="flex gap-2">
          <span>Standort:</span>
          <span>{getProjektQuery.data?.getProjekt?.anlage.standort} </span>
        </div>
        <div className="flex gap-2">
          <span>Projektnummer:</span>
          <span>{getProjektQuery.data?.getProjekt?.projektNummer} </span>
        </div>
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
      <table className="mt-4">
        <thead>
          <tr>
            {Object.keys(columns).map((col, index) => (
              <th
                scope="col"
                className="relative p-3 text-xs font-semibold text-left text-white whitespace-pre-line align-top bg-bblue-500"
                key={index}
              >
                {columns[col]}
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
            .map(
              (stueck, row_index) =>
                stueck && (
                  <tr key={row_index} className="border-b border-gray-400">
                    {Object.keys(columns).map((col, index) => (
                      <td
                        key={index}
                        className="p-3 text-left whitespace-pre-line"
                      >
                        {col === 'actions' ? (
                          <button
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
                        ) : (
                          stueck[
                            col as
                              | 'kurzspezifikation'
                              | 'lieferant'
                              | 'nennweite'
                              | 'feinspezifikation'
                          ]
                        )}
                      </td>
                    ))}
                  </tr>
                ),
            )}
          {isAdmin && (
            <tr key="insert_row" className="border-b border-gray-400">
              {Object.keys(columns).map((col, _index) =>
                col === 'actions' ? (
                  <td key={col} className="p-3 text-left whitespace-pre-line">
                    <button
                      className={`px-4 py-2 font-bold text-white bg-blue-500 rounded ${
                        !newStueck?.kurzspezifikation ||
                        !newStueck?.lieferant ||
                        !newStueck?.feinspezifikation
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-blue-700'
                      }`}
                      onClick={async () => {
                        if (
                          !newStueck?.kurzspezifikation ||
                          !newStueck?.lieferant ||
                          !newStueck?.feinspezifikation
                        ) {
                          console.debug('newStueck missing');
                          return;
                        }
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
                  </td>
                ) : col === 'kurzspezifikation' ? (
                  <td
                    key={`${col}_insert`}
                    className="p-3 text-left whitespace-pre-line"
                  >
                    <select
                      className="border-2 border-black"
                      onChange={(e) => {
                        setSelectedKurzspezifikationVorschlag(e.target.value);
                        setNewStueck({
                          ...newStueck,
                          vorschlagKurzspezifikation: e.target.value,
                          kurzspezifikation: e.target.value,
                        });
                        if (
                          lieferantenVorschlaege.length == 1 &&
                          lieferantenVorschlaege[0]
                        ) {
                          setNewStueck({
                            ...newStueck,
                            vorschlagLieferant: lieferantenVorschlaege[0],
                            lieferant: lieferantenVorschlaege[0],
                          });
                        }
                        if (
                          nennweiteVorschlaege.length == 1 &&
                          nennweiteVorschlaege[0]
                        ) {
                          setNewStueck({
                            ...newStueck,
                            vorschlagNennweite: nennweiteVorschlaege[0],
                            nennweite: nennweiteVorschlaege[0],
                          });
                        }
                        if (
                          feinspezifikationVorschlaege.length == 1 &&
                          feinspezifikationVorschlaege[0]
                        ) {
                          setNewStueck({
                            ...newStueck,
                            vorschlagFeinspezifikation:
                              feinspezifikationVorschlaege[0],
                            feinspezifikation: feinspezifikationVorschlaege[0],
                          });
                        }
                      }}
                    >
                      <option value="" selected></option>
                      {kurzspezifikationVorschlaege.data?.listKurzspezifikationVorschlaege?.map(
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
                      value={newStueck?.kurzspezifikation}
                      onChange={(e) =>
                        setNewStueck({ ...newStueck, [col]: e.target.value })
                      }
                    />
                  </td>
                ) : col === 'lieferant' ? (
                  <td
                    key={`${col}_insert`}
                    className="p-3 text-left whitespace-pre-line"
                  >
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
                        <option value={undefined} selected></option>
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
                      value={newStueck?.lieferant}
                      onChange={(e) =>
                        setNewStueck({
                          ...newStueck,
                          lieferant: e.target.value,
                        })
                      }
                    />
                  </td>
                ) : col === 'nennweite' ? (
                  <td
                    key={`${col}_insert`}
                    className="p-3 text-left whitespace-pre-line"
                  >
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
                        <option value={undefined} selected></option>
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
                      value={newStueck?.nennweite}
                      onChange={(e) =>
                        setNewStueck({
                          ...newStueck,
                          nennweite: e.target.value,
                        })
                      }
                    />
                  </td>
                ) : (
                  <td
                    key={`${col}_insert`}
                    className="p-3 text-left whitespace-pre-line"
                  >
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
                        <option value={undefined} selected></option>
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
                      value={newStueck?.feinspezifikation}
                      onChange={(e) =>
                        setNewStueck({ ...newStueck, [col]: e.target.value })
                      }
                    />
                  </td>
                ),
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjektStueckliste;
