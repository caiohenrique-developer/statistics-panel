import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

import { fetchAssets } from '@pages/api';

type FetchAssetsProps = {
  id: number;
  sensors: string[];
  model: string;
  status: string;
  healthscore: number;
  name: string;
  image: string;
  specifications: {
    maxTemp: number;
  };
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  };
  unitId: number;
  companyId: number;
};

type CtxValProps = {
  assetsApiData: FetchAssetsProps[];
};

type AssetsProps = {
  children: ReactNode;
};

const AssetsContext = createContext({} as CtxValProps);

export const AssetsProvider = ({ children }: AssetsProps): JSX.Element => {
  const [assetsApiData, setAssetsApiData] = useState<FetchAssetsProps[]>([]);

  useEffect(() => {
    const reqApi = async () => {
      setAssetsApiData(await fetchAssets());
    };

    reqApi();
  }, []);

  const ctxVal = { assetsApiData } as CtxValProps;

  return (
    <AssetsContext.Provider value={ctxVal}>{children}</AssetsContext.Provider>
  );
};

export const useAssets = (): CtxValProps => {
  return useContext(AssetsContext);
};
