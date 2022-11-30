import React, { ReactNode, useContext } from 'react';

interface RuntimeValue {
  stage: string;
  region: string;
  identityPoolId: string;
  userPoolId: string;
  userPoolWebClientId: string;
  appSyncGraphqlEndpoint: string;
}

const RuntimeContext = React.createContext<RuntimeValue | undefined>(undefined);

export function useRuntime(): RuntimeValue {
  const value = useContext(RuntimeContext);
  if (!value) {
    throw new Error('useAuth must be used within RuntimeProvider');
  }
  return value;
}

export default function RuntimeProvider({
  runtimeContext,
  children,
}: {
  runtimeContext: RuntimeValue;
  children: ReactNode;
}): JSX.Element {
  // const [runtimeContext, setRuntimeContext] = useState<any>(undefined);

  if (runtimeContext) {
    const value: RuntimeValue = {
      ...runtimeContext,
    };
    return (
      <RuntimeContext.Provider value={value}>
        {children}
      </RuntimeContext.Provider>
    );
  } else {
    return <></>;
  }
}
