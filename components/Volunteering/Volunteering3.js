import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Volunteering3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volunteering 3</Text>

      <Text> Project xxx </Text>

      <Button
          title="Join"
          onPress={() => navigation.navigate('Volunteering4')} // Launch Volunteering4
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

export default Volunteering3;