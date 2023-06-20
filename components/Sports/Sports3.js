import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const Sports3 = ({ route, navigation }) => {

  const { selectedDay, selectedSport, selectedProficiency } = route.params;
  
  const [selectedTiming, setSelectedTiming] = useState('7AM');

  function handleGoBack(){
    navigation.goBack();
  };

  function handleNextPage(){
    navigation.navigate('Sports4', {selectedTiming, selectedDay, selectedSport, selectedProficiency});
  };


  return (
    <View>

      <View style={{flexDirection: 'row',marginTop: 70, textAlign: 'center'}}> 
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
          marginLeft: 70,
          }}>
            {selectedDay}</Text>
      </View>

      <View style={styles.container}>

        <Text style={{marginBottom: 20, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200, marginLeft: 20}}>Select a Timing that is suitable for you.</Text>
      
      </View>

        <Picker style={styles.picker}
          selectedValue={selectedTiming}
          onValueChange={(itemValue) => setSelectedTiming(itemValue)}
        >
          <Picker.Item label="7AM" value="7AM" />
          <Picker.Item label="9AM" value="9AM" />
          <Picker.Item label="11AM" value="11AM" />
          <Picker.Item label="1PM" value="1PM" />
          <Picker.Item label="3PM" value="3PM" />
          <Picker.Item label="5PM" value="5PM" />
          <Picker.Item label="7PM" value="7PM" />
          <Picker.Item label="9PM" value="9PM" />
          <Picker.Item label="11PM" value="11PM" />
          <Picker.Item label="1AM" value="1AM" />
          <Picker.Item label="3AM" value="3AM" />
        </Picker>

        {/* Launch Sports 4 */}

        <View style={styles.container}>



        <TouchableOpacity style={{
        backgroundColor: '#dea3e6',
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: 310,
        borderRadius: 5,
        alignItems: 'center'
        }} onPress={handleNextPage} > 
        <Text> Next </Text> 
      </TouchableOpacity>


      </View>

      
      
      
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});

export default Sports3;