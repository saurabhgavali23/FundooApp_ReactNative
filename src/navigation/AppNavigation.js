import React, {useEffect, useMemo, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/sign_in/SignIn';
import SignUp from '../screens/sign_up/SignUp';
import ResetPassword from '../screens/reset_password/ResetPassword';
import SendEmail from '../screens/send_email/SendEmail';
import CreateNote from '../screens/create_note/CreateNote';
import DrawerNavigation from './DrawerNavigation';
import Collaborator from '../screens/collaborator/Collaborator';
import { AuthContext } from '../components/context';
import AsyncStorage from '@react-native-community/async-storage';
import Splash from '../screens/splash_screen/Splash';

const stack = createStackNavigator();

const AppNavigation = () => {

  const initialLoginState = {
    isLoading: true,
    userToken: null
  }

  const loginReducer = (prevState, action)=>{
    switch (action.type) {
      case 'LOGIN':
        return{
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return{
          ...prevState,
          userToken: null,
          isLoading: false,
        };
      case 'RETRIVE_TOKEN':
        return{
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContex = useMemo(()=>({
    signIn: (userToken) => {
      dispatch({ type: 'LOGIN', token: userToken})
    },
    signOut: async () => {
      try{
        await AsyncStorage.clear()
      }catch(err){
         console.warn(err);
      }
      dispatch({ type: 'LOGOUT'})
    },
  }), [])

  useEffect(() => {
    setTimeout( async () => {
     let userToken = null;
     try{
       userToken = await AsyncStorage.getItem('userToken')
     }catch(err){
        console.warn(err);
     }
     dispatch({ type: 'RETRIVE_TOKEN', token: userToken})
    }, 1000);
  }, [])

  if (loginState.isLoading) {
    return (
      <Splash/>
    );
  }

  return (
    <AuthContext.Provider value={authContex}>
      <NavigationContainer>
          {loginState.userToken === null ? (
            <stack.Navigator>
            <stack.Screen options={{headerShown: false}} name="signIn" component={SignIn} />
            <stack.Screen options={{headerShown: false}} name="signUp" component={SignUp} />
            <stack.Screen options={{headerShown: false}} name="resetPassword" component={ResetPassword} />
            <stack.Screen options={{headerShown: false}} name="sendEmail" component={SendEmail} />
            </stack.Navigator>
          ): (
          <stack.Navigator>
          <stack.Screen options={{headerShown: false}} name="drawer" component={DrawerNavigation} />
          <stack.Screen options={{headerShown: false}} name="createNote" component={CreateNote} />
          <stack.Screen options={{headerShown: false}} name="collaborator" component={Collaborator} />
          </stack.Navigator>
          )} 
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default AppNavigation;
