import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';

const Registration2 = ({ navigation }) => {

  function handleGoBack(){
    navigation.goBack();
  };

  const [name, setName] = useState('')
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState('1')

  // Store name input in name 
  function handleName(text){
    setName(text)
  };

  // Store neighbourhood choice in selectedNeighbourhood
  function handleNeighbourhood(value){
    setSelectedNeighbourhood(value)
  };

  return (
    <View>

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
          fontSize: 30,
          fontWeight: 'normal',
          marginLeft: -5,}}>
            Tell us about yourself</Text>
      </View>

      <View style={styles.container}>

        <Text style={styles.description}>We're going to need some of your information.</Text>


        <View style={styles.inputContainer}>

          {/* Name */}

          <Text style={{marginBottom:19, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>What's your name? </Text>

          <TextInput 
          value={name} 
          style={styles.textInput} 
          onChangeText={handleName} 
          placeholder="Name" >
          </TextInput>

          {/* Neighbourhood */}

          <Text style={{marginBottom:5, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Enter your neighbourhood </Text>
          <Text style={{marginBottom:5, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>(we'll use this to group you with others </Text>
          <Text style={{marginBottom:-5, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}> in your community) </Text>

          <Picker
            style={{marginTop: -15,}}
            selectedValue={selectedNeighbourhood}
            onValueChange={handleNeighbourhood}>
            <Picker.Item label="Admiralty" value="1" />
            <Picker.Item label="Aljunied" value="2" />
            <Picker.Item label="Ang Mo Kio" value="3" />
            <Picker.Item label="Bukit Batok" value="4" />
          </Picker>

        </View>

        <TouchableOpacity style={{
        backgroundColor: '#dea3e6',
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: 310,
        borderRadius: 5,
        alignItems: 'center'}} onPress={() => navigation.navigate('Registration3')} >
        <Text> Next </Text> 
      </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 35,
  },

  
});

export default Registration2

