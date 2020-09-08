import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword';
import SendEmail from '../screens/SendEmail';
import CreateNote from '../screens/CreateNote';
import DrawerNavigation from './DrawerNavigation';
import { isLoggedIn } from '../config/config';

const stack = createStackNavigator();

const AppNavigation = () => {

  const [isAuthenticated, setIsAuthenticatd] = useState(false)

  useEffect(() => {
        setIsAuthenticatd(isLoggedIn())
  }, [])

  return (
      <NavigationContainer>
        <stack.Navigator initialRouteName={ isAuthenticated ? 'drawer' : 'signIn'}>
          <stack.Screen options={{headerShown: false}} name="signIn" component={SignIn} />
          <stack.Screen options={{headerShown: false}} name="signUp" component={SignUp} />
          <stack.Screen options={{headerShown: false}} name="resetPassword" component={ResetPassword} />
          <stack.Screen options={{headerShown: false}} name="sendEmail" component={SendEmail} />
          <stack.Screen options={{headerShown: false}} name="drawer" component={DrawerNavigation} />
          <stack.Screen options={{headerShown: false}} name="createNote" component={CreateNote} />
        </stack.Navigator>
      </NavigationContainer>
  );
};
export default AppNavigation;
