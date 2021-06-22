import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

interface User {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
