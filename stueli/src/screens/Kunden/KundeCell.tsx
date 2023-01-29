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
  toggleRowSelectedOnClick = false,
  editOnDoubleClick = true,
  type = EditTableType.input,
  selectOptions = [],
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
  toggleRowSelectedOnClick?: boolean;
  editOnDoubleClick?: boolean;
  type?: EditTableType;
  selectOptions?: any[];
}) => {
  // const {
  //   value,
  //   row,
  //   row: { rowIndex },
  //   column: { id },
  //   table,
  // } = cell;

  // const {
  //   kurzspezifikationVorschlaege,
  //   lieferantVorschlaege,
  //   nennweiteVorschlaege,
  //   feinspezifikationVorschlaege,
  //   setKurzspezifikation,
  //   setLieferant,
  //   setNennweite,
  //   setFeinspezifikation,
  // } = useSuggestion();

  const inputRef = useRef<HTMLInputElement>(null);
  // const searchSuggestionsRef = useRef<HTMLDivElement>(null);

  // console.log(`cell=${JSON.stringify(cell)}`);
  const initialValue = cellValue;
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(cellValue);
  // const suggestions = ['johnjoe', 'janejannet', 'jackdaniels'];

  // const [initialSuggestions, setInitialSuggestions] = useState<string[]>([]);

  // useEffect(() => {
  //   if (columnId === 'kurzspezifikation') {
  //     setInitialSuggestions(kurzspezifikationVorschlaege);
  //   } else if (columnId === 'lieferant') {
  //     setInitialSuggestions(lieferantVorschlaege);
  //   } else if (columnId === 'nennweite') {
  //     setInitialSuggestions(nennweiteVorschlaege);
  //   } else if (columnId === 'feinspezifikation') {
  //     setInitialSuggestions(feinspezifikationVorschlaege);
  //   }
  // }, [
  //   columnId,
  //   kurzspezifikationVorschlaege,
  //   lieferantVorschlaege,
  //   nennweiteVorschlaege,
  //   feinspezifikationVorschlaege,
  // ]);

  // useEffect(() => {
  //   setSuggestionList(initialSuggestions);
  // }, [initialSuggestions, setInitialSuggestions]);

  // const [suggestionList, setSuggestionList] = useState<string[]>([]);
  // const [showSuggestions, setShowSuggestions] = useState(true);

  // let { handleModal } = useModal();

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
    <div
      className="w-full h-full"
      onClick={() => {
        if (toggleRowSelectedOnClick) row.toggleSelected();
      }}
      onDoubleClick={() => row.toggleSelected(false)}
    >
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
        {type === EditTableType.select && (
          <div className="relative flex w-full bg-white">
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
        )}
      </EditTable>
    </div>
  );
};
