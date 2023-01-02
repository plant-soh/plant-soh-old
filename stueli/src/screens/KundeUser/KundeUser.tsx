import {
  useDeleteAnlagenUserMutation,
  useListAnlagenUsersQuery,
} from '../../lib/react-api';

const columns: { [key: string]: string } = {
  firma: 'Firma',
  standort: 'Standort',
  email: 'User Email',
  actions: 'Aktionen',
  // bemerkung: 'Bemerkung',
};

const KundeUser = () => {
  const { data, isLoading } = useListAnlagenUsersQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const deleteAnlagenUser = useDeleteAnlagenUserMutation();

  if (isLoading || !data?.listAnlagenUsers?.items) return <div>Loading...</div>;

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6"
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
          {data.listAnlagenUsers.items.map(
            (anlagenuser, row_index) =>
              anlagenuser && (
                <tr key={row_index} className="border-b border-gray-400">
                  {Object.keys(columns)
                    .slice(0, -1)
                    .map((col, index) => (
                      <td
                        key={index}
                        className="p-3 text-left whitespace-pre-line"
                      >
                        {col === 'firma'
                          ? anlagenuser.anlage.firma
                          : col === 'standort'
                          ? anlagenuser.anlage.standort
                          : anlagenuser.userEmail}
                      </td>
                    ))}
                  <td
                    key="action"
                    className="p-3 text-left whitespace-pre-line"
                  >
                    <button
                      className="cursor-pointer"
                      onClick={() =>
                        deleteAnlagenUser.mutateAsync({
                          input: {
                            anlageId: anlagenuser.anlageId,
                            userEmail: anlagenuser.userEmail,
                          },
                        })
                      }
                    >
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default KundeUser;
