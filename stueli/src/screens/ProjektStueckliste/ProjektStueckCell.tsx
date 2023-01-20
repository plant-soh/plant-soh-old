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
import { amplifyFetcher } from '../../lib/fetcher';
import {
  ListProjektStuelisDocument,
  ListProjektStuelisQuery,
  ListProjektStuelisQueryVariables,
  ListReferenzStuelisDocument,
  ListReferenzStuelisQuery,
  ListReferenzStuelisQueryVariables,
  ProjektStueliByKurzspezifikationQuery,
  useDeleteProjektStueliMutation,
  useUpdateProjektStueliMutation,
} from '../../lib/react-api';
import { useModal } from '../../providers/ModalProvider';
import { useSuggestion } from '../../providers/SuggestionProvider';
import { ProjektStueck } from './ProjektStueckliste';

export const ProjektStueckCell = ({
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
  row: Row<ProjektStueck>;
  // rowIndex: number;
  columnId: string;
  table: Table<ProjektStueck>;
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

  const {
    kurzspezifikationVorschlaege,
    lieferantVorschlaege,
    nennweiteVorschlaege,
    feinspezifikationVorschlaege,
    setKurzspezifikation,
    setLieferant,
    setNennweite,
    setFeinspezifikation,
  } = useSuggestion();

  const inputRef = useRef<HTMLInputElement>(null);
  const searchSuggestionsRef = useRef<HTMLDivElement>(null);

  // console.log(`cell=${JSON.stringify(cell)}`);
  const initialValue = cellValue;
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);
  // const suggestions = ['johnjoe', 'janejannet', 'jackdaniels'];

  const [initialSuggestions, setInitialSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (columnId === 'kurzspezifikation') {
      setInitialSuggestions(kurzspezifikationVorschlaege);
    } else if (columnId === 'lieferant') {
      setInitialSuggestions(lieferantVorschlaege);
    } else if (columnId === 'nennweite') {
      setInitialSuggestions(nennweiteVorschlaege);
    } else if (columnId === 'feinspezifikation') {
      setInitialSuggestions(feinspezifikationVorschlaege);
    }
  }, [
    columnId,
    kurzspezifikationVorschlaege,
    lieferantVorschlaege,
    nennweiteVorschlaege,
    feinspezifikationVorschlaege,
  ]);

  useEffect(() => {
    setSuggestionList(initialSuggestions);
  }, [initialSuggestions, setInitialSuggestions]);

  const [suggestionList, setSuggestionList] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  let { handleModal } = useModal();

  const updateStueck = useUpdateProjektStueliMutation();
  const deleteStueck = useDeleteProjektStueliMutation();

  // When the input is blurred, we'll call our table meta's updateData function
  // const onBlur = () => {
  //   table.options.meta?.updateData(rowIndex, id, value);
  // };

  const onSave = async () => {
    table.options.meta?.updateData(row.index, columnId, value);
    let bmkDouble = undefined;
    if (columnId === 'bmk' && value) {
      const foundStueckeInProjekten = await amplifyFetcher<
        ListProjektStuelisQuery,
        ListProjektStuelisQueryVariables
      >(ListProjektStuelisDocument, {
        filter: { bmk: { eq: value } },
      }).call(undefined);

      let projektStueckExist =
        (foundStueckeInProjekten.listProjektStuelis?.items?.length ?? 0) > 0;

      if (projektStueckExist) {
        await handleModal(
          `BMK existiert bereits im Projektstückliste: ${Array.from(
            new Set(
              foundStueckeInProjekten.listProjektStuelis?.items?.map(
                (foundStueck) =>
                  `Firma: ${foundStueck?.projekt.anlage.firma} Standort: ${foundStueck?.projekt.anlage.standort} Projektnummer: ${foundStueck?.projekt.projektNummer} `,
              ),
            ),
          ).join(', ')}!`,
        );
      }

      // Check ob gleiche BMK in einer Referenzstueli bereits existiert
      const foundStueckeInReferenz = await amplifyFetcher<
        ListReferenzStuelisQuery,
        ListReferenzStuelisQueryVariables
      >(ListReferenzStuelisDocument, {
        filter: { bmk: { eq: value } },
      }).call(undefined);

      const referenzStueckExist =
        (foundStueckeInReferenz.listReferenzStuelis?.items?.length ?? 0) > 0;

      if (referenzStueckExist) {
        await handleModal(
          `BMK existiert bereits in Referenzstückliste: ${Array.from(
            new Set(
              foundStueckeInReferenz.listReferenzStuelis?.items?.map(
                (foundStueck) =>
                  `Firma: ${foundStueck?.anlage.firma} Standort: ${foundStueck?.anlage.standort} `,
              ),
            ),
          ).join(', ')}!`,
        );
      }

      bmkDouble = projektStueckExist || referenzStueckExist;
    }

    // save if not insert row
    if (row.original.id !== '-1') {
      // only update if something changed
      if (initialValue === value && bmkDouble === undefined) return;
      await updateStueck.mutateAsync({
        input: {
          id: row.original.id,
          [columnId]: value,
          bmkDouble,
        },
      });

      await refetch();
    } else {
      if (columnId === 'kurzspezifikation') {
        setKurzspezifikation(value);
      } else if (columnId === 'lieferant') {
        setLieferant(value);
      } else if (columnId === 'nennweite') {
        setNennweite(value);
      } else if (columnId === 'feinspezifikation') {
        setFeinspezifikation(value);
      }
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
            table.options.meta?.addNewStueck();
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
            await deleteStueck.mutateAsync({
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

  const suggestionItems = suggestionList
    .filter((suggestion) => suggestion.includes(value))
    .map((item) => (
      <div
        key={item}
        className="text-left hover:text-blue-500"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={(_e) => {
          setValue(item);
          setShowSuggestions(false);
        }}
      >
        {item}
      </div>
    ));

  useEffect(() => {
    setSuggestionList(
      initialSuggestions.filter((suggestion) => suggestion.startsWith(value)),
    );
  }, [value, setValue]);

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
        type={EditTableType.input}
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
              setShowSuggestions(true);
            }}
            // onBlur={() => onSave()}
          />
        )}
        {type === EditTableType.select && (
          <select onChange={(e) => setValue(e.target.value)}>
            {selectOptions.map((option) => (
              <option key={option} value={option}>
                {String(option)}
              </option>
            ))}
          </select>
        )}

        {showSuggestions &&
          row.original.id === '-1' && ( // suggestions only for insert row
            <div
              ref={searchSuggestionsRef}
              className="w-full bg-white border-2 "
            >
              {suggestionItems}
            </div>
          )}
      </EditTable>
    </div>
  );
};
