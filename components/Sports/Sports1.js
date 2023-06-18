import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const Sports1 = ({ navigation }) => {

  function handleGoBack(){
    navigation.goBack();
  };

  const [selectedSport, setSelectedSport] = useState('Badminton')
  const [selectedProficiency, setSelectedProficiency] = useState('1')

  function handleSport(value){
    setSelectedSport(value)
  };

  function handleProficiency(value){
    setSelectedProficiency(value)
  };

  function handleNext(){
    navigation.navigate('Sports2', {selectedSport});
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
          fontSize: 32,
          fontWeight: 'normal',
          marginLeft: 19,}}>
            Sports & Games</Text>
      </View>

      <View style={styles.container}>

        <View style={styles.inputContainer}>

          {/* Pick a sport */}

          <Text style={{marginBottom: -20, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Pick a sport </Text>

           <Picker
            selectedValue={selectedSport}
            onValueChange={handleSport}>
            <Picker.Item label="Badminton" value="Badminton" />
            <Picker.Item label="Tchoukball" value="Tchoukball" />
            <Picker.Item label="Basketball" value="Basketball" />
          </Picker>

          <Text style={{marginBottom:-20, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Select your level of proficiency </Text>

          <Picker
            selectedValue={selectedProficiency}
            onValueChange={handleProficiency}>
            <Picker.Item label="Beginner" value="1" />
            <Picker.Item label="Intermediate" value="2" />
            <Picker.Item label="Advanced" value="3" />
          </Picker>

        </View>

        <TouchableOpacity style={{
        backgroundColor: '#dea3e6',
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: 310,
        borderRadius: 5,
        alignItems: 'center'}} onPress={handleNext} >
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

  inputContainer:{ // Container surrounding all 3 input boxes
    marginTop: 100,
    marginBottom: 30  
  },
 
  

});

export default Sports1;