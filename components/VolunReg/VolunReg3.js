import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const VolunReg3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Text style={{fontSize:64, fontFamily: 'Trebuchet MS'}}>Thank You</Text>
      <Text style={{fontSize: 24, fontWeight: 200, marginTop: 10}}>We'll be in touch!</Text>

      {/* Go back to Volunteering 1 */}

      <TouchableOpacity style={{
        backgroundColor: '#dea3e6',
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: 310,
        borderRadius: 5,
        marginTop: 300,
        alignItems: 'center'}} onPress={() => navigation.navigate('Volunteering1')} >
        <Text> Finish </Text> 
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 320,
  },
  title: {
    fontSize: 32,
  },
});

export default VolunReg3;