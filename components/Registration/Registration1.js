import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { auth } from '../../firebase';
import { ScrollView } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker'
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';


const Registration1 = ({ navigation }) => {

  function handleGoBack(){
    navigation.goBack();
  };

  const [name_reg, setName_reg] = useState('');
  const [email_reg, setEmail_reg] = useState('');
  const [password_reg, setPassword_reg] = useState('');
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState('Admiralty Zone 1');


  // Store registered name in name_reg

  function handleName_reg(text){
    setName_reg(text)
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


  const handleUpload = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email_reg,
        selectedNeighbourhood,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  function handleNeighbourhood(value){
    setSelectedNeighbourhood(value)
  };

  function handleNavigation(){
    handleUpload();
    handleRegister();
    navigation.navigate('Registration2');
  };

  return (
    <ScrollView> 

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

          {/* name */}

          <TextInput 
          value={name_reg} 
          style={styles.textInput} 
          onChangeText={handleName_reg} 
          placeholder="Name" >
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

          {/* Neighbourhood */}

          <Text style={{marginBottom:5, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Enter your neighbourhood </Text>
          <Text style={{marginBottom:5, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>(we'll use this to group you with others </Text>
          <Text style={{marginBottom:-5, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}> in your community) </Text>

          <Picker
            style={{marginTop: -15,}}
            selectedValue={selectedNeighbourhood}
            onValueChange={handleNeighbourhood}>
            <Picker.Item label="Admiralty Zone 1" value="Admiralty Zone 1" />
            <Picker.Item label="Admiralty Zone 2" value="Admiralty Zone 2" />
            <Picker.Item label="Aljunied Zone 1" value="Aljunied Zone 1" />
            <Picker.Item label="Aljunied Zone 2" value="Aljunied Zone 2" />
            <Picker.Item label="Ang Mo Kio Zone 1" value="Ang Mo Kio Zone 1" />
            <Picker.Item label="Ang Mo Kio Zone 2" value="Ang Mo Kio Zone 2" />
            <Picker.Item label="Bukit Batok Zone 1" value="Bukit Batok Zone 1" />
            <Picker.Item label="Bukit Batok Zone 2" value="Bukit Batok Zone 2" />
            <Picker.Item label="Sembawang Zone 1" value="Sembawang Zone 1" />

          </Picker>
          
        </View>

      <TouchableOpacity style={{
        backgroundColor: '#dea3e6',
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: 310,
        marginTop: 20,
        marginBottom: 80,
        borderRadius: 5,
        alignItems: 'center',}} onPress={handleNavigation} >
        <Text> Next </Text> 
      </TouchableOpacity>

      </View>


    </ScrollView>
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
    marginTop: 90,
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