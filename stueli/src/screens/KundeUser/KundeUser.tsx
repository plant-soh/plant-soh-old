import { useEffect, useState } from 'react';
import {
  useCreateAnlagenUserMutation,
  useDeleteAnlagenUserMutation,
  // useCreateAnlagenUserPrimaryMutation,
  // useDeleteAnlagenUserPrimaryMutation,
  useListAnlagenUsersQuery,
  useListAnlagesQuery,
  useListUsersQuery,
} from '../../lib/react-api';

const columns: { [key: string]: string } = {
  firma: 'Firma',
  standort: 'Standort',
  email: 'User Email',
  actions: 'Aktionen',
  // bemerkung: 'Bemerkung',
};

const KundeUser = () => {
  const { data, isLoading, refetch } = useListAnlagenUsersQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const anlagen = useListAnlagesQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const users = useListUsersQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const deleteAnlagenUser = useDeleteAnlagenUserMutation();
  const createAnlagenUser = useCreateAnlagenUserMutation();

  const [newKundeUser, setNewKundeUser] = useState<
    | {
        anlageId?: string;
        userEmail?: string;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    setNewKundeUser({
      anlageId: anlagen.data?.listAnlages?.items?.[0]?.id,
      userEmail: users.data?.listUsers?.items?.[0]?.email,
    });
  }, [anlagen.isLoading, users.isLoading]);

  if (
    isLoading ||
    !data?.listAnlagenUsers?.items ||
    anlagen.isLoading ||
    users.isLoading
  )
    return <div>Loading...</div>;

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6"
      data-testid="kundeuser"
    >
      <h1 className="flex text-xl font-semibold">Anlagenbauer</h1>
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
                      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                      onClick={async () => {
                        await deleteAnlagenUser.mutateAsync({
                          input: {
                            anlageId: anlagenuser.anlageId,
                            userEmail: anlagenuser.userEmail,
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
              colSpan={2}
              key="firma_insert"
              className="p-3 text-left whitespace-pre-line"
            >
              <div className="select-container-kunde">
                <select
                  onChange={(e) =>
                    setNewKundeUser({
                      ...newKundeUser,
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
              </div>
            </td>
            <td
              key="email_insert"
              className="p-3 text-left whitespace-pre-line"
            >
              <div className="select-container-email">
                <select
                  onChange={(e) =>
                    setNewKundeUser({
                      ...newKundeUser,
                      userEmail: e.target.value,
                    })
                  }
                >
                  {users.data?.listUsers?.items?.map((user) => (
                    <option key={user?.email} value={user?.email}>
                      {user?.email}
                    </option>
                  ))}
                </select>
              </div>
            </td>
            <td key="action" className="p-3 text-left whitespace-pre-line">
              {!newKundeUser?.anlageId || !newKundeUser?.userEmail ? (
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded opacity-50 cursor-not-allowed">
                  <span>Einfügen</span>
                </button>
              ) : (
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                  onClick={async () => {
                    if (!newKundeUser?.anlageId || !newKundeUser?.userEmail) {
                      console.debug('newKundeUser missing');
                      return;
                    }
                    await createAnlagenUser.mutateAsync({
                      input: {
                        anlageId: newKundeUser.anlageId,
                        userEmail: newKundeUser.userEmail,
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

export default KundeUser;
