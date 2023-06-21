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
  const [selectedTime, setSelectedTime] = useState("7AM")

  function handleDiet(value){
    setSelectedDiet(value);
  };

  function handleLocation(value){
    setSelectedLocation(value);
  };

  function handleTime(value){
    setSelectedTime(value);
  };

  function handleNext(){
    navigation.navigate('Food4', {selectedDiet, selectedLocation, selectedDay, selectedMeal, selectedTime});
  };


  function handleGoBack(){
    navigation.goBack();
  };


  return (
    <ScrollView>

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

          {/* Pick timing */}

          <Text style={{marginBottom: -20, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Select a timing </Text>

           <Picker
            selectedValue={selectedTime}
            onValueChange={handleTime}>
            <Picker.Item label="7AM" value="7AM" />
            <Picker.Item label="8AM" value="8AM" />
            <Picker.Item label="9AM" value="9AM" />
            <Picker.Item label="10AM" value="10AM" />
            <Picker.Item label="11AM" value="11AM" />
            <Picker.Item label="12PM" value="12PM" />
            <Picker.Item label="1PM" value="1PM" />
            <Picker.Item label="2PM" value="2PM" />
            <Picker.Item label="3PM" value="3PM" />
            <Picker.Item label="4PM" value="4PM" />
            <Picker.Item label="5PM" value="5PM" />
            <Picker.Item label="6PM" value="6PM" />
            <Picker.Item label="7PM" value="7PM" />
            <Picker.Item label="8PM" value="8PM" />
            <Picker.Item label="9PM" value="9PM" />
            <Picker.Item label="10PM" value="10PM" />
            <Picker.Item label="11PM" value="11PM" />
            <Picker.Item label="12AM" value="12AM" />
            <Picker.Item label="1AM" value="1AM" />
            <Picker.Item label="2AM" value="2AM" />
            <Picker.Item label="3AM" value="3AM" />

          </Picker>


          {/* Pick dietary type */}

          <Text style={{marginTop: 60, marginBottom: -20, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Select your dietary type </Text>

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
        marginBottom: 60,
        borderRadius: 5,
        alignItems: 'center'}} onPress={handleNext} >
        <Text> Next </Text> 
      </TouchableOpacity>

      </View>
     
    </ScrollView>
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