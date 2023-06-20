import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';

const Registration2 = ({ route, navigation }) => {

  function handleGoBack(){
    navigation.goBack();
  };


  function handleNextPage(){
    navigation.navigate('LaunchPage');
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
          marginLeft: 25,}}>
            Let's get started</Text>
      </View>

      <View style={styles.container}>

        <Text style={styles.description1}>These are the activities we help to platform.</Text>
        <Text style={styles.description2}>Jio someone today!</Text>
      
      </View>

        
      <View style={styles.activityContainer}>

        <Text style={styles.activity}>Sports & Games</Text>

        <Text style={styles.activity}>Food Buddies</Text>

        <Text style={styles.activity}>Volunteering</Text>

        <TouchableOpacity style={{
        backgroundColor: '#dea3e6',
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: 310,
        borderRadius: 5,
        alignItems: 'center'}} onPress={handleNextPage} >
        <Text> Finish </Text> 
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
  description1:{
    fontFamily: 'Helvetica',
    marginTop:30,
    fontSize: 15,
    fontWeight: 200,
  },
  description2:{
    fontFamily: 'Helvetica',
    marginTop:10,
    fontSize: 15,
    fontWeight: 200,
  },
  activityContainer:{ //Container surrounding all 3 activity boxes
    marginTop: 80,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activity:{
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 10,
    width: 310,
    marginBottom: 60,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 200,
  },

  


});

export default Registration2;