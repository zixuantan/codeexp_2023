import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Food3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food 3</Text>
      <Text>Select your dietary type</Text>
      <Text>Select your desired dining setting </Text>
      <Button
          title="Next"
          onPress={() => navigation.navigate('Food4')} // Launch Food 4
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

export default Food3;