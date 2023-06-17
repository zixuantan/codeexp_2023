import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const LaunchPage = ({ navigation }) => {

  const [username, setUsername] = useState(''); 
  //useState function returns an array comprising a state variable called username and a function called setusername
  // that allows you to set the username  
  const [password, setPassword] = useState('');

  function handleUsernameChange(text){
    setUsername(text);
  };

  function handlePasswordChange(text){
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Open Jio</Text>
      
      <View styles={styles.inputContainer}>
      <TextInput 
      value={username} style={styles.textInput} onChangeText={handleUsernameChange} ></TextInput>
      </View>

      <View styles={styles.inputContainer}>
      <TextInput value={password} style={styles.textInput} onChangeText={handlePasswordChange}  ></TextInput>
      </View>


      <Button
        title="Login"
        onPress={() => navigation.navigate('StartPage')} // Login Button
      />
      <Button
        title="Register new user"
        onPress={() => navigation.navigate('Registration1')} // Register new user Button
      />
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
    width: 200,
    borderColor: '#75C6EE',
    borderWidth: 2,
    marginTop: 12,
    
  },
  textInput:{ // Imagine each input box being a container
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    width: 250,
    marginBottom: 10,


    

   

  },
});

export default LaunchPage;