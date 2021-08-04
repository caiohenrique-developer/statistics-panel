import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

import { fetchUnits } from '@pages/api';

import { FetchUnitsProps } from '@utils/types/api';

type CtxValProps = {
  unitsApiData: FetchUnitsProps[];
};

type UnitsProps = {
  children: ReactNode;
};

const UnitsContext = createContext({} as CtxValProps);

export const UnitsProvider = ({ children }: UnitsProps): JSX.Element => {
  const [unitsApiData, setUnitsApiData] = useState<FetchUnitsProps[]>([]);

  useEffect(() => {
    const reqApi = async () => {
      setUnitsApiData(await fetchUnits());
    };

    reqApi();
  }, []);

  const ctxVal = { unitsApiData } as CtxValProps;

  return (
    <UnitsContext.Provider value={ctxVal}>{children}</UnitsContext.Provider>
  );
};

export const useUnits = (): CtxValProps => {
  return useContext(UnitsContext);
};
