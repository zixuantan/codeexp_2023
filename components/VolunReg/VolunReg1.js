import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const VolunReg1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VolunReg1 </Text>
      <Text style={styles.title}>Project Name</Text>
      <Text style={styles.title}>Contact person</Text>
      <Text style={styles.title}>Contact Number</Text>

      <Button
          title="Next"
          onPress={() => navigation.navigate('VolunReg2')} // Launch VolunReg2
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

export default VolunReg1;