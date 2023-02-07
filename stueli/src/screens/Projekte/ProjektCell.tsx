import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query';
import { Row, Table } from '@tanstack/react-table';
import { RefObject, useEffect, useRef, useState } from 'react';
import { MdAdd, MdDelete } from 'react-icons/md';
import { Clickable } from 'reakit/Clickable';
import EditTable, { EditTableType } from '../../components/Editable';
import Link from '../../components/Link';
import {
  ProjektStueliByKurzspezifikationQuery,
  useDeleteProjektMutation,
  useUpdateProjektMutation,
} from '../../lib/react-api';
import { Projekt } from './Projekte';

export const ProjektCell = ({
  className,
  cellValue,
  row,
  // rowIndex,
  columnId,
  table,
  refetch,
  editOnDoubleClick = true,
  type = EditTableType.input,
  selectOptions = [],
}: {
  className?: string;
  cellValue: any;
  row: Row<Projekt>;
  // rowIndex: number;
  columnId: string;
  table: Table<Projekt>;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<
    QueryObserverResult<ProjektStueliByKurzspezifikationQuery, unknown>
  >;
  editOnDoubleClick?: boolean;
  type?: EditTableType;
  selectOptions?: any[];
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const initialValue = cellValue;
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(cellValue);

  const updateProjekt = useUpdateProjektMutation();
  const deleteProjekt = useDeleteProjektMutation();

  const onSave = async () => {
    table.options.meta?.updateData(row.index, columnId, value);

    // save if not insert row
    if (row.original.id !== '-1') {
      // only update if something changed
      if (cellValue === value) return;
      await updateProjekt.mutateAsync({
        input: {
          id: row.original.id,
          [columnId]: value,
        },
      });

      await refetch();
    }

    return;
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue, columnId]);

  if (columnId === 'action') {
    if (row.original.id === '-1') {
      return (
        <Clickable
          as="button"
          className="flex items-center justify-center mx-auto font-medium text-gray-500 transition-colors rounded-full outline-none focus:bg-gray-200 w-7 h-7"
          onClick={async () => {
            table.options.meta?.addNewRow();
          }}
        >
          <MdAdd size={18} />
        </Clickable>
      );
    } else {
      return (
        <Clickable
          as="button"
          className="flex items-center justify-center mx-auto font-medium text-gray-500 transition-colors rounded-full outline-none focus:bg-gray-200 w-7 h-7"
          onClick={async () => {
            await deleteProjekt.mutateAsync({
              input: {
                id: row.original.id,
              },
            });
            await refetch();
          }}
        >
          <MdDelete size={18} />
        </Clickable>
      );
    }
  }

  return (
    <div className="w-full h-full text-left">
      {columnId === 'standort' && row.original.id !== '-1' ? (
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          <Link name="referenz-stueli" to={`/kunden/${row.original.id}`}>
            <span>{value}</span>
          </Link>
        </button>
      ) : (
        <EditTable
          className={`w-full pt-3 ${className}`}
          key={columnId}
          text={String(value)}
          onSave={() => onSave()}
          onCancel={async () => setValue(initialValue)}
          childRef={inputRef as RefObject<HTMLInputElement>}
          type={
            columnId === 'firma' && row.original.id === '-1'
              ? EditTableType.select
              : type
          }
          editOnDoubleClick={editOnDoubleClick}
        >
          {columnId === 'firma' && row.original.id === '-1' ? (
            <div>
              <input
                className="w-full bg-transparent focus:bg-white outline-none h-10 p-3 focus:ring-[1.5px] focus:ring-indigo-400"
                key={columnId}
                ref={inputRef}
                type="text"
                name={columnId}
                placeholder={columnId}
                value={value as string}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              {selectOptions.map((option, index) => (
                <button
                  style={{ top: 42 + index * 40 }}
                  className="shadow-xl absolute text-left w-full bg-white outline-none h-10 p-3 focus:ring-[1.5px] focus:ring-indigo-400 hover:bg-blue-100"
                  key={option}
                  // ref={inputRef}
                  onMouseDown={(e) => {
                    console.log('select option');
                    setValue(option);
                    e.currentTarget.blur();
                  }}
                >
                  {String(option)}
                </button>
              ))}
            </div>
          ) : (
            <input
              className="w-full bg-transparent focus:bg-white outline-none h-10 p-3 focus:ring-[1.5px] focus:ring-indigo-400"
              key={columnId}
              ref={inputRef}
              type="text"
              name={columnId}
              placeholder={columnId}
              value={value as string}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          )}
        </EditTable>
      )}
    </div>
  );
};
