import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DataGrid } from '../../components/DataGrid';
import {
  useCreateAnlageMutation,
  // useDeleteAnlagePrimaryMutation,
  useListAnlagesQuery,
} from '../../lib/react-api';
import { KundeCell } from './KundeCell';

export type Kunde = {
  id: string;
  index: number;
  firma: string;
  standort: string;
  anschrift: string;
};

const Kunden = () => {
  // const { role } = useAuth();

  // const isAdmin = role === Role.Admin;

  const listAnlagenQuery = useListAnlagesQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const [data, setData] = useState<Kunde[]>([]);

  // const deleteAnlage = useDeleteAnlageMutation();
  const createAnlage = useCreateAnlageMutation();

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
      {
        accessorKey: 'standort',
        enableSorting: false,
        header: 'Standort',
        size: 150,
      },
      {
        accessorKey: 'anschrift',
        enableSorting: false,
        header: 'Anschrift',
        size: 150,
      },
      {
        accessorKey: 'action',
        enableSorting: false,
        header: ' ',
        size: 40,
      },
    ],
    [],
  );

  const defaultColumn: Partial<ColumnDef<Kunde>> = {
    cell: (cell) => (
      <KundeCell
        cellValue={cell.getValue() as string}
        row={cell.row}
        columnId={cell.column.id}
        table={cell.table}
        refetch={listAnlagenQuery.refetch}
        toggleRowSelectedOnClick={true}
      />
    ),
  };

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
    defaultColumn,
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
    meta: {
      updateData: (rowIndex, columnId, value) => {
        // Skip age index reset until after next rerender
        // skipAutoResetPageIndex()
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
        const newAnlage = data.at(-1);
        await createAnlage.mutateAsync({
          input: {
            firma: newAnlage?.firma ?? '',
            standort: newAnlage?.standort ?? '',
            anschrift: newAnlage?.anschrift ?? '',
          },
        });

        await listAnlagenQuery.refetch();
      },
    },
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
      <div className="p-6 bg-white rounded-md shadow-md ">
        <h2 className="text-[15px] font-semibold">Kunden</h2>
        <DataGrid table={table} tableRef={tableContainerRef} rows={rows} />
      </div>
    </div>
  );
};

export default Kunden;
