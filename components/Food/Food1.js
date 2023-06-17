import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Food1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food 1</Text>
      <Button
          title="Breakfast"
          onPress={() => navigation.navigate('Food2')} // Launch Food 2
        />
        <Button
          title="Brunch"
          onPress={() => navigation.navigate('Food2')} // Launch Food 2
        />
        <Button
          title="Lunch"
          onPress={() => navigation.navigate('Food2')} // Launch Food 2
        />
        <Button
          title="Dinner"
          onPress={() => navigation.navigate('Food2')} // Launch Food 2
        />
        <Button
          title="Supper"
          onPress={() => navigation.navigate('Food2')} // Launch Food 2
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

export default Food1;