import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FundooApp</Text>
      <ActivityIndicator size="large" color="#007aff" />
    </View>
  );
};

export default Splash;
