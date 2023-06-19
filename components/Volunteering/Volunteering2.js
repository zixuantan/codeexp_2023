import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';

const Volunteering2 = ({ route,navigation }) => {

  const [selectedProject, setSelectedProject] = useState('');

  function handleGoBack(){
    navigation.goBack();
  };

  function handleProject(project){
    navigation.navigate('Volunteering3', {selectedProject:project});

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
          marginLeft: 20,
          }}>
            Projects for You</Text>
      </View>

      <View style={styles.container}>

        <View style={styles.projectsContainer}>

          <TouchableOpacity  onPress={() => handleProject('Project A')} style={styles.project}> 
            <Text style={styles.projectName}>Project A</Text>

            <Text style={styles.description}>Description (concise)</Text>

            <Text style={styles.more}>Click to view</Text>

              
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleProject('Project B')} style={styles.project}> 

            <Text style={styles.projectName}>Project B</Text>

            <Text style={styles.description}>Description (concise)</Text>

            <Text style={styles.more}>Click to view</Text>

          </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleProject('Project C')} style={styles.project}> 
          
            <Text style={styles.projectName}>Project C</Text>

            <Text style={styles.description}>Description (concise)</Text>

            <Text style={styles.more}>Click to view</Text>

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
  projectsContainer:{ //Container surrounding all project boxes
    marginTop: 50,
    flex: 1,
    // backgroundColor: 'white',
    height: 1500,
    width: 350,
    borderRadius: 10,

  },

  project:{
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 30,
  },

  projectName:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf:'flex-start',
    marginVertical: 10,
    textAlign: 'left',
    fontFamily: 'Helvetica',
  },

  description:{
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Helvetica',
    marginTop: 50,
  },

  more:{
    marginTop: 300,
    fontSize: 14,
    textAlign: 'right',
    fontFamily: 'Helvetica',
  },



});

export default Volunteering2;