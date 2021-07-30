import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

import { fetchUsers } from '@pages/api';

import { FetchUsersProps } from '@utils/types/api';

type CtxValProps = {
  usersApiData: FetchUsersProps[];
};

type UsersProps = {
  children: ReactNode;
};

const UsersContext = createContext({} as CtxValProps);

export const UsersProvider = ({ children }: UsersProps): JSX.Element => {
  const [usersApiData, setUsersApiData] = useState<FetchUsersProps[]>([]);

  useEffect(() => {
    const reqApi = async () => {
      setUsersApiData(await fetchUsers());
    };

    reqApi();
  }, []);

  const ctxVal = { usersApiData } as CtxValProps;

  return (
    <UsersContext.Provider value={ctxVal}>{children}</UsersContext.Provider>
  );
};

export const useUsers = (): CtxValProps => {
  return useContext(UsersContext);
};
