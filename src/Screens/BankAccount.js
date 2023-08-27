import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View,  ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../apis/MethodContext';
import { MenuProvider } from 'react-native-popup-menu';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import axios from 'axios';

import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

const BankAccount = ({navigation}) => {

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

 /* const renderItem = ({ item }) => (

    <View>
      <Text>{item.account_number}</Text>
      <Text>{item.bank_address}</Text>
    </View>
  
 /*
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
        <DataTable.Cell></DataTable.Cell>
        <DataTable.Cell></DataTable.Cell>
        <DataTable.Cell>{item.account_number}</DataTable.Cell>
        <DataTable.Cell>{item.opening_balance}</DataTable.Cell>
        <DataTable.Cell>{item.contact_number}</DataTable.Cell>
        <DataTable.Cell>{item.bank_address}</DataTable.Cell>
        <DataTable.Cell></DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  </View>*/


  return (
    <SafeAreaView style={styles.container}>
      <View>
              <View style={styles.manager}>
              <Text style={styles.headingtext}>BANK ACCOUNTS</Text>
              <MenuProvider>
              <Menu>
                <MenuTrigger>
                  <TouchableOpacity style={styles.touchplayer}>
                  <Text style={styles.touchPlayerText}><Entypo name="plus" size={24} color="#fffff" /></Text>
                  </TouchableOpacity>
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => handleMenueItemClick('Opton 1')} text='Option 1'/>
                  <MenuOption onSelect={() => handleMenueItemClick('Opton 2')} text='Option 2'/>
                  <MenuOption onSelect={() => handleMenueItemClick('Opton 3')} text='Option 3'/>
                </MenuOptions>
              </Menu>
              </MenuProvider>
              </View>
          </View>
          <View>
            <Text style={styles.liner}></Text>
          </View>
          <View style={styles.tableManager}>
            {loading ? (
            <ActivityIndicator size="large" color="#000" />
            ) : (
            <View>
              {data.length > 0 ? <View>
                <Text>Recieved</Text>
                {data.map(item => (
                  <Text key={item.accounts}>{item.holder_name}</Text>
                ))}
              </View>
              :
              <View>
                <Text>No Data to display here</Text>
                
              </View>
              }
            </View>
            )}
          </View>
    </SafeAreaView>
          
  )
}

export default BankAccount;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      position: 'relative',
      top: 18,
      width: '100%',
    },
    headingtext: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    touchplayer: {
      backgroundColor: '#008ecc',
      borderRadius: 5,
      marginLeft: 70,
      width: 50,
      textAlign: 'center',
      height: 35,
    },
    touchPlayerText: {
      color: '#ffffff',
      fontSize: 18,
      textAlign: 'center',
      marginTop: 5,
    },
    button: {
      textAlign: 'center',
      fontSize: 26,
      color: '#fff'
    },
    manager: {
      flexDirection: 'row',
    },
    input: {
      width: 300,
      margin: 30,
      padding: 5,
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      borderColor: '#8C8C8C'
    },
    manager: {
      flexDirection: 'row'
    },
    liner:{
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
      marginTop: 1,
      width: 340,
      position: 'relative',
    },
    tableManager: {
      marginTop: 10,
      alignItems: 'center',
    }
  });
  