import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../apis/MethodContext';
import { DataTable } from 'react-native-paper';

const HomeScreen = () => {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiUrl = 'https://nikkle.io/api/api/bank-account';

    if (token) {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
        console.log(response.data)
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

  const renderItem = ({ item }) => (
    <View>
      <DataTable>
      <DataTable.Header>
            <DataTable.Title style={styles.titleText}>Date</DataTable.Title>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>BANK</DataTable.Title>
            <DataTable.Title>ACCOUNT NUMBER</DataTable.Title>
            <DataTable.Title>CURRENT BALANCE</DataTable.Title>
            <DataTable.Title>CONTACT NUMBER</DataTable.Title>
            <DataTable.Title>BANK BRANCH</DataTable.Title>
            <DataTable.Title>ACTION</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell style={styles.titleText}>{item.holder_name}</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
  const TableContent = ({ item }) => (
    <View>
      <DataTable>
      <DataTable.Header>
            <DataTable.Title style={styles.titleText}>Date</DataTable.Title>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>BANK</DataTable.Title>
            <DataTable.Title>ACCOUNT NUMBER</DataTable.Title>
            <DataTable.Title>CURRENT BALANCE</DataTable.Title>
            <DataTable.Title>CONTACT NUMBER</DataTable.Title>
            <DataTable.Title>BANK BRANCH</DataTable.Title>
            <DataTable.Title>ACTION</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>{}</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
          <DataTable.Cell>item 1</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <TableContent/>
      )}
    </View>
  );
};

const transferData = async (selectedData) => {
  const apiUrl = 'https://nikkle.io/api/api/bank-transfer';

  if (token) {
    try {
      response = await axios.post(
        apiUrl,
        {
          data: selectedData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Data Transferred successfully:', response.data);
    } catch (error) {
      console.log('Failed to make transer:', error)
    }
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  titleText: {
      fontSize: 3000,
  }
});
