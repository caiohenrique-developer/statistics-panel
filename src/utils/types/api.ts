// fetchAssets
export type FetchAssetsProps = {
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

// fetchUsers
export type FetchUsersProps = {
  id: number;
  email: string;
  name: string;
  unitId: number;
  companyId: number;
};
