import React, { useContext, useEffect } from 'react';
import {
  useListKurzspezifikationVorschlaegeQuery,
  useReferenzStueliByKurzspezifikationQuery,
} from '../lib/react-api';
// import useModal from '../components/Modal/useModal';

export interface SuggestionValue {
  setAnlage: (anlageId: string) => void;
  setKurzspezifikation: (kurzspezifikation: string) => void;
  setLieferant: (lieferant: string) => void;
  setNennweite: (nennweite: string) => void;
  setFeinspezifikation: (feinspezifikation: string) => void;
  kurzspezifikationVorschlaege: string[];
  lieferantVorschlaege: string[];
  nennweiteVorschlaege: string[];
  feinspezifikationVorschlaege: string[];
}

let SuggestionContext = React.createContext<SuggestionValue | undefined>(
  undefined,
);

export function useSuggestion(): SuggestionValue {
  const value = useContext(SuggestionContext);
  if (!value) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return value;
}

export function SuggestionProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  // let { modal, handleModal, modalContent } = useModal();

  let [anlageId, setAnlageId] = React.useState<string | undefined>();
  let [kurzspezifikationVorschlag, setKurzspezifikationVorschlag] =
    React.useState<string | undefined>();
  let [lieferantVorschlag, setLieferantVorschlag] = React.useState<
    string | undefined
  >();
  let [nennweiteVorschlag, setNennweiteVorschlag] = React.useState<
    string | undefined
  >();
  let [feinspezifikationVorschlag, setFeinspezifikationVorschlag] =
    React.useState<string | undefined>();

  const listKurzspezifikationVorschlaege =
    useListKurzspezifikationVorschlaegeQuery(
      { input: { anlageId: anlageId ?? '' } },
      {
        refetchOnWindowFocus: false,
      },
    );

  const referenzStueckeByKurzspezifikation =
    useReferenzStueliByKurzspezifikationQuery(
      {
        anlageId: anlageId ?? 'init',
        kurzspezifikation: { eq: kurzspezifikationVorschlag ?? 'init' },
      },
      {
        refetchOnWindowFocus: false,
      },
    );

  // const kurzspezifikationVorschlaege = ['john', 'von'];
  const kurzspezifikationVorschlaege =
    listKurzspezifikationVorschlaege.data?.listKurzspezifikationVorschlaege?.map(
      (vorschlag) => vorschlag ?? '',
    ) ?? [];
  // const kurzspezifikationVorschlaege = Array.from(
  //   new Set(
  //     referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
  //       ?.filter(
  //         (stueck) =>
  //           stueck?.kurzspezifikation != '' &&
  //           (!lieferantVorschlag || stueck?.lieferant === lieferantVorschlag) &&
  //           (!nennweiteVorschlag || stueck?.nennweite === nennweiteVorschlag) &&
  //           (!feinspezifikationVorschlag ||
  //             stueck?.feinspezifikation === feinspezifikationVorschlag),
  //       )
  //       .map((stueck) => stueck?.kurzspezifikation ?? ''),
  //   ),
  // );

  const lieferantVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter(
          (stueck) =>
            (!kurzspezifikationVorschlag ||
              stueck?.kurzspezifikation === kurzspezifikationVorschlag) &&
            stueck?.lieferant != '' &&
            (!nennweiteVorschlag || stueck?.nennweite === nennweiteVorschlag) &&
            (!feinspezifikationVorschlag ||
              stueck?.feinspezifikation === feinspezifikationVorschlag),
        )
        .map((stueck) => stueck?.lieferant ?? ''),
    ),
  );

  const nennweiteVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter(
          (stueck) =>
            (!kurzspezifikationVorschlag ||
              stueck?.kurzspezifikation === kurzspezifikationVorschlag) &&
            (!lieferantVorschlag || stueck?.lieferant === lieferantVorschlag) &&
            stueck?.nennweite != '' &&
            (!feinspezifikationVorschlag ||
              stueck?.feinspezifikation === feinspezifikationVorschlag),
        )
        .map((stueck) => stueck?.nennweite ?? ''),
    ),
  ).sort();

  const feinspezifikationVorschlaege = Array.from(
    new Set(
      referenzStueckeByKurzspezifikation.data?.referenzStueliByKurzspezifikation?.items
        ?.filter(
          (stueck) =>
            (!kurzspezifikationVorschlag ||
              stueck?.kurzspezifikation === kurzspezifikationVorschlag) &&
            (!lieferantVorschlag || stueck?.lieferant === lieferantVorschlag) &&
            (!nennweiteVorschlag || stueck?.nennweite === nennweiteVorschlag) &&
            stueck?.feinspezifikation != '',
        )
        .map((stueck) => stueck?.feinspezifikation ?? ''),
    ),
  ).sort();

  let setAnlage = (id: string) => {
    setAnlageId(id);
  };

  let setKurzspezifikation = (kurzspezifikation: string) => {
    setKurzspezifikationVorschlag(kurzspezifikation);
  };

  let setLieferant = (lieferant: string) => {
    setLieferantVorschlag(lieferant);
  };

  let setNennweite = (nennweite: string) => {
    setNennweiteVorschlag(nennweite);
  };

  let setFeinspezifikation = (feinspezifikation: string) => {
    setFeinspezifikationVorschlag(feinspezifikation);
  };

  useEffect(() => {
    void (async () => {
      await listKurzspezifikationVorschlaege.refetch();
    })();
  }, [anlageId, setAnlageId]);

  useEffect(() => {
    void (async () => {
      await referenzStueckeByKurzspezifikation.refetch();
    })();
  }, [kurzspezifikationVorschlag, setKurzspezifikationVorschlag]);

  const value: SuggestionValue = {
    setAnlage,
    setKurzspezifikation,
    setLieferant,
    setNennweite,
    setFeinspezifikation,
    kurzspezifikationVorschlaege,
    lieferantVorschlaege,
    nennweiteVorschlaege,
    feinspezifikationVorschlaege,
  };
  return (
    <SuggestionContext.Provider value={value}>
      {children}
    </SuggestionContext.Provider>
  );
}
