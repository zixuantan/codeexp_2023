import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Volunteering1 = ({ navigation }) => {

  const [age, setAge] = useState('');
  const [selectedWorktype, setSelectedWorktype] = useState('1')
  const [selectedCommitment, setSelectedCommitment] = useState('1')




  function handleGoBack(){
    navigation.goBack();
  };

  function handleAge(text){
    setAge(text)
  };

  function handleworktype(value){
    setSelectedWorktype(value)
  };

  function handlecommitment(value){
    setSelectedCommitment(value)
  };



  return (
    <ScrollView>

      <View style={{flexDirection: 'row',marginTop: 70,}}> 
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
          marginLeft: 40,}}>
            Volunteering </Text>
      </View>

      <View style={styles.container}>


        <View style={styles.inputContainer}>

          {/* Age */}

          <Text style={{marginBottom:19, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Enter your age</Text>

          <TextInput 
          value={age} 
          style={styles.textInput} 
          onChangeText={handleAge} 
          placeholder="21" >
          </TextInput>

          <Text style={{marginBottom:19, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Pick the type of volunteering work</Text>

          <Picker
            style={{marginTop: -15,}}
            selectedValue={selectedWorktype}
            onValueChange={handleworktype}>
            <Picker.Item label="Less Fortunate" value="1" />
            <Picker.Item label="Children" value="2" />
            <Picker.Item label="Elderly" value="3" />
            <Picker.Item label="Animals" value="4" />
          </Picker>

          <Text style={{marginTop: 5, marginBottom:19, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Pick your level of commitment</Text>

          <Picker
            style={{marginTop: -15,}}
            selectedValue={selectedCommitment}
            onValueChange={handlecommitment}>
            <Picker.Item label="< 6 days" value="1" />
            <Picker.Item label="> 1 week" value="2" />
            <Picker.Item label="> 1 month" value="3" />
          </Picker>

          <Text style={{marginTop: 20, marginBottom:5, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>Have a community-based volunteering </Text>
          <Text style={{marginTop: 1, marginBottom:5, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>project and looking for volunteers for </Text>
          <Text style={{marginTop: 1, marginBottom:5, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>upcoming events? Reach out to us</Text>
          {/* <Text style={{marginTop: 1, marginBottom:90, fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}> us </Text> */}

          <TouchableOpacity style={{
            backgroundColor: '#e6e1e1',
            marginBottom: 30,
            paddingVertical: 5,
            width: 50,
            height: 30,
            borderRadius: 5,
            alignItems: 'center'}} onPress={() => navigation.navigate('VolunReg1')}>
            <Text style={{fontFamily: 'Helvetica', fontSize: 18, fontWeight: 200}}>
              here
            </Text>


          </TouchableOpacity>

          {/* Go to Volunteering 2 */}

          <TouchableOpacity style={{
            backgroundColor: '#dea3e6',
            paddingVertical: 20,
            paddingHorizontal: 20,
            width: 310,
            borderRadius: 5,
            alignItems: 'center'}} onPress={() => navigation.navigate('Volunteering2')} >
            <Text> Next </Text> 
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
  inputContainer:{ // Container surrounding all 3 input boxes
    marginTop: 100,
    marginBottom: 30  
  },

  textInput:{ // Imagine each input box being a container
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    width: 310,
    marginBottom: 40,
  },
});

export default Volunteering1;