import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Registration3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>reg 3</Text>
      <Button
        title="Finish"
        onPress={() => navigation.navigate('LaunchPage')} 
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

export default Registration3;