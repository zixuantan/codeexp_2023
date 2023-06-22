import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { auth } from '../firebase';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useUsernameState } from './usernameState';
import { UsernameContext } from './UsernameContext';
import { useContext } from 'react';
import { createContext } from 'react';

const LaunchPage = ({ route, navigation }) => {


  // const [username, setUsername] = useState(''); 

  // const [username, setUsername] = useUsernameState(''); 

  const { username, setUsername } = useContext(UsernameContext);
  

  // const [stateValue, setStateValue] = useState(initialValue);
  // stateValue is current value of state, setStateValue is function used to update state value
  // initialValue is initial value assigned to state when component is first rendered 
  // when updating the state, calling setStateValue function will pass in the new value 

  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

 

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('logged in with', { username });
        setErrorMessage(null); // Resetting error message
        setUsername(username); //  username field
        setPassword(''); // Clearing password field
        navigation.navigate("StartPage", { username }); 
        // Remove this line
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage('Incorrect username or password');
      });
  };
  


  // function takes a text input and replaces the intial state value with that text input 

  function handleUsernameChange(text){
    setUsername(text);
  };

  function handlePasswordChange(text){
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Open Jio </Text>
      <Text style={styles.description}>Find a kaki today!</Text>
      <Text style={styles.emoji}>🤝</Text>


      <View style={styles.inputContainer}>


        <TextInput 
        value={username} 
        style={styles.textInput} 
        onChangeText={handleUsernameChange} 
        placeholder="Email" >
        </TextInput>

        <TextInput 
        value={password} 
        style={styles.textInput} 
        onChangeText={handlePasswordChange} 
        placeholder="Password">
        </TextInput>
        
      </View>

      {/* Login Button */}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
      <Text style={{fontWeight: 400,}}> Login </Text> 
      </TouchableOpacity>

    

      {/* Register Button */}

      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Registration1')}>
        <Text style={styles.registerText}> Register new user </Text> 
      </TouchableOpacity>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Trebuchet MS',
    fontSize: 64,
    position: 'absolute',
    top: '20%', // Adjust this value to position the text as desired
    fontWeight: 'bold',
  },

  emoji: {
    fontFamily: 'Trebuchet MS',
    fontSize: 64,
    fontWeight: 'bold',
    marginTop:5,
  },

  inputContainer:{ // Container surrounding both input boxes
    marginTop: 8,
    marginBottom: 30  
  },
  textInput:{ // Imagine each input box being a container
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    width: 270,
    marginBottom: 20,
  },
  loginButton:{
    backgroundColor: '#dea3e6',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 250,
    borderRadius: 5,
    alignItems: 'center',
  },
  
  registerButton:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
  },

  registerText:{
    textDecorationLine: 'underline',
  },

  error: {
    color: 'red',
    marginBottom: 10,
    marginTop: 20
  },

  description:{
    fontFamily: 'Helvetica',
    marginTop:60,
    fontSize: 18,
    fontWeight: 200,
  },
 
});

export default LaunchPage;