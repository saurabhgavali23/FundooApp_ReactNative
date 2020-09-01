import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const DashBoard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FundooApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 25,
  },
});

export default DashBoard;
