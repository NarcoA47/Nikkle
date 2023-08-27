import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const registerUser = async (fullname, email, businessName, businesses, password, passwordcon, classAction) => {
    const apiUrl = 'https://nikkle.io/api/api/register';
    
    try {
        const response = await axios.post(apiUrl, {
            fullname: fullname,
            email: email,
            businessName: businessName,
            businesses: businesses,
            password: password,
            passwordcon: passwordcon,
            classAction: classAction,
        });

        const token = response.data.token;

        await AsyncStorage.setItem('accessToken', token);

        setToken(token);

        console.log('Successfully Created account')
        
    } catch(error) {
        console.error('User Registration failed', error);
        setError("Invalid Credentials Please Check Credentials to create account")
        setToken(null);
    }
    
  }
  
  const login = async (email, password) => {
    const apiUrl = 'https://nikkle.io/api/api/signin'; 

    try {
      const response = await axios.post(apiUrl, {
        email: email,
        password: password,
      });

      // Assuming the token is returned in the response
      const token = response.data.token;

      // Store the token in AsyncStorage
      await AsyncStorage.setItem('accessToken', token);

      setToken(token);

      console.log('Successfully logged in')

    } catch (error) {
      console.error('Login failed:', error);
      setError("Invalid Credentials Please check Username/password");
      setToken(null);
    }
  };

  const logout = async () => {
    // Remove the token from AsyncStorage
    await AsyncStorage.removeItem('accessToken');
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        error,
        registerUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
