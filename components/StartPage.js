import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const StartPage = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Open Jio</Text>
        <Text style={styles.description}>Eh bro, why bojio?</Text>

        {/* Activity container */}

        <View style={styles.activityContainer}>

          {/* Launch Sports 1 */}

          <TouchableOpacity  onPress={() => navigation.navigate('Sports1')}> 
            <Text style={styles.activity}>
              Sports & Games
            </Text>
          </TouchableOpacity>

          {/* Launch Food 1 */}

          <TouchableOpacity onPress={() => navigation.navigate('Food1')}> 
            <Text style={styles.activity}>
              Food Buddies 
            </Text>
          </TouchableOpacity>

          {/* Launch Volunteering 1 */}

          <TouchableOpacity onPress={() => navigation.navigate('Volunteering1')}> 
            <Text style={styles.activity}>
              Volunteering 
            </Text>
          </TouchableOpacity>

          {/* Sign Out (back to Launch Page) */}

          <TouchableOpacity style={{
          backgroundColor: '#dea3e6',
          paddingVertical: 20,
          paddingHorizontal: 20,
          width: 310,
          borderRadius: 5,
          marginTop: 20,
          alignItems: 'center'}} onPress={() => navigation.navigate('LaunchPage')} >
          <Text> Sign Out </Text> 
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

    logo: {
      fontFamily: 'Trebuchet MS',
      fontSize: 70,
      marginTop: 80,
      fontWeight: 'bold',
      marginLeft: -8,
    },

    description:{
      fontFamily: 'Helvetica',
      marginTop:18,
      fontSize: 18,
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
  
  export default StartPage;