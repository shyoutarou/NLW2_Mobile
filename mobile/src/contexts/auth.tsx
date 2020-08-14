import React, { createContext, useState, useEffect, useContext } from "react";
import * as auth from "../services/auth";
import { AsyncStorage, View, ActivityIndicator } from "react-native";
import api from "../services/api";

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
        const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
        const storagedToken = await AsyncStorage.getItem("@RNAuth:token");
    
        // simular uma lentidão para mostar o loading.
        await new Promise((resolve) => setTimeout(resolve, 2000));

        if (storagedUser && storagedToken) {
            setUser(JSON.parse(storagedUser));
            api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
        }
        setLoading(false);
    }
    loadStorageData();
  });

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);
    setLoading(true);

    api.defaults.headers.Authorization = `Baerer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
    
    console.log(response.user);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
    setLoading(true);
  }
  
    return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn , signOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useCustomHookAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export default AuthContext;