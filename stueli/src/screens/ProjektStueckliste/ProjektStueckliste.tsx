import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  RowData,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MdAdd, MdClear, MdOutlineInfo } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { Clickable } from 'reakit/Clickable';
import { DataGrid } from '../../components/DataGrid';
import { EditTableType } from '../../components/Editable';

import {
  useCreateProjektStueliMutation,
  useGetProjektQuery,
  useProjektStueliByKurzspezifikationQuery,
  useSetCurrentProjektIdMutation,
  useUpdateProjektMutation,
} from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';
import { useSuggestion } from '../../providers/SuggestionProvider';
import { ProjektStueckCell } from './ProjektStueckCell';
import { ProjektStueckCustomHeader } from './ProjektStueckCustomHeader';

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    addNewStueck: () => void;
    getSelectedRowId: () => number | undefined;
  }
}

export type ProjektStueck = {
  id: string;
  index: number;
  bmk: string;
  bmkDouble: boolean;
  kurzspezifikation: string;
  lieferant: string;
  nennweite: string;
  feinspezifikation: string;
  angefragt: boolean;
  custom1?: string;
  custom2?: string;
  custom3?: string;
};

type ProjektStueliParams = {
  projektId: string;
  recordId: string;
};

const ProjektStueckliste = () => {
  const { projektId = '' } = useParams<ProjektStueliParams>();
  const { recordId = '' } = useParams<ProjektStueliParams>();
  const [showRecord, setShowRecord] = useState(false);
  const [record, setRecord] = useState<ProjektStueck | undefined>();
  const [data, setData] = useState<ProjektStueck[]>([]);

  const [rowSelection, setRowSelection] = useState<{ string: boolean } | {}>(
    {},
  );

  // use tanstack react-table row selection to lead record view
  useEffect(() => {
    console.log(`rowSelection: ${JSON.stringify(rowSelection)}`);
    const selectedRowKeys = Object.keys(rowSelection);
    if (selectedRowKeys.length === 0) {
      setShowRecord(false);
      window.history.pushState('', '', `/projekte/${projektId}`);
    } else {
      const selectedRowId = Object.keys(rowSelection)[0];
      setRecord(data.filter((row) => row.id === selectedRowId)[0]);
      setShowRecord(true);
      window.history.pushState(
        '',
        '',
        `/projekte/${projektId}/record/${selectedRowId}`,
      );
    }
  }, [rowSelection, setRowSelection]);

  // if recordId param was given, select the row
  useEffect(() => {
    console.log(`recordId=${recordId}`);
    if (!data || !data[0] || !recordId) return;

    let recordRow = table.getRowModel().rowsById[recordId];

    if (recordRow) {
      recordRow.toggleSelected(true);
    }
  }, [recordId, data]);

  const { setAnlage } = useSuggestion();

  // Give our default column cell renderer editing superpowers!
  const defaultColumn: Partial<ColumnDef<ProjektStueck>> = {
    cell: (cell) => (
      <ProjektStueckCell
        className={
          cell.column.id === 'bmk' && cell.row.original.bmkDouble
            ? 'text-red-500'
            : ''
        }
        cellValue={cell.getValue() as string}
        row={cell.row}
        columnId={cell.column.id}
        table={cell.table}
        refetch={projektStueli.refetch}
        toggleRowSelectedOnClick={true}
      />
    ),
  };

  const getProjektQuery = useGetProjektQuery(
    { id: projektId },
    {
      refetchOnWindowFocus: false,
    },
  );

  var availableCustomColumn: string | undefined = undefined;
  for (const column of [
    'custom1ColumnName',
    'custom2ColumnName',
    'custom3ColumnName',
  ]) {
    if (
      !getProjektQuery.data?.getProjekt?.[
        column as
          | 'custom1ColumnName'
          | 'custom2ColumnName'
          | 'custom3ColumnName'
      ]
    ) {
      availableCustomColumn = column;
      break;
    }
  }

  const [customColumns, setCustomColumns] = useState<
    ColumnDef<ProjektStueck>[]
  >([]);

  const columns = useMemo<ColumnDef<ProjektStueck>[]>(
    () => [
      {
        accessorKey: 'index',
        enableSorting: false,
        header: ' ',
        size: 30,
        cell: (stueck) => <span>{stueck.row.original.index + 1 + '.'}</span>,
      },
      {
        accessorKey: 'bmk',
        enableSorting: false,
        header: 'BMK',
      },
      {
        accessorKey: 'kurzspezifikation',
        enableSorting: false,
        header: 'Kurzspezifikation',
      },
      {
        accessorKey: 'lieferant',
        enableSorting: false,
        header: 'Lieferant',
      },
      {
        accessorKey: 'nennweite',
        enableSorting: false,
        header: 'Nennweite',
      },
      {
        accessorKey: 'feinspezifikation',
        enableSorting: false,
        header: 'Feinspezifikation',
      },
      {
        accessorKey: 'angefragt',
        enableSorting: false,
        header: 'Angefragt',
      },
      {
        accessorKey: 'plus',
        enableSorting: false,
        header: () =>
          availableCustomColumn && (
            <div className="flex">
              <Clickable
                as="button"
                className="flex justify-center mx-auto font-medium text-gray-500 transition-colors rounded-full outline-none focus:bg-gray-200 w-7 h-7"
                onClick={async () => {
                  await updateProjekt.mutateAsync({
                    input: {
                      id: getProjektQuery.data?.getProjekt?.id ?? '',
                      [availableCustomColumn as
                        | 'custom1ColumnName'
                        | 'custom2ColumnName'
                        | 'custom3ColumnName']: 'Zusätzliche Spalte',
                    },
                  });
                  await getProjektQuery.refetch();
                  await projektStueli.refetch();
                }}
              >
                <MdAdd size={18} />
              </Clickable>
            </div>
          ),
        size: 40,
        cell: (_stueck) => '',
      },
      ...customColumns,
      {
        accessorKey: 'action',
        enableSorting: false,
        header: ' ',
        size: 40,
      },
    ],
    [customColumns],
  );

  const { currentProjektId, refreshSession, role } = useAuth();
  role;

  // const [
  //   selectedKurzspezifikationVorschlag,
  //   _setSelectedKurzspezifikationVorschlag,
  // ] = useState<string | undefined>();

  // const isAdmin = role === Role.Admin;

  // console.log(`columns=${JSON.stringify(columns)}`);

  const projektStueli = useProjektStueliByKurzspezifikationQuery(
    { projektId: projektId },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );

  const createStueck = useCreateProjektStueliMutation();
  const updateProjekt = useUpdateProjektMutation();

  const table = useReactTable({
    data: data,
    columns: columns,
    defaultColumn,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      rowSelection,
    },
    initialState: {
      columnVisibility: {
        angefragt: false,
      },
    },
    onRowSelectionChange: setRowSelection,
    enableMultiRowSelection: false,
    getRowId: (row) => row.id,
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
      addNewStueck: async () => {
        const newStueck = data.at(-1);
        await createStueck.mutateAsync({
          input: {
            projektId,
            kurzspezifikation: newStueck?.kurzspezifikation,
            lieferant: newStueck?.lieferant,
            nennweite: newStueck?.nennweite,
            feinspezifikation: newStueck?.feinspezifikation,
          },
        });

        await projektStueli.refetch();
      },

      getSelectedRowId: () => record?.index,
    },
    debugTable: false,
  });

  // set custom columns
  useEffect(() => {
    setCustomColumns(
      ['1', '2', '3']
        .filter(
          (i) =>
            (getProjektQuery.data?.getProjekt as any)?.[
              `custom${i}ColumnName`
            ] !== '',
        )
        .map((i) => {
          const projektCustomColumn = `custom${i}ColumnName`;
          const customColumnName =
            (getProjektQuery.data?.getProjekt as any)?.[projektCustomColumn] ??
            'Zusätzliche Spalte';

          return {
            accessorKey: `custom${i}`,
            enableSorting: false,
            enableHiding: true,
            header: () => (
              <ProjektStueckCustomHeader
                projektId={projektId}
                columnId={`custom${i}`}
                projektCustomColumn={projektCustomColumn}
                customColumnName={customColumnName}
                projektRefetch={getProjektQuery.refetch}
              />
            ),
            // minSize: 1500,
          };
        }),
    );

    // set anlageId for suggestion provider
    if (getProjektQuery.data?.getProjekt?.anlageId)
      setAnlage(getProjektQuery.data?.getProjekt?.anlageId);
  }, [getProjektQuery.data?.getProjekt]);

  useEffect(() => {
    if (!projektId || currentProjektId === projektId) return;
    void (async () => {
      console.log(`projektId=${projektId}`);
      await setCurrentProjektId.mutateAsync({
        input: {
          projektId: projektId,
        },
      });

      await refreshSession();
      await projektStueli.refetch();
    })();
  }, [projektId]);

  useEffect(() => {
    if (!projektStueli.data?.projektStueliByKurzspezifikation?.items) {
      return;
    }

    const stueckTransformed =
      projektStueli.data.projektStueliByKurzspezifikation.items.map(
        (stueck, index) => {
          return {
            id: stueck?.id ?? '',
            index: index,
            bmk: stueck?.bmk ?? '',
            bmkDouble: stueck?.bmkDouble ?? false,
            kurzspezifikation: stueck?.kurzspezifikation ?? '',
            lieferant: stueck?.lieferant ?? '',
            nennweite: stueck?.nennweite ?? '',
            feinspezifikation: stueck?.feinspezifikation ?? '',
            angefragt: stueck?.angefragt ?? false,
            custom1: stueck?.custom1 ?? '',
            custom2: stueck?.custom2 ?? '',
            custom3: stueck?.custom3 ?? '',
          };
        },
      );

    setData([
      ...stueckTransformed,
      {
        id: '-1',
        index: projektStueli.data.projektStueliByKurzspezifikation.items.length,
        bmk: '',
        bmkDouble: false,
        kurzspezifikation: '',
        lieferant: '',
        nennweite: '',
        feinspezifikation: '',
        angefragt: false,
        custom1: '',
        custom2: '',
        custom3: '',
      },
    ]);
  }, [projektStueli.data]);

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();

  const setCurrentProjektId = useSetCurrentProjektIdMutation();

  if (projektStueli.isLoading || table.getRowModel().rows.length === 0)
    return <div>Loading...</div>;

  return (
    <>
      <div className="flex bg-gray-200 items-top">
        <div className="p-6 bg-white rounded-md shadow-md ">
          <h2 className="text-[15px] font-semibold">Projektstückliste</h2>
          <DataGrid table={table} tableRef={tableContainerRef} rows={rows} />
        </div>
        <button
          style={{ right: 0, top: 80, width: 30 }}
          className="absolute z-30 font-bold text-white bg-blue-500 rounded h-fit hover:bg-blue-700"
          onClick={() => {
            // a record was chose either by url parameter or it was selected before
            if (record) {
              table.getRowModel().rowsById[record.id].toggleSelected();
            } else if (data.length > 0) {
              // no record was selected (like when first time loaded) choose the first record
              setRecord(data[0]);
            }
          }}
        >
          <MdOutlineInfo size={30} />
        </button>
        {record && (
          <div
            style={{ right: 0, top: 80, width: 900 }}
            className={`absolute z-30 w-full h-[93%] duration-500 transform bg-white ${
              showRecord ? '' : 'translate-x-[900px]'
            }`}
          >
            <button
              className="font-bold text-white bg-blue-500 rounded h-fit hover:bg-blue-700"
              onClick={() => {
                // setShowRecord(false);
                table.getRowModel().rowsById[record.id].toggleSelected();
              }}
            >
              <MdClear size={30} />
            </button>
            <div role="Projektstueckrecord" className="text-center">
              <div role="BmkArea" className="flex justify-between w-full">
                <div className="w-1/4 text-left">
                  <label className="text-xs text-gray-500">BMK</label>
                  <ProjektStueckCell
                    className={`${
                      record.bmkDouble ? 'text-red-500' : ''
                    } bg-gray-200/70 border-gray-300/50 rounded border`}
                    cellValue={record?.bmk ?? ''}
                    row={table.getRowModel().rowsById[record.id]}
                    columnId="bmk"
                    editOnDoubleClick={false}
                    table={table}
                    refetch={projektStueli.refetch}
                  />
                </div>
                <span className="w-1/4">BMK doppelt!</span>
                <div>
                  <label>Angefragt</label>
                  <ProjektStueckCell
                    cellValue={record?.angefragt ?? false}
                    row={table.getRowModel().rowsById[record.id]}
                    columnId="angefragt"
                    editOnDoubleClick={false}
                    table={table}
                    refetch={projektStueli.refetch}
                    type={EditTableType.select}
                    selectOptions={[true, false]}
                  />
                </div>
              </div>
              <div role="StueckspezifikationHeader">
                <label>Stückspezifikation</label>
              </div>
              <div role="Stueckspezifikation" className="flex justify-between">
                {[
                  { id: 'kurzspezifikation', label: 'Kurzspezifikation' },
                  { id: 'lieferant', label: 'Lieferant' },
                  { id: 'nennweite', label: 'Nennweite' },
                  { id: 'feinspezifikation', label: 'Feinspezifikation' },
                ].map((spezi) => (
                  <div role={spezi.id} className="w-[23%] text-left">
                    <label className="text-xs text-gray-500">
                      {spezi.label}
                    </label>
                    <ProjektStueckCell
                      className={` bg-gray-200/70 border-gray-300/50 rounded border`}
                      cellValue={(record as any)[spezi.id] ?? ''}
                      row={table.getRowModel().rowsById[record.id]}
                      columnId={spezi.id}
                      editOnDoubleClick={false}
                      table={table}
                      refetch={projektStueli.refetch}
                    />
                  </div>
                ))}
              </div>
              <div role="ProduktbeschreibungHeader">
                <label>Produktbeschreibung</label>
              </div>
              <div role="Produktbeschreibung">
                <div>Bild</div>
                <div>Beischreibung</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjektStueckliste;
