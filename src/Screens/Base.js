import React, {useState, useContext, useEffect} from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { AuthContext } from '../apis/MethodContext';

import { MaterialIcons } from '@expo/vector-icons'; 


export default function Base() {

  const [secureTextEntry, setSecureTextEntry] = useState(true)
 // const { login, error } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
        <Text>
            Hello, Welcome to Base 
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});