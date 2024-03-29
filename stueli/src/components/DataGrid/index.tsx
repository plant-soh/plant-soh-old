import {
  flexRender,
  Row,
  Table as ReactTableProps,
} from '@tanstack/react-table';
import { useEffect, useRef } from 'react';
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
  disableKeyNavigation?: boolean;
};

export const DataGrid = <TData extends Record<string, any>>({
  table,
  tableRef,
  rows,
  disableKeyNavigation = false,
}: DataGridProps<TData>) => {
  const rowVirtualizer = useVirtual({
    parentRef: tableRef,
    size: rows.length,
    overscan: 10,
  });
  const { virtualItems: virtualRows } = rowVirtualizer;
  const composite = useCompositeState({ wrap: true });
  const tbodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    table.getSelectedRowModel().rows.forEach((row) => {
      const currentRowHtmlElement = tbodyRef.current?.children.namedItem(
        row.id,
      ) as HTMLElement;
      currentRowHtmlElement.focus();
      // currentRowHtmlElement.style.outline = '2px solid #000';
    });
  }, [table.getSelectedRowModel().rows, tbodyRef.current?.children]);

  // Function to handle key press on a row
  const handleKeyDown = (event: any, row: Row<TData>) => {
    event.stopPropagation();
    // console.log('handleKeyDown');
    const currentRow = tbodyRef.current?.children.namedItem(row.id);
    // console.log(currentRow);
    switch (event.key) {
      case 'ArrowUp':
        const upRecord = currentRow?.previousElementSibling as HTMLElement;
        upRecord.focus();
        table.getRow(upRecord.id).toggleSelected(true);
        break;
      case 'ArrowDown':
        const downRecord = currentRow?.nextElementSibling as HTMLElement;
        downRecord.focus();
        table.getRow(downRecord.id).toggleSelected(true);
        break;
      default:
        break;
    }
  };
  handleKeyDown;

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

      <Composite
        role="tbody"
        as="div"
        ref={tbodyRef}
        aria-label="datagrid"
        {...composite}
      >
        {/* {paddingTop > 0 && (
        <tr>
          <td style={{ height: `${paddingTop}px` }} />
        </tr>
      )} */}

        {virtualRows.map((virtualRow, index) => {
          const row = rows[virtualRow.index] as Row<TData>;
          if (index === virtualRows.length - 1) {
            row.getCanSelect = () => false;
          }

          return (
            <CompositeGroup
              role="tr"
              as="div"
              {...composite}
              id={row.id}
              tabIndex={0}
              key={row.id}
              aria-label="tr"
              onKeyDown={(e: any) =>
                disableKeyNavigation ? '' : handleKeyDown(e, row)
              }
              style={{
                outline: `${
                  row.getIsSelected() ? '2px solid #1a2dd7' : 'none'
                }`,
              }}
              className={`flex w-fit text-center border-b border-gray-300 focus:bg-blue-100 ${
                row.getIsSelected() ? 'bg-blue-100' : ''
              }`}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <CompositeItem
                    as="div"
                    {...composite}
                    role="td"
                    focusable
                    // tabIndex={0}
                    // onDoubleClick={(e: any) => {
                    //   e.stopPropagation();
                    //   const currentCell = tbodyRef.current?.children
                    //     .namedItem(row.id)
                    //     ?.children.namedItem(cell.id) as HTMLElement;
                    //   currentCell?.focus();
                    //   console.log(currentCell);
                    //   // row.toggleSelected();
                    // }}
                    key={cell.id}
                    aria-label="td"
                    style={{
                      width: cell.column.getSize(),
                    }}
                    className="h-10 border-r rounded-none border-gray-300/70 first:bg-gray-200/70 first:text-gray-400 first:text-xs whitespace-nowrap outline-offset-1 outline-indigo-400 "
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
