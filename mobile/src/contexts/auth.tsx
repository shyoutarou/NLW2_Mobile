import React, { createContext, useState, useEffect, useContext } from "react";
import * as auth from "../services/auth";
import { AsyncStorage, View, ActivityIndicator } from "react-native";
import api from "../services/api";

interface User {
  id?: number;
  name: string;
  email: string;
  avatar?: string;
  whatsapp?: string;
  bio?: string;
  cost?: number;
  subject?: string;
  password?: string;
  secund_name?: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  updateUserAvatar(avatar: string): Promise<boolean>;
  signIn( 
    email: string,
    password: string,
    remebemberMe: boolean) : Promise<void>;
  signOut(): void;
}

interface userProffy {
  bio: string
  whatsapp: string
  subject: string
  cost: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

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

  async function signIn(
    email: string,
    password: string,
    remebemberMe: boolean
  ) {
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
  
  async function updateUserAvatar(avatar: string) {
    if (avatar && user) {
      try {
        const response = await api.post('/update-user', { email: user.email, name: user.name, avatar, whatsapp: user.whatsapp, bio: user.bio }, { timeout: 2000 });
      } catch (error) {
        console.log(error)
        return false;
      }
      setUser({ ...user, avatar })
      await AsyncStorage.removeItem("@RNAuth:user");
      return true;
    }
    return false;
  }

    return (
    <AuthContext.Provider value={{ 
      signed: !!user, 
      user, 
      signIn , 
      signOut, 
      updateUserAvatar,
      loading}}>
      {children}
    </AuthContext.Provider>
  );
};

function useCustomHookAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useCustomHookAuth } ;