import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const Food1 = ({ navigation }) => {

  const [selectedMeal, setSelectedMeal] = useState('');

  function handleGoBack(){
    navigation.goBack();
  };

  function handleMeal(meal){
    navigation.navigate('Food2', {selectedMeal:meal});

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
          marginLeft: 40,
          }}>
            Food Buddies</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.description}>What type of Jio are you looking for?</Text>

        <View style={styles.mealContainer}>

          <TouchableOpacity  onPress={() => handleMeal('Breakfast 🍳')}> 
              <Text style={styles.meal}>
              Breakfast 🍳
              </Text>
            </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleMeal('Brunch 🥂')}> 
            <Text style={styles.meal}>
            Brunch 🥂
            </Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleMeal('Lunch 🥪')}> 
              <Text style={styles.meal}>
              Lunch 🥪
              </Text>
            </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleMeal('Dinner 🍝')}> 
            <Text style={styles.meal}>
            Dinner 🍝
            </Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleMeal('Supper 🍟')}> 
            <Text style={styles.meal}>
            Supper 🍟
            </Text>
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
    marginTop:20,
    fontSize: 15,
    fontWeight: 200,
  },

  mealContainer:{ //Container surrounding all meal boxes
    marginTop: 80,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  meal:{
    backgroundColor: '#d6f5c1',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 10,
    width: 310,
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 200,
  },

  
  






});

export default Food1;