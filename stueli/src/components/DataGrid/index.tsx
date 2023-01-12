import {
  flexRender,
  Row,
  Table as ReactTableProps,
} from '@tanstack/react-table';
import { useVirtual } from 'react-virtual';
import {
  Composite,
  CompositeGroup,
  CompositeItem,
  useCompositeState,
} from 'reakit/Composite';

type DataGridProps<TData> = {
  table: ReactTableProps<TData>;
  tableRef: React.RefObject<HTMLDivElement>;
  rows: Row<TData>[];
};

export const DataGrid = <TData extends Record<string, any>>({
  table,
  tableRef,
  rows,
}: DataGridProps<TData>) => {
  const rowVirtualizer = useVirtual({
    parentRef: tableRef,
    size: rows.length,
    overscan: 10,
  });
  const { virtualItems: virtualRows } = rowVirtualizer;
  const composite = useCompositeState({ wrap: true });

  return (
    <table
      role="table"
      className="mt-2 border border-b-2 border-gray-300 rounded-xs"
    >
      <Composite role="grid" as="thead" aria-label="datagrid" {...composite}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b border-gray-300">
            {headerGroup.headers.map((header) => {
              return (
                <th
                  role="columnheader"
                  scope="col"
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{ width: header.getSize() }}
                  className="h-8 px-3 text-xs font-light text-left text-gray-500 border-l bg-gray-200/70 border-gray-300/50 whitespace-nowrap "
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}

                      {{
                        asc: <i></i>,
                        desc: <i></i>,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </Composite>

      <Composite role="grid" as="tbody" aria-label="datagrid" {...composite}>
        {/* {paddingTop > 0 && (
        <tr>
          <td style={{ height: `${paddingTop}px` }} />
        </tr>
      )} */}

        {virtualRows.map((virtualRow) => {
          const row = rows[virtualRow.index] as Row<TData>;

          return (
            <CompositeGroup
              role="row"
              as="tr"
              {...composite}
              key={row.id}
              aria-label="datagrid"
              className="border-b border-gray-300 hover:bg-[#EEF3FB]"
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <CompositeItem
                    as="td"
                    {...composite}
                    role="gridcell"
                    focusable
                    key={cell.id}
                    aria-label="datagrid"
                    className="relative text-sm border-r rounded-none border-gray-300/70 first:bg-gray-200/70 first:text-gray-400 first:text-xs whitespace-nowrap outline-offset-1 outline-indigo-400 "
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </CompositeItem>
                );
              })}
            </CompositeGroup>
          );
        })}
        {/* {paddingBottom > 0 && (
        <tr>
          <td style={{ height: `${paddingBottom}px` }} />
        </tr>
      )} */}
      </Composite>
    </table>
  );
};
