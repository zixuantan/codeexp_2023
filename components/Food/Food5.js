import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';
import { ImageBackground } from 'react-native-web';

const Food5 = ({ navigation }) => {

  function handleGoBack(){
    navigation.goBack();
  };

  return (
    <View>

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
          marginLeft: 55,
          }}>
            Join Group</Text>
        </View>

      <View style={styles.container}>
        <Image style={styles.image}
          source={{
            uri: "https://media.istockphoto.com/id/1095468748/vector/qr-code-abstract-vector-modern-bar-code-sample-for-smartphone-scanning-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=WDOzGqXL6sFE9DDiYs_xz_Pl6650jl8ilV7V68q69qg="
          }}
          />
        <Text style={styles.url}>
        t.me/+xkHFI3UOsN1jj
        </Text>

      
        <Text style={styles.info}>Screenshot this page or copy the</Text>
        <Text style={styles.info}>link above and join the Telegram group</Text>
        <Text style={styles.info}>to meet the other participants!</Text>

        <TouchableOpacity style={{
        backgroundColor: '#dea3e6',
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: 310,
        borderRadius: 5,
        marginTop: 90,
        alignItems: 'center'}} onPress={() => navigation.navigate('StartPage')} >
        <Text> Finish </Text> 
      </TouchableOpacity>
  
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    marginBottom: 16,
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 120,
    marginBottom:6,
  },
  url:{
    marginTop: 10,
    fontFamily: 'Helvetica', 
    fontWeight: 200,
    marginBottom: 20,
  },
  info:{
    marginTop: 2,
    fontFamily: 'Helvetica', 
    fontWeight: 200,
  },
});

export default Food5;