import { useUsernameState } from "./usernameState";
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';


  
export const retrieveUserInfo = async (email) => {
    try {
      const q = query(collection(db, "users"), where("email_reg", "==", email));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        console.log("No matching documents found.");
        return null; // Return null if no matching document is found
      }
  
      const userInfo = [];
      querySnapshot.forEach((doc) => {
        const { email_reg, selectedNeighbourhood } = doc.data();
        console.log(`User ID: ${doc.id}`);
        console.log(`Email: ${email_reg}`);
        console.log(`Selected Neighborhood: ${selectedNeighbourhood}`);
  
        userInfo.push({ email: email_reg, neighbourhood: selectedNeighbourhood });
      });
  
      return userInfo; // Return the userInfo object
    } catch (error) {
      console.error("Error retrieving user information: ", error);
      throw error;
    }
  };
  

 