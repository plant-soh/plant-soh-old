import React, { ReactNode, useContext, useEffect, useState } from 'react';

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
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [runtimeContext, setRuntimeContext] = useState<any>(undefined);

  useEffect(() => {
    // console.debug('feth runtime');
    fetch('/runtime-config.json')
      .then((response) => {
        return response.json();
      })
      .then((runtimeCtx) => {
        // console.log(`cleanRuntimeContext=${JSON.stringify(runtimeCtx)}`);
        if (
          runtimeCtx.stage &&
          runtimeCtx.region &&
          runtimeCtx.identityPoolId &&
          runtimeCtx.userPoolId &&
          runtimeCtx.userPoolWebClientId &&
          runtimeCtx.appSyncGraphqlEndpoint
        ) {
          console.debug('setRuntimeContext');
          setRuntimeContext(runtimeCtx);
        } else {
          console.warn('runtime-config.json misses property');
        }
      })
      .catch(() => {
        console.log('No runtime-config.json detected');
        setRuntimeContext({});
      });
  }, []);

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
