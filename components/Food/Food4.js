import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Food4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food 4</Text>
      <Text>Date:</Text>
      <Text>Dietary Type: </Text>
      <Text>Dining Setting: </Text>
      <Text>Current no. of participants: </Text>

      <Button
          title="Join"
          onPress={() => navigation.navigate('Food5')} // Launch Food 5
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

export default Food4;