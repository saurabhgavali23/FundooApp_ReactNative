import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword';
import SendEmail from '../screens/SendEmail';
import DashBoard from '../components/DashBoard';
import AsyncStorage from '@react-native-community/async-storage';

const stack = createStackNavigator();

const AppNavigation = () => {

const mainPage = AsyncStorage.getItem('userId') ? 'dashboard': 'signin';

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName={mainPage}>
        <stack.Screen options={{headerShown: false}} name="signin" component={SignIn}/>
        <stack.Screen options={{headerShown: false}} name="signup" component={SignUp}/>
        <stack.Screen options={{headerShown: false}} name="resetpass" component={ResetPassword}/>
        <stack.Screen options={{headerShown: false}} name="sendemail" component={SendEmail}/>
        <stack.Screen options={{headerShown: false}} name="dashboard" component={DashBoard}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
