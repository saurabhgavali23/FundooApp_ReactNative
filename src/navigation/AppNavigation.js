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
          <stack.Navigator initialRouteName={mainPage} headerMode="none">
            <stack.Screen name="signIn" component={SignIn} />
            <stack.Screen name="signUp" component={SignUp} />
            <stack.Screen name="resetPassword" component={ResetPassword} />
            <stack.Screen name="sendEmail" component={SendEmail} />
            <stack.Screen name="drawer" component={DrawerNavigation} />
            <stack.Screen name="createNote" component={CreateNote} />
          </stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default AppNavigation;
