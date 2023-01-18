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
    <div
      role="table"
      className="mt-2 border border-b-2 border-gray-300 rounded-xs w-fit"
      style={{ width: table.getCenterTotalSize() }}
    >
      <Composite role="thead" as="div" aria-label="datagrid" {...composite}>
        {table.getHeaderGroups().map((headerGroup) => (
          <div
            role="tr"
            key={headerGroup.id}
            className="flex border-b border-gray-300"
          >
            {headerGroup.headers.map((header) => {
              return (
                <div
                  role="th"
                  // scope="col"
                  key={header.id}
                  // colSpan={header.colSpan}
                  style={{ width: header.getSize() }}
                  className="relative px-3 pt-1 text-xs font-light text-center text-gray-500 border-l h-7 bg-gray-200/70 border-gray-300/50 whitespace-nowrap"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  <div
                    onClick={header.column.getToggleSortingHandler()}
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={`absolute hover:opacity-100 opacity-0 right-0 top-0 h-full w-2 bg-gray-500 cursor-col-resize	select-none touch-none ${
                      header.column.getIsResizing()
                        ? 'bg-blue-500 opacity-100'
                        : ''
                    }`}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </Composite>

      <Composite role="tbody" as="div" aria-label="datagrid" {...composite}>
        {/* {paddingTop > 0 && (
        <tr>
          <td style={{ height: `${paddingTop}px` }} />
        </tr>
      )} */}

        {virtualRows.map((virtualRow) => {
          const row = rows[virtualRow.index] as Row<TData>;

          return (
            <CompositeGroup
              role="tr"
              as="div"
              {...composite}
              key={row.id}
              aria-label="datagrid"
              className={`flex w-fit text-center border-b border-gray-300 ${
                row.getIsSelected() ? 'bg-[#EEF3FB]' : ''
              }`}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <CompositeItem
                    as="div"
                    {...composite}
                    role="td"
                    focusable
                    key={cell.id}
                    aria-label="datagrid"
                    style={{
                      width: cell.column.getSize(),
                    }}
                    className="h-10 text-sm border-r rounded-none border-gray-300/70 first:bg-gray-200/70 first:text-gray-400 first:text-xs whitespace-nowrap outline-offset-1 outline-indigo-400 "
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
    </div>
  );
};
