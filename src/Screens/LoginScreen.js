import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet, StatusBar, Text, View, TextInput, TouchableOpacity, SafeAreaView, Keyboard, KeyboardAvoidingView } from 'react-native';
import { AuthContext } from '../apis/MethodContext';

import { MaterialIcons } from '@expo/vector-icons'; 

const LoginScreen = ({navigation}) => {

  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const { login, error } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
 
  const handleLogin = () => {
    login(email, password);
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View>
          <View>
            <Text style={styles.headingtext}>Login</Text>
          </View>
          <View>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
          </View>
          <View style={styles.inputfield}>
          <View>
            <Text style={styles.inputtext}>Email</Text>
            <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)} keyboardType='email-address'/>
            <Text style={styles.inputtext}>Password</Text>
            <View style={styles.passwordfield}>
            <TextInput secureTextEntry={secureTextEntry} value={password} onChangeText={text => setPassword(text)} style={styles.input}/>
            <TouchableOpacity  style={styles.touchText} onPress={toggleSecureEntry}><Text>{secureTextEntry ? <MaterialIcons name="visibility" size={24} color="black" /> : <MaterialIcons name="visibility-off" size={24} color="black" />}</Text></TouchableOpacity>
            </View>
          </View> 
          <View>
            <Text>Forgot Your Password?</Text>
          </View>
          <TouchableOpacity style={styles.touchplayer}>
          <Text style={styles.button} onPress={handleLogin}>Login</Text>
          </TouchableOpacity>
            <Text style={styles.accounttext}>
              Don't have an account? <Text onPress={() => navigation.navigate('Register')} style={styles.register}>Register</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
    )
}


export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      maxHeight: 500,
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
    account: {
      backgroundColor: '#00aeef',
        borderColor: 'red',
        borderWidth: 5,
        borderRadius: 15  
    },
    accounttext: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 18,
    },
    register: {
     color: '#00aeef',
     paddingLeft: 10,
     marginLeft: 10,
    },
    passwordfield: {
      flexDirection:'row'
    },
    touchText: {
      position: 'relative',
      right: 40,
      top: 12,
    },
  });
