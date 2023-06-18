import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const Sports2 = ({ route, navigation }) => {

  const {selectedSport} = route.params;

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
          marginLeft: 60,
          }}>
            {selectedSport}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.description}>Select a Day this week.</Text>

        <View style={styles.datesContainer}>

          <TouchableOpacity  onPress={() => navigation.navigate('Sports3')}> 
              <Text style={styles.date}>
                Sports & Games
              </Text>
            </TouchableOpacity>


        </View>



      </View>




      <Button
          title="Button 1"
          onPress={() => navigation.navigate('Sports3')} // Launch Sports 3
        />
        <Button
          title="Button 2"
          onPress={() => navigation.navigate('Sports3')} // Launch Sports 3
        />
        <Button
          title="Button 3"
          onPress={() => navigation.navigate('Sports3')} // Launch Sports 3
        />
        <Button
          title="Button 4"
          onPress={() => navigation.navigate('Sports3')} // Launch Sports 3
        />
        <Button
          title="Button 5"
          onPress={() => navigation.navigate('Sports3')} // Launch Sports 3
        />
      <Button
          title="Back arrow"
          onPress={() => navigation.goBack()} // Go back to previous page
        />
        
      
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
    marginTop:20,
    fontSize: 15,
    fontWeight: 200,
  },

  datesContainer:{ //Container surrounding all dates boxes
    marginTop: 80,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  date:{
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

export default Sports2