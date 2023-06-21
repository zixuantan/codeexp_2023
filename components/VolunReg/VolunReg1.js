import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const VolunReg1 = ({ navigation }) => {

  function handleGoBack(){
    navigation.goBack();
  };

  const [projectName_projreg, setProjectName_projreg] = useState('');
  const [contactPerson_projreg, setContactPerson_projreg] = useState('');
  const [contactNum_projreg, setContactNum_projreg] = useState('');
  const [selectedCategory_projreg, setSelectedCategory_projreg] = useState('1');
  const [projectDescription_projreg, setProjectDescription_projreg] = useState('');
  const [upcomingActivities_projreg, setUpcomingActivities_projreg] = useState('');
  const [meetingPoint_projreg, setMeetingPoint_projreg] = useState('');
  const [selectedCommitmentLevel_projreg, setSelectedCommitmentLevel_projreg] = useState('1');


  function handleProjectName_projreg(text){
    setProjectName_projreg(text)
  };

  function handleContactPerson_projreg(text){
    setContactPerson_projreg(text)
  };

  function handleContactNum_projreg(text){
    setContactNum_projreg(text)
  };

  function handleProjectDescription_projreg(text){
    setProjectDescription_projreg(text)
  };

  function handleUpcomingActivities_projreg(text){
    setUpcomingActivities_projreg(text)
  };

  function handleMeetingPoint_projreg(text){
    setMeetingPoint_projreg(text)
  };

  function handleSelectedCommitmentLevel_projreg(value){
    setSelectedCommitmentLevel_projreg(value)
  };

  function handleSelectedCategory_projreg(value){
    setSelectedCategory_projreg(value)
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
          marginLeft: 55,}}>
            Submission </Text>
      </View>

      <View style={styles.container}>

        <Text style={styles.description}>We're going to need some of your information.</Text>

        <View style={styles.inputContainer}>

          <TextInput 
          value={projectName_projreg} 
          style={styles.textInput} 
          onChangeText={handleProjectName_projreg} 
          placeholder="Project Name" >
          </TextInput>

          <TextInput 
          value={contactPerson_projreg} 
          style={styles.textInput} 
          onChangeText={handleContactPerson_projreg} 
          placeholder="Contact person" >
          </TextInput>

          <TextInput 
          value={contactNum_projreg} 
          style={styles.textInput} 
          onChangeText={handleContactNum_projreg} 
          placeholder="Contact number" >
          </TextInput>

          <Text style={{marginBottom:19, fontFamily: 'Helvetica', fontSize: 16, fontWeight: 200}}>Pick the category your project falls under</Text>

          <Picker
            style={{marginTop: -15,}}
            selectedValue={selectedCommitmentLevel_projreg}
            onValueChange={handleSelectedCommitmentLevel_projreg}>
            <Picker.Item label="Less fortunate" value="1" />
            <Picker.Item label="Children" value="2" />
            <Picker.Item label="Elderly" value="3" />
            <Picker.Item label="Animals" value="4" />
          </Picker>

          <TextInput 
          value={projectDescription_projreg} 
          style={styles.textInput_Long} 
          multiline
          numberOfLines={5}
          onChangeText={handleProjectDescription_projreg} 
          placeholder="Project Description" >
          </TextInput>

          <TextInput 
          value={upcomingActivities_projreg} 
          style={styles.textInput_Long} 
          multiline
          numberOfLines={5}
          onChangeText={handleUpcomingActivities_projreg} 
          placeholder="Upcoming Activites" >
          </TextInput>

          <TextInput 
          value={meetingPoint_projreg} 
          style={styles.textInput} 
          onChangeText={handleMeetingPoint_projreg} 
          placeholder="Meeting point" >
          </TextInput>

          <Text style={{marginBottom:19, fontFamily: 'Helvetica', fontSize: 16, fontWeight: 200}}>Pick the level of commitment required</Text>

          <Picker
            style={{marginTop: -15, marginBottom: -30}}
            selectedValue={selectedCommitmentLevel_projreg}
            onValueChange={handleSelectedCommitmentLevel_projreg}>
            <Picker.Item label="ADHOC" value="1" />
            <Picker.Item label="< 6 days" value="2" />
            <Picker.Item label="> 1 week" value="3" />
            <Picker.Item label="> 1 month" value="4" />
          </Picker>

          <TouchableOpacity style={{
            backgroundColor: '#dea3e6',
            paddingVertical: 20,
            paddingHorizontal: 20,
            width: 310,
            borderRadius: 5,
            marginTop: 60,
            marginBottom: 30,
            alignItems: 'center'}} onPress={() => navigation.navigate('VolunReg3')} >
            <Text> Submit </Text> 
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
    marginTop:30,
    fontSize: 15,
    fontWeight: 200,
  },

  inputContainer:{ // Container surrounding all input boxes
    marginTop: 70,
    marginBottom: 30  
  },

  textInput:{ // Imagine each input box being a container
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    width: 310,
    marginBottom: 60,
  },

  textInput_Long:{ // Imagine each input box being a container
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 190,
    borderRadius: 10,
    width: 310,
    marginBottom: 60,
    textAlignVertical: 'top'
  },



});

export default VolunReg1;