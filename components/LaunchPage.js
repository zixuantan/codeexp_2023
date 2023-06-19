import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { auth } from '../firebase';

const LaunchPage = ({ navigation }) => {

  const [username, setUsername] = useState(''); 

  // const [stateValue, setStateValue] = useState(initialValue);
  // stateValue is current value of state, setStateValue is function used to update state value
  // initialValue is initial value assigned to state when component is first rendered 
  // when updating the state, calling setStateValue function will pass in the new value 

  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  // function handleLogin(){
  //   if (username === 'admin' && password === 'password') {
  //     setErrorMessage('');
  //     setUsername('');
  //     setPassword('');
  //     navigation.navigate('StartPage');
  //   } else {
  //     setErrorMessage('Incorrect username or password')
  //   }
  // };

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('logged in with', {username});
        setErrorMessage(null) //resetting error message
        setUsername(''); // clearing username field
        setPassword(''); // clearing password field
        navigation.navigate("StartPage");
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage('Incorrect username or password')
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
      <Text style={styles.logo}>Open Jio</Text>

      <View style={styles.inputContainer}>


        <TextInput 
        value={username} 
        style={styles.textInput} 
        onChangeText={handleUsernameChange} 
        placeholder="Phone number" >
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
      <Text> Login </Text> 
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
    top: '25%', // Adjust this value to position the text as desired
    fontWeight: 'bold',
  },
  inputContainer:{ // Container surrounding both input boxes
    marginTop: 150,
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
    paddingVertical: 10,
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
 
});

export default LaunchPage;