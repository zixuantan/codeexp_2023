import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const Food3 = ({ route, navigation }) => {

  const {selectedDay, selectedMeal} = route.params;

  const [selectedDiet, setSelectedDiet] = useState('Non-muslim');
  const [selectedLocation, setSelectedLocation] = useState('Hawker');

  function handleDiet(value){
    setSelectedDiet(value);
  };

  function handleLocation(value){
    setSelectedLocation(value);
  };

  function handleNext(){
    navigation.navigate('Food4', {selectedDiet, selectedLocation, selectedDay, selectedMeal});
  };


  function handleGoBack(){
    navigation.goBack();
  };


  return (
    <View>

      <View style={{flexDirection: 'row',marginTop: 70, textAlign: 'center'
}}> 
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
          marginLeft: 65,
          }}>
            {selectedDay}</Text>

      </View>


      <View style={styles.container}>

        <View style={styles.inputContainer}>

          {/* Pick dietary type */}

          <Text style={{marginBottom: -20, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Select your dietary type </Text>

           <Picker
            selectedValue={selectedDiet}
            onValueChange={handleDiet}>
            <Picker.Item label="Non-muslim" value="Non-muslim" />
            <Picker.Item label="Muslim" value="Muslim" />
            <Picker.Item label="Vegetarian" value="Vegetarian" />
          </Picker>

          {/* Pick dining setting */}

          <Text style={{marginTop: 60, marginBottom:-20, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Select your desired dining setting </Text>

          <Picker
            selectedValue={selectedLocation}
            onValueChange={handleLocation}>
            <Picker.Item label="Hawker" value="Hawker" />
            <Picker.Item label="Restaurant" value="Restaurant" />
            <Picker.Item label="Cafe" value="Cafe" />
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
    marginTop: 70,
    marginBottom: 70  
  },

  


});

export default Food3;