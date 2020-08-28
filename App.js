/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Home from './src/components/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

const App = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp}/>
      </Switch>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    
  },
});

export default App;
