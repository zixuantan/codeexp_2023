import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const Sports2 = ({ route, navigation }) => {

  const {selectedSport} = route.params;
  const [selectedDay, setSelectedDay] = useState('');

  function handleGoBack(){
    navigation.goBack();
  };

  function handleDayClick(day){
    navigation.navigate('Sports3', {selectedDay:day});

  };

  // { selectedDay: day } is an object passed as the second parameter to the navigate function. It allows you to pass data or parameters to the destination screen. 
  // In this case, it includes a key-value pair where the key is selectedDay and the value is the day variable representing the selected day of the week

  

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
          marginLeft: 60,
          }}>
            {selectedSport}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.description}>Select a Day this week.</Text>

        <View style={styles.datesContainer}>

          <TouchableOpacity  onPress={() => handleDayClick('12/6 Mon')}> 
              <Text style={styles.date}>
              12/6 Mon
              </Text>
            </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleDayClick('13/6 Tue')}> 
            <Text style={styles.date}>
            13/6 Tue
            </Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleDayClick('14/6 Wed')}> 
              <Text style={styles.date}>
              14/6 Wed
              </Text>
            </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleDayClick('15/6 Thu')}> 
            <Text style={styles.date}>
            15/6 Thu
            </Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleDayClick('16/6 Fri')}> 
            <Text style={styles.date}>
            16/6 Fri
            </Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleDayClick('17/6 Sat')}> 
            <Text style={styles.date}>
            17/6 Sat
            </Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleDayClick('18/6 Sun')}> 
            <Text style={styles.date}>
            18/6 Sun
            </Text>
          </TouchableOpacity>

          


        </View>



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