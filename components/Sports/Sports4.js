import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Sports4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sports 4</Text>
      <Text> Date: </Text>
      <Text> Time: </Text>
      <Text> Current no. of participants: </Text>

      <Button
          title="Next"
          onPress={() => navigation.navigate('Sports5')} // Launch Sports 5
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

export default Sports4;