import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Food5 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food 5</Text>
      <Button
          title="Finish"
          onPress={() => navigation.navigate('StartPage')} // Go back to Start Page
        />
      <Button
          title="Back arrow"
          onPress={() => navigation.goBack()} // Go back to previous page
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

export default Food5;