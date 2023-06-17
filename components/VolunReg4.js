import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const VolunReg4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VolunReg4 </Text>
      <Text style={styles.title}>Thank You</Text>
      <Text style={styles.title}>We'll be in touch!</Text>

      <Button
          title="Finish"
          onPress={() => navigation.navigate('StartPage')} // Go back to Volunteering 1
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

export default VolunReg4;