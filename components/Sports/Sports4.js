import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const Sports4 = ({ route, navigation }) => {

  const {selectedTiming, selectedDay} = route.params;

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
        marginLeft: 3,
        }}>
          Details of Activity</Text>
      </View>

      <View style={styles.container}>

        <View style={styles.detailsContainer}>
          <Text style={styles.details}> Date: {selectedDay}  </Text>
          <Text style={styles.details}> Time: {selectedTiming} </Text>
          <Text style={styles.details}> Current no. of participants: 2/4</Text>
        </View>

        {/* Go to Sports 5 */}

        <TouchableOpacity style={{
        backgroundColor: '#dea3e6',
        marginTop: 30,
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: 310,
        borderRadius: 5,
        alignItems: 'center'}} onPress={() => navigation.navigate('Sports5')} >
        <Text> Join </Text> 
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

  detailsContainer:{ //Container surrounding 2 details boxes
    marginTop: 120,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  details:{
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 10,
    width: 310,
    marginBottom: 60,
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 200,
  },

});

export default Sports4;