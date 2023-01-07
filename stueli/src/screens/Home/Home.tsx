import { useEffect } from 'react';
import Link from '../../components/Link';

import { useGetAnlageQuery, useGetProjektQuery } from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';

const Home = () => {
  const { currentAnlageId = '', currentProjektId = '' } = useAuth();

  const getAnlage = useGetAnlageQuery(
    { id: currentAnlageId },
    {
      refetchOnWindowFocus: false,
    },
  );

  const getProjekt = useGetProjektQuery(
    { id: currentProjektId },
    {
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    void (async () => {
      await getAnlage.refetch();
    })();
  }, [currentAnlageId]);

  useEffect(() => {
    void (async () => {
      await getProjekt.refetch();
    })();
  }, [currentProjektId]);

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6"
      data-testid="home"
    >
      HOME SWEET HOME
      <div className="flex flex-col gap-6">
        {getAnlage.data?.getAnlage && (
          <div className="flex gap-6">
            <span>Zuletzt bearbeitete Referenzstückliste:</span>
            <button
              className={`px-4 py-2 font-bold text-white bg-blue-500 rounded 'hover:bg-blue-700'`}
            >
              <Link name="referenz-stueli" to={`/kunden/${currentAnlageId}`}>
                <span>{`Firma=${getAnlage.data?.getAnlage?.firma} Standort=${getAnlage.data?.getAnlage?.standort} ID=${currentAnlageId}`}</span>
              </Link>
            </button>
          </div>
        )}
        {getProjekt.data?.getProjekt && (
          <div className="flex gap-6">
            <span>Zuletzt bearbeitete Projektstückliste:</span>
            <button
              className={`px-4 py-2 font-bold text-white bg-blue-500 rounded 'hover:bg-blue-700'`}
            >
              <Link name="referenz-stueli" to={`/projekte/${currentAnlageId}`}>
                <span>{`Firma=${getProjekt.data?.getProjekt?.anlage.firma} Standort=${getProjekt.data?.getProjekt?.anlage.standort} ID=${currentProjektId}`}</span>
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
