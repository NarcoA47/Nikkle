import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login'; // Replace with the path to your Login component

const MainComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    fetchData();
  };

  const fetchData = async () => {
    const apiUrl = 'https://api.example.com/data'; // Replace this with your API endpoint URL
    const token = await getBearerToken();

    if (token) {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error making API call:', error);
        setLoading(false);
      }
    } else {
      console.log('Bearer token not available.');
      setLoading(false);
    }
  };

  const getBearerToken = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      return token;
    } catch (error) {
      console.error('Error retrieving bearer token:', error);
      return null;
    }
  };

  if (!loggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <View>
          {/* Display your table here */}
          <Text>Table</Text>
          {/* Render data in the table */}
          {data.map((item) => (
            <Text key={item.id}>{item.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default MainComponent;