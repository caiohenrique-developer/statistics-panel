import axios from 'axios';

const { tracApi, hostEnv } = {
  tracApi: axios.create({
    baseURL: 'https://my-json-server.typicode.com/tractian/fake-api',
  }),
  hostEnv: axios.create({
    baseURL:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000/api' // develop
        : 'https://statistics-panel.vercel.app/api', // prod
  }),
};

// route
const assets = 'assets';
const users = 'users';
const units = 'units';
const companies = 'companies';

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

const fetchAssets = async (): Promise<FetchAssetsProps[]> => {
  try {
    const { data: asset } = await tracApi.get('assets');

    return asset;
  } catch (err) {
    throw new Error(err);
  }
};

export {
  // baseURL
  tracApi,
  hostEnv,
  // route
  assets,
  users,
  units,
  companies,
  // api requests
  fetchAssets,
};
