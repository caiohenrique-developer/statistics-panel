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
  unity: string;
  company: string;
};

// fetchUsers
export type FetchUsersProps = {
  userID: number;
  userEmail: string;
  userName: string;
  unity: string;
  company: string;
};

// fetchUnits
export type FetchUnitsProps = {
  unityCompanyID: number;
  company: string;
  unityName: string;
};
