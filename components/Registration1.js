import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Registration1 = ({ navigation }) => {
  return (
    <View>
      <Text>This is Reg 1</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Registration2')} 
      />
      <Button
        title="Back"
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

export default Registration1;