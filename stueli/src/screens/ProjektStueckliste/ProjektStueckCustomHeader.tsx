import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import EditTable, { EditTableType } from '../../components/Editable';

import { GetProjektQuery, useUpdateProjektMutation } from '../../lib/react-api';

export const ProjektStueckCustomHeader = ({
  projektId,
  columnId,
  projektCustomColumn,
  customColumnName,
  projektRefetch,
}: {
  projektId: string;
  columnId: string;
  projektCustomColumn: string;
  customColumnName: string;
  projektRefetch: (
    options?: (RefetchOptions & RefetchQueryFilters<unknown>) | undefined,
  ) => Promise<QueryObserverResult<GetProjektQuery, unknown>>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // console.log(`cell=${JSON.stringify(cell)}`);
  const initialValue = customColumnName;
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  const updateProjekt = useUpdateProjektMutation();

  const onSave = async () => {
    // only update if something changed
    if (initialValue === value) return;
    await updateProjekt.mutateAsync({
      input: {
        id: projektId,
        [projektCustomColumn]: value,
      },
    });

    await projektRefetch();
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <EditTable
      key={columnId}
      text={value}
      onSave={() => onSave()}
      onCancel={async () => setValue(initialValue)}
      childRef={inputRef}
      type={EditTableType.input}
    >
      <input
        className="w-full bg-transparent focus:bg-white outline-none h-10 focus:ring-[1.5px] focus:ring-indigo-400"
        key={columnId}
        ref={inputRef}
        type="text"
        name={columnId}
        placeholder={customColumnName}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => onSave()}
      />
    </EditTable>
  );
};
