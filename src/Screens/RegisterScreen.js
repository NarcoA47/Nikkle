import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, } from 'react-native';
import React, {useContext, useState} from 'react';
import { AuthContext } from '../apis/MethodContext';

const RegisterScreen = ({navigation}) => {

 const {registerUser} = useContext(AuthContext); 

 const [fullName, setFullName] = useState('') ;
 const [email, setEmail] = useState(''); 
 const [businessName, setBusinessName] = useState(''); 
 const [businesses, setbusinesses] = useState("Select");
 const [password, setPassword] = useState('');
 const [passwordCon, setPasswordCon] = useState('');
 const [classAction, setClasAction] = useState("Select");

 const handleRegister = () => {
  registerUser(fullName, email, businessName, businesses, classAction, password, passwordCon)
 };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View>
          <View>
            <Text style={styles.headingtext}>Register</Text>
          </View>
          <View>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
          </View>
          <View style={styles.inputfield}>
          <View>
            <Text style={styles.inputtext}>Full Name</Text>
            <TextInput value={fullName} onChangeText={text => setFullName(text)} style={styles.input}/>
            <Text style={styles.inputtext}>Email</Text>
            <TextInput value={email} onChangeText={text => setEmail(text)}  style={styles.input} keyboardType='email-address'/>
            <Text style={styles.inputtext}>Business Name</Text>
            <TextInput value={businessName} onChangeText={text => setBusinessName(text)}  style={styles.input}/>
            <Text style={styles.inputtext}>Business Type</Text>
            <View style={styles.picker}>
            
            </View>
            <Text style={styles.inputtext}>Password</Text>
            <TextInput value={password} onChangeText={text => setPassword(text)}  secureTextEntry={true} style={styles.input}/>
            <Text value={passwordCon} onChangeText={text => setPasswordCon(text)}  style={styles.inputtext}>Confirm Password</Text>
            <TextInput secureTextEntry={true} style={styles.input}/>
            <Text style={styles.inputtext}>Where did you hear us from?</Text>
            <View style={styles.picker}>
            </View>
          </View> 
          <View onPress={handleRegister} style={styles.touchplayer}>
            <Text onPress={handleRegister} style={styles.button}>Register</Text>
          </View>
          <View>
          <View>
            <Text style={styles.accounttext}>
              Do you have an account? <Text onPress={() => navigation.navigate('Login')} style={styles.login}>Login</Text> here
            </Text>
          </View>
          </View>
        </View>
      </View>
    </View> 
    </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    headingtext: {
      fontSize: 28,
    },
  
    maincontent: {
      padding: 4
    },
  
    inputfield: {
      fontSize: 24,
      marginTop: 15,
    },
  
    inputtext: {
      fontSize: 18,
      marginBottom: 5,
      paddingBottom: 5,
      paddingTop: 2
    },
  
    input: {
      width: 300,
      margin: 1,
      padding: 5,
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      borderColor: '#8C8C8C'
    },
  
    touchplayer: {
      backgroundColor: '#008ecc',
      padding: 10,
      borderRadius: 5,
      marginTop: 30,
  
    },
  
    button: {
      textAlign: 'center',
      fontSize: 26,
      color: '#fff'
    },
    accounttext: {
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 10,
      fontSize: 18,
    },
    login: {
      color: '#00aeef',
      paddingLeft: 10,
      marginLeft: 10,
     },
    scrollView: {
      marginHorizontal: 20,
    },
    picker: {
      width: 300,
      borderColor: "#3E3D3D68",
      borderWidth: 2,
      borderRadius: 5,
      height: 50,
    },
  });  