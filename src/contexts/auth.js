import React, { createContext, useContext, useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

import api from '../services/api';

const AuthContext = createContext({ signed: false });

export function AuthProvider({children}) {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    async function loadStorageData() {
      if(!loading) setLoading(true);
      const storageUser = await AsyncStorage.getItem('@myotakulist:user');
      const storageToken = await AsyncStorage.getItem('@myotakulist:token');
      if(storageUser && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }
    loadStorageData();
  }, [])
  async function signUp(name, email, password) {
    const { data } = await api.post('/auth/signup', { name, email, password });
    setUser(data.user);
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    await AsyncStorage.setItem('@myotakulist:user', JSON.stringify(data.user));
    await AsyncStorage.setItem('@myotakulist:token', data.token);
  }
  async function signIn(email, password) {
    const { data } = await api.post('/auth/signin', { email, password });
    setUser(data.user);
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    await AsyncStorage.setItem('@myotakulist:user', JSON.stringify(user));
  }
  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, loading, user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}