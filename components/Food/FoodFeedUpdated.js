import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { useContext } from 'react';
import { UsernameContext } from '../UsernameContext';
import { retrieveUserInfo } from '../RetrieveNeighbourhood';
import { createContext } from 'react';


const FoodFeedUpdated = ({ route, navigation }) => {

    const {selectedDiet, selectedLocation, selectedDay, selectedMeal} = route.params;

    const { userChoice } = useContext(UsernameContext);

  
    function handleGoBack(){
        navigation.goBack();
      };
    
    
    //   const { userChoice} = route.params;
    
    
      function handleNextPage(){
        // retrieveUserInfo(emailToRetrieve);
        navigation.navigate('StartPage');
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
            marginLeft: 45,
            }}>
              Sports Feed </Text>
          </View>
    
          <View style={styles.container}>
    
            <Text style={styles.description}>Your Current Location: {userChoice}</Text>
            </View>
    
            <View>
    
            <View style={styles.projectContainer}>
    
            <View style={styles.projectExpanded}>
    
            <Text style={styles.mealName}>
            Breakfast @ {userChoice}
          </Text>

          <Text style={styles.date}>
            Date: {selectedDay}
          </Text>


          <Text style={styles.dietType}>
            Diet Type: {selectedDiet}
          </Text>

          <Text style={styles.diningSetting}>
            Dining Setting: {selectedLocation}
          </Text>

          <Text style={styles.participantNumber}>
            Current no. of participants: 2/4
          </Text>
    
              <Text style={styles.clicktoview}>
                View Details
              </Text>

    
            </View>
            
            <View style={styles.projectExpanded}>

            <Text style={styles.mealName}>
            Breakfast @ Bukit Batok
          </Text>

          <Text style={styles.date}>
            Date: 13/6 Tue
          </Text>

          <Text style={styles.dietType}>
            Diet Type: Vegetarian
          </Text>

          <Text style={styles.diningSetting}>
            Dining Setting: Hawker
          </Text>

          <Text style={styles.participantNumber}>
            Current no. of participants: 2/4
          </Text>
    
              <Text style={styles.clicktoview}>
                View Details
              </Text>

        </View>
              
              
            </View>
    
            <View style={styles.container}>
    
                
            {/* Go to Sports 1 */}
    
            <TouchableOpacity style={{
            backgroundColor: '#dea3e6',
            marginTop: 50,
            paddingVertical: 20,
            paddingHorizontal: 20,
            width: 310,
            borderRadius: 5,
            marginBottom: 30,
            alignItems: 'center'}} onPress={handleNextPage} >
            <Text> Finish </Text> 
          </TouchableOpacity>
                
            </View>
    
    
          </View>
            
          
        </ScrollView>
      );
  };
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    description:{
      fontFamily: 'Helvetica',
      marginTop:18,
      fontSize: 18,
      fontWeight: 200,
    },
  
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
  
    mealName:{
      fontSize: 25,
      textAlign: 'left',
      fontFamily: 'Helvetica',
      marginTop: 5,
      fontWeight: 800,
    },
  
    proficiency:{
      fontSize: 16,
      textAlign: 'left',
      fontFamily: 'Helvetica',
      marginTop: 30,
      fontWeight: 200,
    },
  
    date:{
      fontSize: 16,
      textAlign: 'left',
      fontFamily: 'Helvetica',
      marginTop: 5,
      fontWeight: 200,
  
    },
  
    time:{
      fontSize: 16,
      textAlign: 'left',
      fontFamily: 'Helvetica',
      marginTop: 5,
      fontWeight: 200,
  
    },
  
    participantNumber:{
      fontSize: 16,
      textAlign: 'left',
      fontFamily: 'Helvetica',
      marginTop: 5,
      fontWeight: 200,
  
    },

    dietType:{
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'Helvetica',
        marginTop: 5,
        fontWeight: 200,
    
      },

      diningSetting:{
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'Helvetica',
        marginTop: 5,
        fontWeight: 200,
    
      },
    
    
  
    clicktoview:{
      fontSize: 14,
      textAlign: 'right',
      fontFamily: 'Helvetica',
      marginTop: 40,
      marginBottom: -10,
    },
  
  });
  
  export default FoodFeedUpdated;