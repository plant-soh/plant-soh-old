import { useState } from 'react';
import Link from '../../components/Link';
import { Projekt } from '../../lib/api';
import {
  Anlage,
  Role,
  useCreateProjektMutation,
  useDeleteProjektMutation,
  useListAnlagesQuery,
  useListProjektsQuery,
} from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';

function nameof<T>(key: keyof T): keyof T {
  return key;
}

const Projekte = () => {
  const { role } = useAuth();

  const isAdmin = role === Role.Admin;

  let columns = {
    [nameof<Anlage>('firma')]: 'Firma',
    [nameof<Anlage>('standort')]: 'Standort',
    [nameof<Projekt>('projektNummer')]: 'Projektnummer',
  };

  if (isAdmin) {
    columns = { ...columns, actions: 'Aktionen' };
  }

  const { data, isLoading, refetch } = useListProjektsQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const anlagen = useListAnlagesQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const deleteProjekt = useDeleteProjektMutation();
  const createProjekt = useCreateProjektMutation();

  const [newProjekt, setNewProjekt] = useState<
    | {
        anlageId?: string;
        projektNummer?: number;
      }
    | undefined
  >(undefined);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6"
      data-testid="projekte"
    >
      <h1 className="flex text-xl font-semibold">Projekte</h1>
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
          {data?.listProjekts?.items?.map(
            (projekt, row_index) =>
              projekt && (
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
                            await deleteProjekt.mutateAsync({
                              input: {
                                id: projekt.id,
                              },
                            });
                            await refetch();
                          }}
                        >
                          <span>Löschen</span>
                        </button>
                      ) : col === 'standort' ? (
                        <Link
                          name="referenz-stueli"
                          to={`/projekte/${projekt.id}`}
                        >
                          {/* <span>{anlage[col]}</span> */}
                        </Link>
                      ) : col === 'projektNummer' ? (
                        projekt[col]
                      ) : (
                        projekt.anlage[col as 'firma' | 'standort']
                      )}
                    </td>
                  ))}
                </tr>
              ),
          )}
          {isAdmin && (
            <tr key="insert_row" className="border-b border-gray-400">
              <td
                key="anlage_insert"
                className="p-3 text-left whitespace-pre-line"
                colSpan={2}
              >
                <select
                  onChange={(e) =>
                    setNewProjekt({
                      ...newProjekt,
                      anlageId: e.target.value,
                    })
                  }
                >
                  {anlagen.data?.listAnlages?.items
                    ?.sort(
                      (a1, a2) => a1?.firma.localeCompare(a2?.firma ?? '') ?? 0,
                    )
                    .map((anlage) => (
                      <option key={anlage?.id} value={anlage?.id}>
                        {`Firma: ${anlage?.firma} Standort: ${anlage?.standort}`}
                      </option>
                    ))}
                </select>
              </td>

              <td
                key="anlage_insert"
                className="p-3 text-left whitespace-pre-line"
              >
                <input
                  type="text"
                  id="projektNummer"
                  name="projektNummer"
                  onChange={(e) =>
                    setNewProjekt({
                      ...newProjekt,
                      projektNummer: Number(e.target.value),
                    })
                  }
                />
              </td>

              <td key="action" className="p-3 text-left whitespace-pre-line">
                {!newProjekt?.projektNummer || !newProjekt?.anlageId ? (
                  <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded opacity-50 cursor-not-allowed">
                    <span>Einfügen</span>
                  </button>
                ) : (
                  <button
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={async () => {
                      if (!newProjekt?.projektNummer || !newProjekt?.anlageId) {
                        console.debug('newProjekt missing');
                        return;
                      }
                      await createProjekt.mutateAsync({
                        input: {
                          anlageId: newProjekt.anlageId,
                          projektNummer: newProjekt.projektNummer,
                        },
                      });
                      await refetch();
                    }}
                  >
                    <span>Einfügen</span>
                  </button>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Projekte;
