import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/sign_in/SignIn';
import SignUp from '../screens/sign_up/SignUp';
import ResetPassword from '../screens/reset_password/ResetPassword';
import SendEmail from '../screens/send_email/SendEmail';
import CreateNote from '../screens/create_note/CreateNote';
import DrawerNavigation from './DrawerNavigation';
import { isLoggedIn } from '../config/configuration';
import Collaborator from '../screens/collaborator/Collaborator';

const stack = createStackNavigator();

const AppNavigation = () => {

  const [isAuthenticated, setIsAuthenticatd] = useState(true)

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
          <stack.Screen options={{headerShown: false}} name="collaborator" component={Collaborator} />
        </stack.Navigator>
      </NavigationContainer>
  );
};
export default AppNavigation;
