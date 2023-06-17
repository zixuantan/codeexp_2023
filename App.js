import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchPage from './components/LaunchPage';
import StartPage from './components/StartPage';
import Registration1 from './components/Registration1';
import Registration2 from './components/Registration2';
import Registration3 from './components/Registration3';
import Sports1 from './components/Sports/Sports1';
import Sports2 from './components/Sports/Sports2';
import Sports3 from './components/Sports/Sports3';
import Sports4 from './components/Sports/Sports4';
import Sports5 from './components/Sports/Sports5';
import Food1 from './components/Food/Food1';
import Food2 from './components/Food/Food2';
import Food3 from './components/Food/Food3';
import Food4 from './components/Food/Food4';
import Food5 from './components/Food/Food5';
import Volunteering1 from './components/Volunteering1';

const Stack = createStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch Page">
        <Stack.Screen name="LaunchPage" options={{headerShown: false}} component={LaunchPage} />
        <Stack.Screen name="Registration1" options={{headerShown: false}} component={Registration1} />
        <Stack.Screen name="Registration2" options={{headerShown: false}} component={Registration2} />
        <Stack.Screen name="Registration3" options={{headerShown: false}} component={Registration3} />
        <Stack.Screen name="StartPage" options={{headerShown: false}} component={StartPage} />
        <Stack.Screen name="Sports1" options={{headerShown: false}} component={Sports1} />
        <Stack.Screen name="Sports2" options={{headerShown: false}} component={Sports2} />
        <Stack.Screen name="Sports3" options={{headerShown: false}} component={Sports3} />
        <Stack.Screen name="Sports4" options={{headerShown: false}} component={Sports4} />
        <Stack.Screen name="Sports5" options={{headerShown: false}} component={Sports5} />
        <Stack.Screen name="Food1" options={{headerShown: false}} component={Food1} />
        <Stack.Screen name="Food2" options={{headerShown: false}} component={Food2} />
        <Stack.Screen name="Food3" options={{headerShown: false}} component={Food3} />
        <Stack.Screen name="Food4" options={{headerShown: false}} component={Food4} />
        <Stack.Screen name="Food5" options={{headerShown: false}} component={Food5} />


        <Stack.Screen name="Volunteering1" options={{headerShown: false}} component={Volunteering1} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};


