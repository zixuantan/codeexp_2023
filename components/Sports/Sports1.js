import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Sports1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sports 1</Text>
      <Button
          title="Next"
          onPress={() => navigation.navigate('Sports2')} // Launch Sports 2
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

export default Sports1;