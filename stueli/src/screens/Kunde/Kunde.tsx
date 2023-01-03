import { useState } from 'react';
import {
  useCreateAnlageMutation,
  useDeleteAnlageMutation,
  useListAnlagesQuery,
} from '../../lib/react-api';

const columns: { [key: string]: string } = {
  firma: 'Firma',
  standort: 'Standort',
  anschrift: 'Anchrift',
  actions: 'Aktionen',
};

const Kunde = () => {
  const { data, isLoading, refetch } = useListAnlagesQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const deleteAnlage = useDeleteAnlageMutation();
  const createAnlage = useCreateAnlageMutation();

  const [newAnlage, setNewAnlage] = useState<
    | {
        firma?: string;
        standort?: string;
        anschrift?: string;
      }
    | undefined
  >(undefined);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6"
      data-testid="kunde"
    >
      <h1 className="flex text-xl font-semibold">Kunden</h1>
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
          {data?.listAnlages?.items?.map(
            (anlage, row_index) =>
              anlage && (
                <tr key={row_index} className="border-b border-gray-400">
                  {Object.keys(columns)
                    .slice(0, -1)
                    .map((col, index) => (
                      <td
                        key={index}
                        className="p-3 text-left whitespace-pre-line"
                      >
                        {col === 'firma'
                          ? anlage?.firma
                          : col === 'standort'
                          ? anlage?.standort
                          : anlage?.anschrift}
                      </td>
                    ))}
                  <td
                    key="action"
                    className="p-3 text-left whitespace-pre-line"
                  >
                    <button
                      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                      onClick={async () => {
                        await deleteAnlage.mutateAsync({
                          input: {
                            id: anlage?.id,
                          },
                        });
                        await refetch();
                      }}
                    >
                      <span>Löschen</span>
                    </button>
                  </td>
                </tr>
              ),
          )}
          <tr key="insert_row" className="border-b border-gray-400">
            <td
              key="firma_insert"
              className="p-3 text-left whitespace-pre-line"
            >
              <input
                type="text"
                id="firma"
                name="firma"
                onChange={(e) =>
                  setNewAnlage({ ...newAnlage, firma: e.target.value })
                }
              />
            </td>
            <td
              key="standort_insert"
              className="p-3 text-left whitespace-pre-line"
            >
              <input
                type="text"
                id="standort"
                name="standort"
                onChange={(e) =>
                  setNewAnlage({ ...newAnlage, standort: e.target.value })
                }
              />
            </td>
            <td
              key="anschrift_insert"
              className="p-3 text-left whitespace-pre-line"
            >
              <input
                type="text"
                id="anschrift"
                name="firma"
                onChange={(e) =>
                  setNewAnlage({ ...newAnlage, anschrift: e.target.value })
                }
              />
            </td>
            <td key="action" className="p-3 text-left whitespace-pre-line">
              {!newAnlage?.firma || !newAnlage?.standort ? (
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded opacity-50 cursor-not-allowed">
                  <span>Einfügen</span>
                </button>
              ) : (
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                  onClick={async () => {
                    if (!newAnlage?.firma || !newAnlage?.standort) {
                      console.debug('newAnlage missing');
                      return;
                    }
                    await createAnlage.mutateAsync({
                      input: {
                        firma: newAnlage.firma,
                        standort: newAnlage.standort,
                        anschrift: newAnlage.anschrift,
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
        </tbody>
      </table>
    </div>
  );
};

export default Kunde;
