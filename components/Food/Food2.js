import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Food2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food 2</Text>
      <Button
          title="12/6 Mon"
          onPress={() => navigation.navigate('Food3')} // Launch Food 3
        />
        <Button
          title="13/6 Tue"
          onPress={() => navigation.navigate('Food3')} // Launch Food 3
        />
        <Button
          title="14/6 Wed"
          onPress={() => navigation.navigate('Food3')} // Launch Food 3
        />
        <Button
          title="15/6 Thur"
          onPress={() => navigation.navigate('Food3')} // Launch Food 3
        />
        <Button
          title="16/6 Fri"
          onPress={() => navigation.navigate('Food3')} // Launch Food 3
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

export default Food2;