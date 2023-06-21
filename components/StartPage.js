import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { retrieveUserInfo } from './RetrieveNeighbourhood';
import { useUsernameState } from './usernameState';
import { UsernameContext } from './UsernameContext';
import { useContext } from 'react';
import { createContext } from 'react';


const StartPage = ({ route, navigation }) => {


  const { username, setUsername, setUserChoice } = useContext(UsernameContext);

  const handleNextPageSports = async () => {
    try {
      console.log("--------------");
      console.log("Username is: ", username); // Username is supposed to be from UsernameContext
      const emailToRetrieve = username;
      const userInfo = await retrieveUserInfo(emailToRetrieve);
      const userChoice = userInfo[0]?.neighbourhood || null; // Access the userChoice value
      console.log("Access outside function: ", userChoice);

      // Set the userChoice value in the context
      setUserChoice(userChoice);

      navigation.navigate('SportsFeed', { username });
    } catch (error) {
      console.error("Error retrieving user information: ", error);
    }
  };

  const handleNextPageFood = async () => {
    try {
      console.log("--------------");
      console.log("Username is: ", username); // Username is supposed to be from UsernameContext
      const emailToRetrieve = username;
      const userInfo = await retrieveUserInfo(emailToRetrieve);
      const userChoice = userInfo[0]?.neighbourhood || null; // Access the userChoice value
      console.log("Access outside function: ", userChoice);

      // Set the userChoice value in the context
      setUserChoice(userChoice);

      navigation.navigate('FoodFeed', { username });
    } catch (error) {
      console.error("Error retrieving user information: ", error);
    }
  };

  


  

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Open Jio</Text>
        <Text style={styles.description}>Eh bro, why bojio?</Text>

        {/* Activity container */}

        <View style={styles.activityContainer}>

          {/* Launch Sports 1 */}

          <TouchableOpacity  onPress={() => handleNextPageSports()}> 
            <Text style={styles.activity}>
              Sports & Games 
            </Text>
          </TouchableOpacity>

          {/* Launch Food 1 */}

          <TouchableOpacity onPress={() => handleNextPageFood()}> 
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