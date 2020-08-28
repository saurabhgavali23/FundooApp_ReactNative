import React from 'react';
import {View, StyleSheet} from 'react-native';

import SignIn from '../screens/SignIn';
import Header from '../screens/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <SignIn/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;
