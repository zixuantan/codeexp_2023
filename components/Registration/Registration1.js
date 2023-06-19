import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { auth } from '../../firebase';
import { Firestore } from 'firebase/firestore';



const Registration1 = ({ navigation }) => {

  function handleGoBack(){
    navigation.goBack();
  };

  const [phonenum_reg, setPhonenum_reg] = useState('');
  const [email_reg, setEmail_reg] = useState('');
  const [password_reg, setPassword_reg] = useState('');

  // Store registered phone num in phonenum_reg

  function handlePhonenum_reg(text){
    setPhonenum_reg(text)
  };

  // Store registered email in email_reg

  function handleEmail_reg(text){
    setEmail_reg(text)
  };

  // Store registered password in password_reg

  function handlePassword_reg(text){
    setPassword_reg(text)
  };

  const handleRegister = () => {
    auth.createUserWithEmailAndPassword(email_reg, password_reg)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Registered user:', user.email_reg);
      })
      .catch((error) => {
        console.log('Registration error:', error);
      });
  };



  function handleNavigation(){
    handleRegister();
    navigation.navigate('Registration2');
  };

  return (
    <View> 

      {/* Top container is used for aligning back button and header */}

      <View style={{flexDirection: 'row',marginTop: 70,}}> 
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons 
          name="chevron-back-outline" 
          size={36} 
          color="black"
          style={{marginHorizontal:15}}
          />
        </TouchableOpacity>

        <Text style={{
          fontFamily: 'Trebuchet MS',
          fontSize: 32,
          fontWeight: 'normal',
          marginLeft: 1,}}>
            Create an Account</Text>
       
      </View>

      <View style={styles.container}>

        <Text style={styles.description}>We're going to need some of your information.</Text>

        <View style={styles.inputContainer}>

          {/* Phone Number */}

          <TextInput 
          value={phonenum_reg} 
          style={styles.textInput} 
          onChangeText={handlePhonenum_reg} 
          placeholder="Phone number" >
          </TextInput>

          {/* Email */}

          <TextInput 
          value={email_reg} 
          style={styles.textInput} 
          onChangeText={handleEmail_reg} 
          placeholder="Email">
          </TextInput>

          {/* Password */}

          <TextInput 
          value={password_reg} 
          style={styles.textInput} 
          onChangeText={handlePassword_reg} 
          placeholder="Password">
          </TextInput>
          
        </View>

      <TouchableOpacity style={{
        backgroundColor: '#dea3e6',
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: 310,
        borderRadius: 5,
        alignItems: 'center',}} onPress={handleNavigation} >
        <Text> Next </Text> 
      </TouchableOpacity>

      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  topContainer:{
    flexDirection: 'row',
    marginTop: 70,
  },
 
  description:{
    fontFamily: 'Helvetica',
    marginTop:30,
    fontSize: 15,
    fontWeight: 200,
  },

  inputContainer:{ // Container surrounding all 3 input boxes
    marginTop: 100,
    marginBottom: 30  
  },

  textInput:{ // Imagine each input box being a container
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    width: 310,
    marginBottom: 60,
  },
 
});

export default Registration1;