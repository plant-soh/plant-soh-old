import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  RowData,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { Clickable } from 'reakit/Clickable';
import { DataGrid } from '../../components/DataGrid';

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

  const [rowSelection, setRowSelection] = useState<{ string: boolean } | {}>(
    {},
  );

  // useEffect(() => {
  //   console.log(`showRecord=${showRecord}`);
  // }, [record, setRecord]);

  useEffect(() => {
    console.log(`rowSelection: ${JSON.stringify(rowSelection)}`);
    const selectedRowKeys = Object.keys(rowSelection);
    if (selectedRowKeys.length === 0) {
      // setRecord(undefined);
      setShowRecord(false);
      window.history.pushState('', '', `/projekte/${projektId}`);
    } else {
      const selectedRowId = Object.keys(rowSelection)[0];
      setRecord(data.filter((row) => row.id === selectedRowId)[0]);
      setShowRecord(true);
    }
  }, [rowSelection, setRowSelection]);

  // if open record but not row was selected it tries to open the first row
  useEffect(() => {
    if (data.length > 0 && !record) {
      setRecord(data[0]);
    }
    if (showRecord && record) {
      window.history.pushState(
        '',
        '',
        `/projekte/${projektId}/record/${record.id}`,
      );
    }
  }, [showRecord, setShowRecord, record]);

  const { setAnlage } = useSuggestion();

  // Give our default column cell renderer editing superpowers!
  const defaultColumn: Partial<ColumnDef<ProjektStueck>> = {
    cell: (cell) => (
      <ProjektStueckCell
        cellValue={cell.getValue() as string}
        row={cell.row}
        columnId={cell.column.id}
        table={cell.table}
        refetch={projektStueli.refetch}
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

  const [data, setData] = useState<ProjektStueck[]>([]);

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

  useEffect(() => {
    console.log(`recordId=${recordId}`);
    if (!recordId || !data || !data[0]) return;
    setRecord(data.filter((row) => row.id === recordId)[0]);
    setShowRecord(true);
    const rows = table.getRowModel().rows;

    const recordRow = rows.filter((row) => row.id === recordId)[0];
    recordRow;
    if (recordRow) {
      recordRow.toggleSelected(true);
    }
  }, [recordId, data]);

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

      //refresh
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
        custom1: '',
        custom2: '',
        custom3: '',
      },
    ]);

    // if (!record) {
    //   setRecord(stueckTransformed[0]);
    // }
  }, [projektStueli.data]);

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();

  const setCurrentProjektId = useSetCurrentProjektIdMutation();

  if (projektStueli.isLoading || table.getRowModel().rows.length === 0)
    return <div>Loading...</div>;

  // console.log(`rowsById=${JSON.stringify(table.getRowModel().rowsById)}`);

  return (
    <>
      <div className="flex items-center w-full h-screen px-6 bg-gray-200">
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => {
            setShowRecord(!showRecord);
          }}
        >
          <span>Record</span>
        </button>
        <div className="w-full p-6 bg-white rounded-md shadow-md">
          <h2 className="text-[15px] font-semibold">Projektstückliste</h2>
          <DataGrid table={table} tableRef={tableContainerRef} rows={rows} />
        </div>
        <div
          style={{ right: 0, top: 80, width: 900 }}
          className={`absolute z-30 w-full h-full duration-500 transform bg-red-500 ${
            showRecord ? '' : 'translate-x-[900px]'
          }`}
        >
          <div role="Projektstueckrecord" className="text-center">
            <div role="BmkArea" className="flex justify-between">
              <div>
                <label>BMK</label>
                {record && (
                  <ProjektStueckCell
                    cellValue={record?.bmk ?? ''}
                    row={table.getRowModel().rowsById[record.id]}
                    columnId="bmk"
                    table={table}
                    refetch={projektStueli.refetch}
                    toggleRowSelectedOnClick={false}
                  />
                )}
              </div>
              <span>BMK doppelt!</span>
              <div>Angefragt?!</div>
            </div>
            <div role="StueckspezifikationHeader">
              <label>Stückspezifikation</label>
            </div>
            <div role="Stueckspezifikation" className="flex justify-between">
              <div role="Kurzspezifikation">{record?.kurzspezifikation}</div>
              <div role="Lieferant">{record?.lieferant}</div>
              <div role="Nennweite">{record?.nennweite}</div>
              <div role="Feinspezifikation">{record?.feinspezifikation}</div>
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
      </div>
    </>
  );
};

export default ProjektStueckliste;
