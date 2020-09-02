import React, {useState, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../config/config';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword';
import SendEmail from '../screens/SendEmail';
import CreateNote from '../screens/CreateNote';
import DrawerNavigation from './DrawerNavigation';

const stack = createStackNavigator();

const AppNavigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const authContext = useMemo(() => {
    return {
      signOut: () => {
        setIsAuthenticated(false);
      },
    };
  }, []);

  var mainPage = isAuthenticated? 'drawer' : 'signIn'

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
          <stack.Navigator initialRouteName={mainPage} >
            <stack.Screen options={{headerShown: false}} name="signIn" component={SignIn} />
            <stack.Screen options={{headerShown: false}} name="signUp" component={SignUp} />
            <stack.Screen options={{headerShown: false}} name="resetPassword" component={ResetPassword} />
            <stack.Screen options={{headerShown: false}} name="sendEmail" component={SendEmail} />
            <stack.Screen options={{headerShown: false}} name="drawer" component={DrawerNavigation} />
            <stack.Screen name="createNote" component={CreateNote} options={{headerTitle:'Dashboard'}} />
          </stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default AppNavigation;
