import axios from 'axios';

import {
  FetchAssetsProps,
  FetchUsersProps,
  FetchUnitsProps,
} from '@utils/types/api';

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
    const fetchRes = await axios.all([
      tracApi.get('assets'),
      tracApi.get('units'),
      tracApi.get('companies'),
    ]);

    const { data: fetchAsset } = fetchRes[0];
    const { data: fetchUnity } = fetchRes[1];
    const { data: fetchCompany } = fetchRes[2];

    const asset: FetchAssetsProps[] = fetchAsset.map(
      ({ unitId: assetUnityID, companyId: assetCompanyID, ...rest }) => {
        const { name: unity } = fetchUnity
          .filter(({ id: unityID }) => assetUnityID === unityID)
          .find(({ name: unityName }) => unityName);

        const { name: company } = fetchCompany
          .filter(({ id: companyID }) => assetCompanyID === companyID)
          .find(({ name: companyName }) => companyName);

        return {
          unity,
          company,
          ...rest,
        };
      },
    );

    return asset;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchUsers = async (): Promise<FetchUsersProps[]> => {
  try {
    const fetchRes = await axios.all([
      tracApi.get('users'),
      tracApi.get('units'),
      tracApi.get('companies'),
    ]);

    const { data: fetchUser } = fetchRes[0];
    const { data: fetchUnity } = fetchRes[1];
    const { data: fetchCompany } = fetchRes[2];

    const user: FetchUsersProps[] = fetchUser.map(
      ({
        id: userID,
        name: userName,
        email: userEmail,
        unitId: userUnityID,
        companyId: userCompanyID,
      }) => {
        const { name: unity } = fetchUnity
          .filter(({ id: unityID }) => userUnityID === unityID)
          .find(({ name: unityName }) => unityName);

        const { name: company } = fetchCompany
          .filter(({ id: companyID }) => userCompanyID === companyID)
          .find(({ name: companyName }) => companyName);

        return {
          unity,
          userID,
          company,
          userName,
          userEmail,
        };
      },
    );

    return user;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchUnits = async (): Promise<FetchUnitsProps[]> => {
  try {
    const fetchRes = await axios.all([
      tracApi.get('units'),
      tracApi.get('companies'),
    ]);

    const { data: fetchUnity } = fetchRes[0];
    const { data: fetchCompany } = fetchRes[1];

    const unity: FetchUnitsProps[] = fetchUnity.map(
      ({ id: unityID, name: unityName, companyId: unityCompanyID }) => {
        const { name: company } = fetchCompany
          .filter(({ id: companyID }) => unityCompanyID === companyID)
          .find(({ name: companyName }) => companyName);

        return {
          unityID,
          unityName,
          company,
        };
      },
    );

    return unity;
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
  fetchUnits,
};
