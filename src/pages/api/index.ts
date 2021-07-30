import axios from 'axios';

import { FetchAssetsProps, FetchUsersProps } from '@utils/types/api';

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

const fetchAssets = async (): Promise<FetchAssetsProps[]> => {
  try {
    const { data: asset } = await tracApi.get('assets');

    return asset;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchUsers = async (): Promise<FetchUsersProps[]> => {
  try {
    const { data: user } = await tracApi.get('users');

    return user;
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
  fetchUsers,
};
