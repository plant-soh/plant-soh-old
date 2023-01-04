import { useParams } from 'react-router-dom';

import { Anlage, Role, useGetAnlageQuery } from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';

function nameof<T>(key: keyof T): keyof T {
  return key;
}

type ReferenzStueliParams = {
  id: string;
};

const ReferenzStueli = () => {
  const { id = '' } = useParams<ReferenzStueliParams>();

  const { role } = useAuth();

  const isAdmin = role === Role.Admin;

  let columns = {
    [nameof<Anlage>('firma')]: 'Firma',
    [nameof<Anlage>('standort')]: 'Standort',
    [nameof<Anlage>('anschrift')]: 'Anchrift',
  };

  if (isAdmin) {
    columns = { ...columns, actions: 'Aktionen' };
  }

  const { data, isLoading } = useGetAnlageQuery(
    { id: id },
    {
      refetchOnWindowFocus: false,
    },
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6"
      data-testid="kunde"
    >
      <h1 className="flex text-xl font-semibold">
        Kunde: {data?.getAnlage?.firma} Standort: {data?.getAnlage?.standort}
      </h1>
    </div>
  );
};

export default ReferenzStueli;
