import * as React from 'react';
import { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchPage from './components/LaunchPage';
import StartPage from './components/StartPage';
import Registration1 from './components/Registration/Registration1';
import Registration2 from './components/Registration/Registration2';
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
import Volunteering1 from './components/Volunteering/Volunteering1';
import Volunteering2 from './components/Volunteering/Volunteering2';
import Volunteering3 from './components/Volunteering/Volunteering3';
import Volunteering4 from './components/Volunteering/Volunteering4';
import VolunReg1 from './components/VolunReg/VolunReg1';
import VolunReg2 from './components/VolunReg/VolunReg2';
import VolunReg3 from './components/VolunReg/VolunReg3';
import SportsFeed from './components/Sports/SportsFeed';
import SportsFeedUpdated from './components/Sports/SportsFeedUpdated'; 
import { UsernameProvider } from './components/UsernameContext';

const Stack = createStackNavigator();

export default function App (){
  return (
    <UsernameProvider>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch Page">
        <Stack.Screen name="LaunchPage" options={{headerShown: false}} component={LaunchPage} />
        <Stack.Screen name="Registration1" options={{headerShown: false}} component={Registration1} />
        <Stack.Screen name="Registration2" options={{headerShown: false}} component={Registration2} />
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
        <Stack.Screen name="Volunteering2" options={{headerShown: false}} component={Volunteering2} />
        <Stack.Screen name="Volunteering3" options={{headerShown: false}} component={Volunteering3} />
        <Stack.Screen name="Volunteering4" options={{headerShown: false}} component={Volunteering4} />
        <Stack.Screen name="VolunReg1" options={{headerShown: false}} component={VolunReg1} />
        <Stack.Screen name="VolunReg2" options={{headerShown: false}} component={VolunReg2} />
        <Stack.Screen name="VolunReg3" options={{headerShown: false}} component={VolunReg3} />
        <Stack.Screen name="SportsFeed" options={{headerShown: false}} component={SportsFeed} />
        <Stack.Screen name="SportsFeedUpdated" options={{headerShown: false}} component={SportsFeedUpdated} />













      </Stack.Navigator>
    </NavigationContainer>
    </UsernameProvider>

  );
};


