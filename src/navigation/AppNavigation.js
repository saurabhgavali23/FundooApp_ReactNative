import React, {useState, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword';
import SendEmail from '../screens/SendEmail';
import DashBoard from '../components/DashBoard';
import NoteIcon from 'react-native-vector-icons/Entypo';
import ReminderIocn from 'react-native-vector-icons/FontAwesome';
import Reminder from '../screens/Reminder';
import {AuthContext} from '../config/config';
import {Text} from 'react-native';
import CreateNewLable from '../screens/CreateNewLable';


const stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const authContext = useMemo(() => {
    return {
      signOut: () => {
        setIsAuthenticated(false);
      },
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isAuthenticated ? (
          <Drawer.Navigator initialRouteName="dashBoard">
            <Drawer.Screen
              name="dashBoard"
              component={DashBoard}
              options={{
                drawerLabel: () => (
                  <Text style={{fontSize: 18, textAlign: 'left'}}>Notes</Text>
                ),
                drawerIcon: () => <NoteIcon name="light-bulb" size={18} />,
              }}
            />
            <Drawer.Screen
              name="reminder"
              component={Reminder}
              options={{
                drawerLabel: () => (
                  <Text style={{fontSize: 18, textAlign: 'left'}}>
                    Reminder
                  </Text>
                ),
                drawerIcon: () => <ReminderIocn name="bell-o" size={18} />,
              }}
            />
            <Drawer.Screen
              name="createNewLable"
              component={CreateNewLable}
              options={{
                drawerLabel: () => (
                  <Text style={{fontSize: 18, textAlign: 'left'}}>
                    Create New Lable
                  </Text>
                ),
                drawerIcon: () => <NoteIcon name="plus" size={20} />
              }}
            />
          </Drawer.Navigator>
        ) : (
          <stack.Navigator initialRouteName="signIn">
            <stack.Screen
              options={{headerShown: false}}
              name="signIn"
              component={SignIn}
            />
            <stack.Screen
              options={{headerShown: false}}
              name="signUp"
              component={SignUp}
            />
            <stack.Screen
              options={{headerShown: false}}
              name="resetPassword"
              component={ResetPassword}
            />
            <stack.Screen
              options={{headerShown: false}}
              name="sendEmail"
              component={SendEmail}
            />
          </stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default AppNavigation;
