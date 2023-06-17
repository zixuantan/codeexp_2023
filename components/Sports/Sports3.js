import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Sports3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sports 3</Text>
      <Button
          title="Next"
          onPress={() => navigation.navigate('Sports4')} // Launch Sports 4
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

export default Sports3;