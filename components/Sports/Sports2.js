import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Sports2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sports 2</Text>
      <Button
          title="Button 1"
          onPress={() => navigation.navigate('Sports3')} // Launch Sports 3
        />
        <Button
          title="Button 2"
          onPress={() => navigation.navigate('Sports3')} // Launch Sports 3
        />
        <Button
          title="Button 3"
          onPress={() => navigation.navigate('Sports3')} // Launch Sports 3
        />
        <Button
          title="Button 4"
          onPress={() => navigation.navigate('Sports3')} // Launch Sports 3
        />
        <Button
          title="Button 5"
          onPress={() => navigation.navigate('Sports3')} // Launch Sports 3
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

export default Sports2