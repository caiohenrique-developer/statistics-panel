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
  userID: number;
  userEmail: string;
  userName: string;
  unity: number;
  company: number;
};

// fetchUnits
export type FetchUnitsProps = {
  id: number;
  name: string;
  companyId: number;
};

// fetchCompanies
export type FetchCompaniesProps = {
  id: number;
  name: string;
};
