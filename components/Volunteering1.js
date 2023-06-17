import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Volunteering1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volunteering 1</Text>
      
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

export default Volunteering1;