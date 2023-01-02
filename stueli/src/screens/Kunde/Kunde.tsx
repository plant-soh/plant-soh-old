import { useListAnlagesQuery } from '../../lib/react-api';

const columns: { [key: string]: string } = {
  firma: 'Firma',
  standort: 'Standort',
  anschrift: 'Anchrift',
  // bemerkung: 'Bemerkung',
};

const Kunde = () => {
  const { data, isLoading } = useListAnlagesQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6 2xl:flex-row"
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
          {data?.listAnlages?.items?.map((anlage, row_index) => (
            <tr key={row_index} className="border-b border-gray-400">
              {Object.keys(columns).map((col, index) => (
                <td key={index} className="p-3 text-left whitespace-pre-line">
                  {col === 'firma'
                    ? anlage?.firma
                    : col === 'standort'
                    ? anlage?.standort
                    : anlage?.anschrift}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Kunde;
