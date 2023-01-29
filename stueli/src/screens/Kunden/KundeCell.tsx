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
  useDeleteAnlageMutation,
  useUpdateAnlageMutation,
} from '../../lib/react-api';
import { Kunde } from './Kunden';

export const KundeCell = ({
  className,
  cellValue,
  row,
  // rowIndex,
  columnId,
  table,
  refetch,
  editOnDoubleClick = true,
  type = EditTableType.input,
}: {
  className?: string;
  cellValue: any;
  row: Row<Kunde>;
  // rowIndex: number;
  columnId: string;
  table: Table<Kunde>;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<
    QueryObserverResult<ProjektStueliByKurzspezifikationQuery, unknown>
  >;
  editOnDoubleClick?: boolean;
  type?: EditTableType;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const initialValue = cellValue;
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(cellValue);

  const updateAnlage = useUpdateAnlageMutation();
  const deleteAnlage = useDeleteAnlageMutation();

  // When the input is blurred, we'll call our table meta's updateData function
  // const onBlur = () => {
  //   table.options.meta?.updateData(rowIndex, id, value);
  // };

  const onSave = async () => {
    table.options.meta?.updateData(row.index, columnId, value);

    // save if not insert row
    if (row.original.id !== '-1') {
      // only update if something changed
      if (cellValue === value) return;
      await updateAnlage.mutateAsync({
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
            await deleteAnlage.mutateAsync({
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
    <div className="flex w-full h-full">
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
          type={type}
          editOnDoubleClick={editOnDoubleClick}
        >
          {type === EditTableType.input && (
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
              // onBlur={() => onSave()}
            />
          )}
        </EditTable>
      )}
    </div>
  );
};
