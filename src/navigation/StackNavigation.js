import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword';
import SendEmail from '../screens/SendEmail';

const stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <stack.Navigator initialRouteName="signIn" headerMode="none">
      <stack.Screen name="signIn" component={SignIn} />
      <stack.Screen name="signUp" component={SignUp} />
      <stack.Screen name="resetPassword" component={ResetPassword} />
      <stack.Screen name="sendEmail" component={SendEmail} />
    </stack.Navigator>
  );
};

export default StackNavigation;
