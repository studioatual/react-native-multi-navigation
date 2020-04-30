import React, { createContext, useState, useContext, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import api from '../services/api';

export const AuthContext = createContext({ signed: false });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkCredentials() {
      const tokenStorage = await AsyncStorage.getItem('@CustomRoutes:token');
      if (tokenStorage) {
        try {
          api.defaults.headers.Authorization = `Bearer ${tokenStorage}`;
          const response = await api.get('auth');
          console.log('checkou');
          await AsyncStorage.setItem(
            '@CustomRoutes:user',
            JSON.stringify(response.data.user)
          );
          setUser(response.data.user);
        } catch (err) {
          console.log(err.response.data);
        }
      }
    }
    if (!user) {
      checkCredentials();
    }
  });

  function logOut() {
    setUser(null);
    AsyncStorage.removeItem('@CustomRoutes:user');
    AsyncStorage.removeItem('@CustomRoutes:token');
  }

  async function logIn() {
    try {
      const response = await api.post('auth', {
        email: 'guilherme.cordeiro@fbssistemas.com.br',
        password: '123456',
      });
      await AsyncStorage.setItem(
        '@CustomRoutes:user',
        JSON.stringify(response.data.user)
      );
      await AsyncStorage.setItem('@CustomRoutes:token', response.data.token);
      setUser(response.data.user);
    } catch (err) {
      console.log(err.response.data);
      logOut();
    }
  }

  async function loadToken() {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    setLoading(false);
  }

  loadToken();

  return (
    <AuthContext.Provider value={{ signed: !!user, loading, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export function useAuth() {
  return useContext(AuthContext);
}
