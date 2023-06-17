import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Volunteering1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volunteering 1</Text>
      <Text style={styles.title}>Enter your age</Text>
      <Text style={styles.title}>Pick the type of volunteering work</Text>
      <Text style={styles.title}>Pick your level of commitment</Text>
      <Text style={styles.title}>Have a community-based volunteering project and looking for volunteers for upcoming events? Reach out to us
</Text>
      <Button
          title="here"
          onPress={() => navigation.navigate('VolunReg1')} // Launch VolunReg1
        />

        <Button
          title="Next"
          onPress={() => navigation.navigate('Volunteering2')} // Launch Volunteering2
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

export default Volunteering1;