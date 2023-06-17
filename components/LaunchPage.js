import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LaunchPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open Jio</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('StartPage')} // Login Button
      />
      <Button
        title="Register new user"
        onPress={() => navigation.navigate('Registration1')} // Register new user Button
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

export default LaunchPage;