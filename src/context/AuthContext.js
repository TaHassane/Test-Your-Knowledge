import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = authService.getCurrentUser();
    if (token && userData) {
      setUser({ token, ...userData });
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const data = await authService.login(username, password);
      setUser({
        token: data.token,
        username: data.user.username,
        gender: data.user.gender
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  const register = async (username, password, gender) => {
    try {
      const data = await authService.register(username, password, gender);
      setUser({
        token: data.token,
        username: data.user.username,
        gender: data.user.gender
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
