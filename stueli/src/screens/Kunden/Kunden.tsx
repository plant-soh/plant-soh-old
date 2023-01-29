import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DataGrid } from '../../components/DataGrid';
import Link from '../../components/Link';
import {
  Anlage,
  Role,
  useCreateAnlageMutation,
  useDeleteAnlageMutation,
  // useDeleteAnlagePrimaryMutation,
  useListAnlagesQuery,
} from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';

function nameof<T>(key: keyof T): keyof T {
  return key;
}

export type Kunde = {
  id: string;
  index: number;
  firma: string;
  standort: string;
  anschrift: string;
};

const Kunden = () => {
  const { role } = useAuth();

  const isAdmin = role === Role.Admin;

  let columnsOld = {
    [nameof<Anlage>('firma')]: 'Firma',
    [nameof<Anlage>('standort')]: 'Standort',
    [nameof<Anlage>('anschrift')]: 'Anchrift',
  };

  if (isAdmin) {
    columnsOld = { ...columnsOld, actions: 'Aktionen' };
  }

  const listAnlagenQuery = useListAnlagesQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const [data, setData] = useState<Kunde[]>([]);

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

  const columns = useMemo<ColumnDef<Kunde>[]>(
    () => [
      {
        accessorKey: 'index',
        enableSorting: false,
        header: ' ',
        size: 30,
        cell: (kunde) => <span>{kunde.row.original.index + 1 + '.'}</span>,
      },
      {
        accessorKey: 'firma',
        enableSorting: false,
        header: 'Firma',
        size: 150,
      },
    ],
    [],
  );

  useEffect(() => {
    if (!listAnlagenQuery.data?.listAnlages?.items) {
      return;
    }

    const anlagenTransformed: Kunde[] =
      listAnlagenQuery.data.listAnlages.items.map((anlage, index) => {
        return {
          id: anlage?.id ?? '',
          index: index,
          firma: anlage?.firma ?? '',
          standort: anlage?.standort ?? '',
          anschrift: anlage?.anschrift ?? '',
        };
      });

    setData([
      ...anlagenTransformed,
      {
        id: '-1',
        index: anlagenTransformed.length,
        firma: '',
        standort: '',
        anschrift: '',
      },
    ]);
  }, [listAnlagenQuery.data]);

  const table = useReactTable({
    data: data,
    columns: columns,
    // defaultColumn,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // state: {
    //   rowSelection,
    // },
    // initialState: {
    //   columnVisibility: {
    //     angefragt: false,
    //   },
    // },
    // onRowSelectionChange: setRowSelection,
    // enableMultiRowSelection: false,
    // getRowId: (row) => row.id,
    // meta: {
    //   updateData: (rowIndex, columnId, value) => {
    //     // Skip age index reset until after next rerender
    //     // skipAutoResetPageIndex()
    //     setData((old) =>
    //       old.map((row, index) => {
    //         if (index === rowIndex) {
    //           return {
    //             ...old[rowIndex]!,
    //             [columnId]: value,
    //           };
    //         }
    //         return row;
    //       }),
    //     );
    //   },
    //   addNewStueck: async () => {
    //     const newStueck = data.at(-1);
    //     await createStueck.mutateAsync({
    //       input: {
    //         projektId,
    //         kurzspezifikation: newStueck?.kurzspezifikation,
    //         lieferant: newStueck?.lieferant,
    //         nennweite: newStueck?.nennweite,
    //         feinspezifikation: newStueck?.feinspezifikation,
    //       },
    //     });

    //     await projektStueli.refetch();
    //   },

    //   getSelectedRowId: () => record?.index,
    // },
    debugTable: false,
  });

  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { rows } = table.getRowModel();

  if (listAnlagenQuery.isLoading) return <div>Loading...</div>;

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6"
      data-testid="kunden"
    >
      <h1 className="flex text-xl font-semibold">Kunden</h1>
      <div className="p-6 bg-white rounded-md shadow-md ">
        <h2 className="text-[15px] font-semibold">Projektstückliste</h2>
        <DataGrid table={table} tableRef={tableContainerRef} rows={rows} />
      </div>
      <table className="mt-4">
        <thead>
          <tr>
            {Object.keys(columnsOld).map((col, index) => (
              <th
                scope="col"
                className="relative p-3 text-xs font-semibold text-left text-white whitespace-pre-line align-top bg-bblue-500"
                key={index}
              >
                {columnsOld[col]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-50" data-testid="recent-calls-table-body">
          {listAnlagenQuery.data?.listAnlages?.items?.map(
            (anlage, row_index) =>
              anlage && (
                <tr key={row_index} className="border-b border-gray-400">
                  {Object.keys(columnsOld).map((col, index) => (
                    <td
                      key={index}
                      className="p-3 text-left whitespace-pre-line"
                    >
                      {col === 'actions' ? (
                        <button
                          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                          onClick={async () => {
                            await deleteAnlage.mutateAsync({
                              input: {
                                id: anlage?.id,
                              },
                            });
                            await listAnlagenQuery.refetch();
                          }}
                        >
                          <span>Löschen</span>
                        </button>
                      ) : col === 'standort' ? (
                        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                          <Link
                            name="referenz-stueli"
                            to={`/kunden/${anlage.id}`}
                          >
                            <span>{anlage[col]}</span>
                          </Link>
                        </button>
                      ) : (
                        anlage[col as 'firma' | 'anschrift']
                      )}
                    </td>
                  ))}
                </tr>
              ),
          )}
          {isAdmin && (
            <tr key="insert_row" className="border-b border-gray-400">
              <td
                key="firma_insert"
                className="p-3 text-left whitespace-pre-line"
              >
                <input
                  className="border-2 border-black"
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
                  className="border-2 border-black"
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
                  className="border-2 border-black"
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
                      await listAnlagenQuery.refetch();
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

export default Kunden;
