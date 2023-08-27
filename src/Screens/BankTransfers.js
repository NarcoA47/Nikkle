import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ActivityIndicator,} from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { AuthContext } from '../apis/MethodContext';
import { MenuProvider } from 'react-native-popup-menu';
import axios from 'axios';

import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

const BankTransfer = ({navigation}) => {

  const { token } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiUrl = 'https://nikkle.io/api/api/bank-transfer';

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

  const transferData = async (selectData) => {
    const apiUrl = "https://nikkle.io/api/api/bank-transfer";

    if (token) {
      try {
        const response = await axios.post(
          apiUrl,
          {
            data: selectData,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
          }
        );

        console.log('Data Transfered Successfuly')
      } catch {
        console.log('Error transferring data:', error);
      }
    }
    else {
      console.log('Bearer token not available.');
    }
  }

  const handleMenueItemClick = button => {
    console.log(`Clicked on ${button}`);
  };

  return (
    <SafeAreaView style={styles.container}>
        <View>
          <View>
              <View style={styles.manager}>
              <Text style={styles.headingtext}>BALANCE TRANSFERS</Text>
              <MenuProvider>
              <Menu>
                <MenuTrigger customStyles={{triggerWrapper: {top: -20,},}}>
                  <TouchableOpacity style={styles.touchplayer}>
                  <Text style={styles.touchPlayerText}><Entypo name="plus" size={24} color="#fffff" /></Text>
                  </TouchableOpacity>
                </MenuTrigger>
                <MenuOptions customStyles={{optionsContainer: {borderRadius: 10,},}}>
                  <MenuOption onSelect={() => alert(`Save`)} text="Add"/>
                </MenuOptions>
              </Menu>
              </MenuProvider>
              </View>
          </View>
          <View>
            <Text style={styles.liner}></Text>
          </View>
          <View>
            {loading ? (
            <ActivityIndicator size="large" color="#000" />
            ) : (
            <View style={styles.tableManager}>
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
    </View> 
    </SafeAreaView>
  )
}

export default BankTransfer;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20,
      position: 'relative',
      top: 25,
      width: '100%',
    },
    content: {
      margin: 10,
    },
    headingtext: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    touchplayer: {
      backgroundColor: '#008ecc',
      borderRadius: 5,
      marginLeft: 70,
      width: 45,
      textAlign: 'center',
      height: 25,
    },
    touchPlayerText: {
      color: '#ffffff',
      fontSize: 18,
      textAlign: 'center',
      marginTop: 2,
    },
    manager: {
      flexDirection: 'row'
    },
    liner:{
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
      marginTop: 1,
      width: 320,
      position: 'relative',
    },
    tableManager: {
      marginTop: 10,
      alignItems: 'center',
    }
  });
  