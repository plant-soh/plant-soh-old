import { useEffect } from 'react';
import Link from '../../components/Link';

import { useGetAnlageQuery } from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';

const Home = () => {
  const { currentAnlageId = '' } = useAuth();

  const { data, refetch } = useGetAnlageQuery(
    { id: currentAnlageId },
    {
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    void (async () => {
      await refetch();
    })();
  }, [currentAnlageId]);

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6"
      data-testid="home"
    >
      HOME SWEET HOME
      <div className="flex gap-6">
        <span>Zuletzt bearbeitete Referenzstückliste:</span>
        <button
          className={`px-4 py-2 font-bold text-white bg-blue-500 rounded 'hover:bg-blue-700'`}
        >
          <Link name="referenz-stueli" to={`/kunde/${currentAnlageId}`}>
            <span>{`Firma=${data?.getAnlage?.firma} Standort=${data?.getAnlage?.standort} ID=${currentAnlageId}`}</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
