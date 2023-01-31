import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DataGrid } from '../../components/DataGrid';
import Link from '../../components/Link';
import { useWindowSize } from '../../hooks/useWindowSize';
import {
  Anlage,
  Role,
  useCreateProjektMutation,
  useDeleteProjektMutation,
  useListAnlagesQuery,
  useListProjektsQuery,
} from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';
import { ProjektCell } from './ProjektCell';

function nameof<T>(key: keyof T): keyof T {
  return key;
}

export type Projekt = {
  id: string;
  index: number;
  firma: string;
  standort: string;
  projektNummer?: number;
};

const Projekte = () => {
  const { role } = useAuth();

  const isAdmin = role === Role.Admin;

  let columnsOld = {
    [nameof<Anlage>('firma')]: 'Firma',
    [nameof<Anlage>('standort')]: 'Standort',
    [nameof<Projekt>('projektNummer')]: 'Projektnummer',
  };

  // if (isAdmin) {
  //   columns = { ...columns, actions: 'Aktionen' };
  // }

  const listProjektQuery = useListProjektsQuery(undefined, {
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

  const [data, setData] = useState<Projekt[]>([]);

  const { width } = useWindowSize();

  const columns = useMemo<ColumnDef<Projekt>[]>(
    () => [
      {
        accessorKey: 'index',
        enableSorting: false,
        header: ' ',
        size: 30,
        cell: (projekt) => <span>{projekt.row.original.index + 1 + '.'}</span>,
      },
      {
        accessorKey: 'firma',
        enableSorting: false,
        header: 'Firma',
        size: width ? width / 5 : 150,
      },
      {
        accessorKey: 'standort',
        enableSorting: false,
        header: 'Standort',
        size: width ? width / 5 : 150,
      },
      {
        accessorKey: 'projektNummer',
        enableSorting: false,
        header: 'Projekt-Nummer',
        size: width ? width / 5 : 150,
      },
      {
        accessorKey: 'action',
        enableSorting: false,
        header: ' ',
        size: 40,
      },
    ],
    [width],
  );

  const defaultColumn: Partial<ColumnDef<Projekt>> = {
    cell: (cell) => (
      <ProjektCell
        cellValue={cell.getValue() as string}
        row={cell.row}
        columnId={cell.column.id}
        table={cell.table}
        refetch={listProjektQuery.refetch}
      />
    ),
  };

  useEffect(() => {
    if (!listProjektQuery.data?.listProjekts?.items) {
      return;
    }

    const projectsTransformed: Projekt[] =
      listProjektQuery.data.listProjekts.items.map((projekt, index) => {
        return {
          id: projekt?.id ?? '',
          index: index,
          firma: projekt?.anlage.firma ?? '',
          standort: projekt?.anlage.standort ?? '',
          projektNummer: projekt?.projektNummer,
        };
      });

    setData([
      ...projectsTransformed,
      {
        id: '-1',
        index: projectsTransformed.length,
        firma: '',
        standort: '',
      },
    ]);
  }, [listProjektQuery.data]);

  const table = useReactTable({
    data: data,
    columns: columns,
    defaultColumn,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          }),
        );
      },
      addNewRow: async () => {
        const newProjekt = data.at(-1);
        newProjekt;
        await createProjekt.mutateAsync({
          input: {
            anlageId: '',
            projektNummer: 0,
          },
        });

        await listProjektQuery.refetch();
      },
    },
    debugTable: false,
  });

  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { rows } = table.getRowModel();

  if (listProjektQuery.isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="p-6 bg-white rounded-md shadow-md ">
        <h2 className="text-[15px] font-semibold">Kunden</h2>
        <DataGrid
          table={table}
          tableRef={tableContainerRef}
          rows={rows}
          disableKeyNavigation={true}
        />
      </div>
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
                  {columnsOld[col]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-gray-50" data-testid="recent-calls-table-body">
            {listProjektQuery.data?.listProjekts?.items?.map(
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
                              await listProjektQuery.refetch();
                            }}
                          >
                            <span>Löschen</span>
                          </button>
                        ) : col === 'standort' ? (
                          <span>{projekt.anlage[col]}</span>
                        ) : col === 'projektNummer' ? (
                          <Link
                            name="projekt-stueli"
                            to={`/projekte/${projekt.id}`}
                          >
                            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                              {<span>{projekt[col]}</span>}
                            </button>{' '}
                          </Link>
                        ) : (
                          projekt.anlage[col as 'firma']
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
                    className="border-2 border-black"
                    onChange={(e) =>
                      setNewProjekt({
                        ...newProjekt,
                        anlageId: e.target.value,
                      })
                    }
                  >
                    {anlagen.data?.listAnlages?.items
                      ?.sort(
                        (a1, a2) =>
                          a1?.firma.localeCompare(a2?.firma ?? '') ?? 0,
                      )
                      .map((anlage) => (
                        <option key={anlage?.id} value={anlage?.id}>
                          {`Firma: ${anlage?.firma} Standort: ${anlage?.standort}`}
                        </option>
                      ))}
                  </select>
                </td>

                <td
                  key="projektNummer_insert"
                  className="p-3 text-left whitespace-pre-line"
                >
                  <input
                    className="border-2 border-black"
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
                        if (
                          !newProjekt?.projektNummer ||
                          !newProjekt?.anlageId
                        ) {
                          console.debug('newProjekt missing');
                          return;
                        }
                        await createProjekt.mutateAsync({
                          input: {
                            anlageId: newProjekt.anlageId,
                            projektNummer: newProjekt.projektNummer,
                          },
                        });
                        await listProjektQuery.refetch();
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
    </>
  );
};

export default Projekte;
