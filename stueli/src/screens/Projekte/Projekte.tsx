import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DataGrid } from '../../components/DataGrid';
import { useWindowSize } from '../../hooks/useWindowSize';
import {
  useCreateProjektMutation,
  useListAnlagesQuery,
  useListProjektsQuery,
} from '../../lib/react-api';
import { ProjektCell } from './ProjektCell';

export type Projekt = {
  id: string;
  index: number;
  firma: string;
  standort: string;
  projektNummer?: number;
};

const Projekte = () => {
  const listProjektQuery = useListProjektsQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const anlagen = useListAnlagesQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const createProjekt = useCreateProjektMutation();

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
    cell: (cell) => {
      return cell.row.original.id === '-1' ? (
        (cell.column.id === 'firma' && (
          <ProjektCell
            cellValue={cell.getValue() as string}
            row={cell.row}
            columnId={cell.column.id}
            table={cell.table}
            refetch={listProjektQuery.refetch}
            selectOptions={anlagen.data?.listAnlages?.items?.map(
              (anlage) => anlage?.firma,
            )}
          />
        )) ||
          (cell.column.id === 'standort' && (
            <ProjektCell
              cellValue={cell.getValue() as string}
              row={cell.row}
              columnId={cell.column.id}
              table={cell.table}
              refetch={listProjektQuery.refetch}
              selectOptions={anlagen.data?.listAnlages?.items?.map(
                (anlage) => anlage?.standort,
              )}
            />
          ))
      ) : (
        <ProjektCell
          cellValue={cell.getValue() as string}
          row={cell.row}
          columnId={cell.column.id}
          table={cell.table}
          refetch={listProjektQuery.refetch}
          selectOptions={anlagen.data?.listAnlages?.items?.map(
            (anlage) => anlage?.standort,
          )}
        />
      );
    },
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
        projektNummer: 0,
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
        const newProjektItem = data.at(-1);
        newProjektItem;
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
        <h2 className="text-[15px] font-semibold">Projekte</h2>
        <DataGrid
          table={table}
          tableRef={tableContainerRef}
          rows={rows}
          disableKeyNavigation={true}
        />
      </div>
    </>
  );
};

export default Projekte;
