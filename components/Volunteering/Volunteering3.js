import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const Volunteering3 = ({ route, navigation }) => {

  const {selectedProject} = route.params;

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
          marginLeft: 62,
          }}>
            {selectedProject}</Text>
      </View>

      <View>

        <View style={styles.projectContainer}>

        <View style={styles.projectExpanded}>

          <Text style={styles.description}>
            Description (extended)
          </Text>

          <Text style={styles.upcomingEvents}>
            Upcoming Events:
          </Text>

          <Text style={styles.upcomingEventDates}>
            Event A (12/6 -13/6)
          </Text>

          <Text style={styles.upcomingEventDates}>
            Event B (15/9 - 20/9)
          </Text>

          <Text style={styles.upcomingEventHours}>
            Hours: xx
          </Text>

          <Text style={styles.meetingPoint}>
            Meeting Points: xx
          </Text>






        </View>

        <TouchableOpacity style={{
        backgroundColor: '#dea3e6',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 30,
        width: 310,
        borderRadius: 5,
        alignItems: 'center'}} onPress={() => navigation.navigate('Volunteering4')} >
        <Text> Join </Text> 
      </TouchableOpacity>

        </View>

      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  projectContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  projectExpanded:{
    backgroundColor: 'white',
    marginTop: 40,
    paddingVertical: 25,
    paddingHorizontal:20,
    borderRadius: 10,
    width: 350,
    marginBottom: 30,
  },

  description:{
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Helvetica',
    marginTop: 5,
  },

  upcomingEvents:{
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Helvetica',
    marginTop: 390,
  },

  upcomingEventDates:{
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Helvetica',
    marginTop: 5,
  },

  upcomingEventHours:{
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Helvetica',
    marginTop: 40,
  },

  meetingPoint:{
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Helvetica',
    marginTop: 40,
  },
  
  


});

export default Volunteering3;