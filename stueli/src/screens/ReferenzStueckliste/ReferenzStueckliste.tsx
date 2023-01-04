import { useParams } from 'react-router-dom';

import { ReferenzStueli, Role, useGetAnlageQuery } from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';

function nameof<T>(key: keyof T): keyof T {
  return key;
}

type ReferenzStueliParams = {
  id: string;
};

const ReferenzStueckliste = () => {
  const { id = '' } = useParams<ReferenzStueliParams>();

  const { role } = useAuth();

  const isAdmin = role === Role.Admin;

  let columns = {
    [nameof<ReferenzStueli>('kurzspezifikation')]: 'Kurzspezifikation',
    [nameof<ReferenzStueli>('lieferant')]: 'Lieferant',
    [nameof<ReferenzStueli>('nennweite')]: 'Nennweite',
    [nameof<ReferenzStueli>('feinspezifikation')]: 'Feinspezifikation',
  };

  if (isAdmin) {
    columns = { ...columns, actions: 'Aktionen' };
  }

  const { data, isLoading } = useGetAnlageQuery(
    { id: id },
    {
      refetchOnWindowFocus: false,
    },
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6"
      data-testid="kunde"
    >
      <h1 className="flex text-xl font-semibold">
        Kunde: {data?.getAnlage?.firma} Standort: {data?.getAnlage?.standort}
      </h1>
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
          {data?.getAnlage?.referenzStueli?.items?.map(
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
                          onClick={async () => {}}
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
              {Object.keys(columns).map((col, _index) => (
                <>
                  {col === 'actions' ? (
                    <td
                      key="action"
                      className="p-3 text-left whitespace-pre-line"
                    >
                      {true ? (
                        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded opacity-50 cursor-not-allowed">
                          <span>Einfügen</span>
                        </button>
                      ) : (
                        <button
                          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                          onClick={async () => {}}
                        >
                          <span>Einfügen</span>
                        </button>
                      )}
                    </td>
                  ) : (
                    <td
                      key={`${col}_insert`}
                      className="p-3 text-left whitespace-pre-line"
                    >
                      <input
                        type="text"
                        id={col}
                        name={col}
                        onChange={(_e) => {}}
                      />
                    </td>
                  )}
                </>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReferenzStueckliste;
