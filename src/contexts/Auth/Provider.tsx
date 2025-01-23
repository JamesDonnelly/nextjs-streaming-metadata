'use client';

import React from 'react';
import { getAuth } from "firebase/auth";
import AuthContext from '@/contexts/Auth';
import { AuthUser } from '@/types/user';
import { CircularProgress } from '@mui/material';

export interface AuthContextProviderProps {
  children: React.ReactNode;
  user: AuthUser | null;
}
 
export const AuthContextProvider: React.FunctionComponent<AuthContextProviderProps> = ({
  children,
  user: defaultUser,
}) => {
  const [user, setUser] = React.useState<AuthUser | undefined | null>(defaultUser);
  const refreshTokenResolver = React.useRef<(value: string) => void | null>(null);

  React.useEffect(() => {
    if (!refreshTokenResolver.current || !user || !user.token) {
      return;
    }

    refreshTokenResolver.current(user.token);
  }, [user]);

  const refreshToken = async (forceRefresh?: boolean) => {
    if (!user) {
      return '';
    }

    const output = new Promise<string>((resolve) => {
      refreshTokenResolver.current = resolve;
    });

    const currentUser = getAuth().currentUser;

    if (!currentUser) {
      return '';
    }

    const updatedToken = await currentUser?.getIdToken(forceRefresh);

    setUser((currentUser) => {
      if (!currentUser) {
        return null;
      }

      return {
        ...currentUser,
        token: updatedToken,
      }
    });

    return output;
  }

  React.useEffect(() => {
    setUser(defaultUser);
    refreshToken();
  }, [defaultUser]);

  if (user === undefined) {
    return <CircularProgress />
  }

  return (
    <AuthContext.Provider
      value={{
        refreshToken,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};