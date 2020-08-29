/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Home from './src/components/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ResetPassword from './src/screens/ResetPassword';
import SendEmail from './src/screens/SendEmail';

const App = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/resetpass" component={ResetPassword}/>
        <Route exact path="/sendemail" component={SendEmail}/>
      </Switch>
    </NativeRouter>
  );
};

export default App;
