import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';


const Food4 = ({ route, navigation }) => {

  const {selectedDiet, selectedLocation, selectedDay, selectedMeal, selectedTime} = route.params;

  function handleNext(){
    navigation.navigate('FoodFeedUpdated', {selectedDiet, selectedLocation, selectedDay, selectedMeal, selectedTime});
  };

  function handleGoBack(){
    navigation.goBack();
  };


  return (
    <ScrollView>

      <View style={{flexDirection: 'row',marginTop: 70, textAlign: 'center'}}> 
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
          marginLeft: 3,
          }}>
            Details of Activity</Text>
      </View>

      <View style={styles.container}>

        <View style={styles.detailsContainer}>
          <Text style={styles.details}>Meal: {selectedMeal}</Text>
          <Text style={styles.details}> Date & Time: {selectedDay}, {selectedTime}  </Text>
          <Text style={styles.details}> Dietary Type: {selectedDiet} </Text>
          <Text style={styles.details}> Dining Setting: {selectedLocation} </Text>
          <Text style={styles.details}> Current no. of participants: 2/4</Text>

        </View>

        {/* Go to Food 5 */}

        <TouchableOpacity style={{
        backgroundColor: '#dea3e6',
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: 310,
        borderRadius: 5,
        marginTop: -20,
        marginBottom: 60,
        alignItems: 'center'}} onPress={handleNext} >
        <Text> Confirm </Text> 
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

  detailsContainer:{ //Container surrounding 4 details boxes
    marginTop: 60,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  details:{
    backgroundColor: '#d6f5c1',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 10,
    width: 310,
    marginBottom: 40,
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 200,
  },
});

export default Food4;