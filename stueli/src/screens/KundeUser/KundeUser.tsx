import { useListAnlagenUsersQuery } from '../../lib/react-api';

const columns: { [key: string]: string } = {
  firma: 'Firma',
  standort: 'Standort',
  email: 'User Email',
  // bemerkung: 'Bemerkung',
};

const KundeUser = () => {
  const { data, isLoading } = useListAnlagenUsersQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6 2xl:flex-row"
      data-testid="kundeuser"
    >
      <h1 className="flex text-xl font-semibold">Kunde User</h1>
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
          {data?.listAnlagenUsers?.items?.map((user, row_index) => (
            <tr key={row_index} className="border-b border-gray-400">
              {Object.keys(columns).map((col, index) => (
                <td key={index} className="p-3 text-left whitespace-pre-line">
                  {col === 'firma'
                    ? user?.anlage.firma
                    : col === 'standort'
                    ? user?.anlage.standort
                    : user?.userEmail}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KundeUser;
