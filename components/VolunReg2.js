import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const VolunReg2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VolunReg2 </Text>
      <Text style={styles.title}>Project Description</Text>
      <Text style={styles.title}>Upcoming Activities</Text>

      <Button
          title="Next"
          onPress={() => navigation.navigate('VolunReg3')} // Launch VolunReg3
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

export default VolunReg2;