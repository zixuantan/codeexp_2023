import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const VolunReg3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VolunReg3 </Text>
      <Text style={styles.title}>Meeting Point</Text>
      <Text style={styles.title}>Dates</Text>
      <Text style={styles.title}>Pick your level of commitment</Text>


      <Button
          title="Submit"
          onPress={() => navigation.navigate('VolunReg4')} // Launch VolunReg4
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

export default VolunReg3;