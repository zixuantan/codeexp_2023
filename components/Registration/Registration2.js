import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Registration2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Reg 2</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Registration3')} 
      />
      <Button
        title="Back"
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
});

export default Registration2

