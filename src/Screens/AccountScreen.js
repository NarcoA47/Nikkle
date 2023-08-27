import {useContext, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Button, SafeAreaView, ScrollView,} from 'react-native';
import { Card,  Title, Paragraph, Modal } from "react-native-paper";
import { Icon } from '@rneui/themed';
import { AuthContext } from '../apis/AuthContext';

const HomeScreen = ({navigation}) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Welcome to Nikkle, Please Select Service</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    leadingText: {
      fontSize: 24,
      marginTop: 20,
    },
    text: {
      fontSize: 28,
      fontWeight: 'bold',
      margin: 20,
    },
    accountBtn: {
      margin: 4,
    }, 
    cardContent: {
      flexDirection: 'row',
      margin: 10,
    },
    cardManager: {
      margin: 5,
      width: 160,
      height: 150,
    },
    cardText: {
      fontSize: 14,
    },
    cardSubText: {
      fontSize: 20,
    }
  });
  