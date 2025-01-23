import React from 'react';
import { AuthUser } from '@/types/user';

export interface AuthContextData {
  refreshToken: () => Promise<string>;
  user: AuthUser | null;
}
 
const AuthContext = React.createContext<AuthContextData>({
  refreshToken: () => Promise.reject(),
  user: null,
});
 
export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;

