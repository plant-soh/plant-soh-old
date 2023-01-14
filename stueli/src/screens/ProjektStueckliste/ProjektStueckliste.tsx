import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query';
import {
  CellContext,
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  RowData,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MdAdd, MdDelete, MdInfo } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { Clickable } from 'reakit/Clickable';
import { firstBy } from 'thenby';
import { DataGrid } from '../../components/DataGrid';
import EditTable, { EditTableType } from '../../components/Editable';
import { amplifyFetcher } from '../../lib/fetcher';

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    refreshData: () => Promise<void>;
  }
}

import {
  ListProjektStuelisDocument,
  ListProjektStuelisQuery,
  ListProjektStuelisQueryVariables,
  ListReferenzStuelisDocument,
  ListReferenzStuelisQuery,
  ListReferenzStuelisQueryVariables,
  ProjektStueli,
  ProjektStueliByKurzspezifikationQuery,
  useCreateProjektStueliMutation,
  useDeleteProjektStueliMutation,
  useGetProjektQuery,
  useListKurzspezifikationVorschlaegeQuery,
  useProjektStueliByKurzspezifikationQuery,
  useSetCurrentProjektIdMutation,
  useUpdateProjektStueliMutation,
} from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';
import { useModal } from '../../providers/ModalProvider';

type ProjektStueck = {
  id: string;
  index: number;
  bmk: string;
  bmkDouble: boolean;
  kurzspezifikation: string;
  lieferant: string;
  nennweite: string;
  feinspezifikation: string;
  custom1ColumnName?: string;
  custom2ColumnName?: string;
  custom3ColumnName?: string;
};

type ProjektStueliParams = {
  projektId: string;
};

const ProjektStueckCell = ({
  cell,
  refetch,
  projektId,
}: {
  cell: CellContext<ProjektStueck, unknown>;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<
    QueryObserverResult<ProjektStueliByKurzspezifikationQuery, unknown>
  >;
  projektId: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // console.log(`cell=${JSON.stringify(cell)}`);
  const initialValue = cell.getValue() as string;
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  let { handleModal } = useModal();

  const updateStueck = useUpdateProjektStueliMutation();
  const deleteStueck = useDeleteProjektStueliMutation();
  const createStueck = useCreateProjektStueliMutation();

  // When the input is blurred, we'll call our table meta's updateData function
  // const onBlur = () => {
  //   table.options.meta?.updateData(index, id, value);
  // };

  const onSave = async () => {
    let bmkDouble = false;
    if (cell.column.id === 'bmk' && cell.cell.getValue()) {
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
    if (cell.row.original.id != '-1') {
      // only update if something changed
      // if (initialValue !== value) {
      await updateStueck.mutateAsync({
        input: {
          id: cell.row.original.id,
          [cell.column.id]: value,
          bmkDouble,
        },
      });

      await refetch();
      // }
    }

    return;
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (cell.column.id === 'action') {
    if (cell.row.original.id === '-1') {
      return (
        <Clickable
          as="button"
          className="flex items-center justify-center mx-auto font-medium text-gray-500 transition-colors rounded-full outline-none focus:bg-gray-200 w-7 h-7"
          onClick={async () => {
            await createStueck.mutateAsync({
              input: {
                projektId,
                kurzspezifikation: '',
                lieferant: '',
                nennweite: '',
                feinspezifikation: '',
              },
            });

            await refetch();
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
                id: cell.row.original.id,
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
    <EditTable
      className={
        cell.column.id === 'bmk' && cell.row.original.bmkDouble
          ? 'text-red-500'
          : ''
      }
      key={cell.column.id}
      text={value as string}
      onSave={() => onSave()}
      onCancel={() => {
        setValue(initialValue);
      }}
      childRef={inputRef}
      type={EditTableType.input}
    >
      <input
        className="w-full bg-transparent focus:bg-white outline-none h-10 p-3 focus:ring-[1.5px] focus:ring-indigo-400"
        key={cell.column.id}
        ref={inputRef}
        type="text"
        name={cell.column.id}
        placeholder={cell.column.id}
        value={value as string}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={() => onSave()}
      />
    </EditTable>
  );
};

const ProjektStueckliste = () => {
  // Give our default column cell renderer editing superpowers!
  const defaultColumn: Partial<ColumnDef<ProjektStueck>> = {
    cell: (cell) => (
      <ProjektStueckCell cell={cell} refetch={refetch} projektId={projektId} />
    ),
  };

  const columnss = useMemo<ColumnDef<ProjektStueck>[]>(
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
        accessorKey: 'action',
        header: ' ',
        size: 80,
      },
    ],
    [],
  );

  const { projektId = '' } = useParams<ProjektStueliParams>();

  const { currentProjektId, refreshSession, role } = useAuth();
  role;

  // let { handleModal } = useModal();

  // const [newStueck, _setNewStueck] = useState<{
  //   bmk: string;
  //   kurzspezifikation: string;
  //   lieferant: string;
  //   nennweite: string;
  //   feinspezifikation: string;
  //   kurzspezifikationVorschlag?: string;
  //   lieferantVorschlag?: string;
  //   nennweiteVorschlag?: string;
  //   feinspezifikationVorschlag?: string;
  //   custom1: string;
  //   custom2: string;
  //   custom3: string;
  // }>({
  //   bmk: '',
  //   kurzspezifikation: '',
  //   lieferant: '',
  //   nennweite: '',
  //   feinspezifikation: '',
  //   custom1: '',
  //   custom2: '',
  //   custom3: '',
  // });

  // const [
  //   selectedKurzspezifikationVorschlag,
  //   _setSelectedKurzspezifikationVorschlag,
  // ] = useState<string | undefined>();

  // const isAdmin = role === Role.Admin;

  const getProjektQuery = useGetProjektQuery(
    { id: projektId },
    {
      refetchOnWindowFocus: false,
    },
  );

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
      await refetch();
    })();
  }, [projektId]);

  const { data, isLoading, refetch } = useProjektStueliByKurzspezifikationQuery(
    { projektId: projektId },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );

  const defaultData = useMemo(() => [], []);

  const table = useReactTable({
    data: [
      ...(data?.projektStueliByKurzspezifikation?.items
        ?.sort(
          firstBy<ProjektStueli>((s1, s2) =>
            s1!.kurzspezifikation!.localeCompare(s2!.kurzspezifikation!),
          )
            .thenBy<ProjektStueli>((s1, s2) =>
              s1!.lieferant!.localeCompare(s2!.lieferant!),
            )
            .thenBy((s1, s2) => s1!.nennweite!.localeCompare(s2!.nennweite!)),
        )
        ?.map((stueck, index): ProjektStueck => {
          return {
            id: stueck?.id ?? '',
            index,
            bmk: stueck?.bmk ?? '',
            bmkDouble: stueck?.bmkDouble ?? false,
            kurzspezifikation: stueck?.kurzspezifikation ?? '',
            lieferant: stueck?.lieferant ?? '',
            nennweite: stueck?.nennweite ?? '',
            feinspezifikation: stueck?.feinspezifikation ?? '',
          };
        }) ?? defaultData),
      {
        id: '-1',
        index: data?.projektStueliByKurzspezifikation?.items?.length ?? 1,
        bmk: '',
        bmkDouble: false,
        kurzspezifikation: '',
        lieferant: '',
        nennweite: '',
        feinspezifikation: '',
      },
    ],
    columns: columnss,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
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

  if (isLoading) return <div>Loading...</div>;

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
