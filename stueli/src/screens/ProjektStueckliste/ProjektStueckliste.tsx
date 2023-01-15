import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  RowData,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MdAdd, MdInfo } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { Clickable } from 'reakit/Clickable';
import { DataGrid } from '../../components/DataGrid';

import {
  useCreateProjektStueliMutation,
  useGetProjektQuery,
  useListKurzspezifikationVorschlaegeQuery,
  useProjektStueliByKurzspezifikationQuery,
  useSetCurrentProjektIdMutation,
  useUpdateProjektMutation,
} from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';
import { ProjektStueckCell } from './ProjektStueckCell';
import { ProjektStueckCustomHeader } from './ProjektStueckCustomHeader';

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    addNewStueck: () => void;
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
};

const ProjektStueckliste = () => {
  const { projektId = '' } = useParams<ProjektStueliParams>();

  // Give our default column cell renderer editing superpowers!
  const defaultColumn: Partial<ColumnDef<ProjektStueck>> = {
    cell: (cell) => (
      <ProjektStueckCell cell={cell} refetch={projektStueli.refetch} />
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
            minSize: 1500,
          };
        }),
    );
  }, [getProjektQuery.data?.getProjekt]);

  const columns = useMemo<ColumnDef<ProjektStueck>[]>(
    () => [
      {
        accessorKey: 'index',
        header: ' ',
        size: 60,
        maxSize: 60,
        cell: (stueck) => (
          <div className="px-3 py-3">{stueck.row.original.index + 1 + '.'}</div>
        ),
      },
      {
        accessorKey: 'bmk',
        header: () => (
          <div className="flex">
            BMK
            <MdInfo className="ml-1 text-gray-400" />
          </div>
        ),
        minSize: 1500,
      },
      {
        accessorKey: 'kurzspezifikation',
        header: () => (
          <div className="flex">
            Kurzspezifikation
            <MdInfo className="ml-1 text-gray-400" />
          </div>
        ),
        minSize: 1500,
      },
      {
        accessorKey: 'lieferant',
        header: () => (
          <div className="flex">
            Lieferant
            <MdInfo className="ml-1 text-gray-400" />
          </div>
        ),
        minSize: 1500,
      },
      {
        accessorKey: 'nennweite',
        header: () => (
          <div className="flex">
            Nennweite
            <MdInfo className="ml-1 text-gray-400" />
          </div>
        ),
        minSize: 1500,
      },
      {
        accessorKey: 'feinspezifikation',
        header: () => (
          <div className="flex">
            Feinspezifikation
            <MdInfo className="ml-1 text-gray-400" />
          </div>
        ),
        minSize: 1500,
      },
      {
        accessorKey: 'plus',
        header: () =>
          availableCustomColumn && (
            <div className="flex">
              <Clickable
                as="button"
                className="flex items-center justify-center mx-auto font-medium text-gray-500 transition-colors rounded-full outline-none focus:bg-gray-200 w-7 h-7"
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
      },
      ...customColumns,
      {
        accessorKey: 'action',
        header: ' ',
        size: 80,
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

  const projektStueli = useProjektStueliByKurzspezifikationQuery(
    { projektId: projektId },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );

  // const defaultData = useMemo(() => [], []);

  const [data, setData] = useState<ProjektStueck[]>([]);

  useEffect(() => {
    if (!projektStueli.data?.projektStueliByKurzspezifikation?.items) {
      return;
    }

    setData([
      ...projektStueli.data.projektStueliByKurzspezifikation.items.map(
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
      ),
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
  }, [projektStueli.data]);

  const createStueck = useCreateProjektStueliMutation();
  const updateProjekt = useUpdateProjektMutation();

  const table = useReactTable({
    data: data,
    // [
    //   ...(projektStueli.data?.projektStueliByKurzspezifikation?.items
    //     ?.sort(
    //       firstBy<ProjektStueli>((s1, s2) =>
    //         s1!.kurzspezifikation!.localeCompare(s2!.kurzspezifikation!),
    //       )
    //         .thenBy<ProjektStueli>((s1, s2) =>
    //           s1!.lieferant!.localeCompare(s2!.lieferant!),
    //         )
    //         .thenBy((s1, s2) => s1!.nennweite!.localeCompare(s2!.nennweite!)),
    //     )
    //     ?.map((stueck, index): ProjektStueck => {
    //       return {
    //         id: stueck?.id ?? '',
    //         index,
    //         bmk: stueck?.bmk ?? '',
    //         bmkDouble: stueck?.bmkDouble ?? false,
    //         kurzspezifikation: stueck?.kurzspezifikation ?? '',
    //         lieferant: stueck?.lieferant ?? '',
    //         nennweite: stueck?.nennweite ?? '',
    //         feinspezifikation: stueck?.feinspezifikation ?? '',
    //       };
    //     }) ?? defaultData),
    //   {
    //     id: '-1',
    //     index: data?.projektStueliByKurzspezifikation?.items?.length ?? 1,
    //     bmk: '',
    //     bmkDouble: false,
    //     kurzspezifikation: '',
    //     lieferant: '',
    //     nennweite: '',
    //     feinspezifikation: '',
    //   },
    // ],
    columns: columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
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
    },
    debugTable: false,
  });

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();

  const listKurzspezifikationVorschlaege =
    useListKurzspezifikationVorschlaegeQuery(
      { input: { anlageId: getProjektQuery.data?.getProjekt?.anlageId ?? '' } },
      {
        refetchOnWindowFocus: false,
      },
    );
  listKurzspezifikationVorschlaege;

  // const referenzStueckeByKurzspezifikation =
  //   useReferenzStueliByKurzspezifikationQuery(
  //     {
  //       anlageId: getProjektQuery.data?.getProjekt?.anlageId ?? 'init',
  //       kurzspezifikation: { eq: selectedKurzspezifikationVorschlag ?? 'init' },
  //     },
  //     {
  //       refetchOnWindowFocus: false,
  //     },
  //   );

  // const kurzspezifikationVorschlaege = Array.from(
  //   new Set(
  //     referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
  //       ?.filter(
  //         (stueck) =>
  //           stueck?.kurzspezifikation != '' &&
  //           (!newStueck.lieferantVorschlag ||
  //             stueck?.lieferant === newStueck.lieferantVorschlag) &&
  //           (!newStueck.nennweiteVorschlag ||
  //             stueck?.nennweite === newStueck.nennweiteVorschlag) &&
  //           (!newStueck.feinspezifikation ||
  //             stueck?.feinspezifikation ===
  //               newStueck.feinspezifikationVorschlag),
  //       )
  //       .map((stueck) => stueck?.lieferant),
  //   ),
  // );
  // kurzspezifikationVorschlaege;

  // const lieferantVorschlaege = Array.from(
  //   new Set(
  //     referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
  //       ?.filter(
  //         (stueck) =>
  //           (!newStueck.kurzspezifikationVorschlag ||
  //             stueck?.kurzspezifikation ===
  //               newStueck.kurzspezifikationVorschlag) &&
  //           stueck?.lieferant != '' &&
  //           (!newStueck.nennweiteVorschlag ||
  //             stueck?.nennweite === newStueck.nennweiteVorschlag) &&
  //           (!newStueck.feinspezifikationVorschlag ||
  //             stueck?.feinspezifikation ===
  //               newStueck.feinspezifikationVorschlag),
  //       )
  //       .map((stueck) => stueck?.lieferant),
  //   ),
  // );
  // lieferantVorschlaege;

  // const nennweiteVorschlaege = Array.from(
  //   new Set(
  //     referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
  //       ?.filter(
  //         (stueck) =>
  //           (!newStueck.kurzspezifikationVorschlag ||
  //             stueck?.kurzspezifikation ===
  //               newStueck.kurzspezifikationVorschlag) &&
  //           (!newStueck.lieferantVorschlag ||
  //             stueck?.lieferant === newStueck.lieferantVorschlag) &&
  //           stueck?.nennweite != '' &&
  //           (!newStueck.feinspezifikationVorschlag ||
  //             stueck?.feinspezifikation ===
  //               newStueck.feinspezifikationVorschlag),
  //       )
  //       .map((stueck) => stueck?.nennweite),
  //   ),
  // ).sort();
  // nennweiteVorschlaege;

  // const feinspezifikationVorschlaege = Array.from(
  //   new Set(
  //     referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
  //       ?.filter(
  //         (stueck) =>
  //           (!newStueck.kurzspezifikationVorschlag ||
  //             stueck?.kurzspezifikation ===
  //               newStueck.kurzspezifikationVorschlag) &&
  //           (!newStueck.lieferantVorschlag ||
  //             stueck?.lieferant === newStueck.lieferantVorschlag) &&
  //           (!newStueck.nennweiteVorschlag ||
  //             stueck?.nennweite === newStueck.nennweiteVorschlag) &&
  //           stueck?.feinspezifikation != '',
  //       )
  //       .map((stueck) => stueck?.feinspezifikation),
  //   ),
  // ).sort();
  // feinspezifikationVorschlaege;

  const setCurrentProjektId = useSetCurrentProjektIdMutation();

  if (projektStueli.isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="flex items-center w-full h-screen px-6 bg-gray-200">
        <div className="w-full p-6 bg-white rounded-md shadow-md">
          <h2 className="text-[15px] font-semibold">Projektstückliste</h2>
          <DataGrid table={table} tableRef={tableContainerRef} rows={rows} />
        </div>
      </div>
    </>
  );
};

export default ProjektStueckliste;
