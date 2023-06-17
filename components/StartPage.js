import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StartPage = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>This is the start page</Text>
        <Button
          title="Sports & Games"
          onPress={() => navigation.navigate('Sports1')} // Launch Sports 1
        />
        <Button
          title="Food Buddies"
          onPress={() => navigation.navigate('Food1')} // Launch Sports 1
        />
        <Button
          title="Volunteering"
          onPress={() => navigation.navigate('Volunteering1')} // Launch Volunteering 1
        />
        <Button
          title="Sign Out"
          onPress={() => navigation.goBack()} // Go back to Launch Page
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
  
  export default StartPage;