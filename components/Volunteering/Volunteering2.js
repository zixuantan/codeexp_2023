import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Volunteering2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volunteering 2</Text>
      
      <Button
          title="Project A"
          onPress={() => navigation.navigate('Volunteering3')} // Launch Volunteering3
        />

        <Button
          title="Project B"
          onPress={() => navigation.navigate('Volunteering3')} // Launch Volunteering3
        />

        <Button
          title="Project C"
          onPress={() => navigation.navigate('Volunteering3')} // Launch Volunteering3
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

export default Volunteering2;