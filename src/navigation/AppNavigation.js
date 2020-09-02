import React, {useState, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashBoard from '../components/DashBoard';
import NoteIcon from 'react-native-vector-icons/Entypo';
import ReminderIocn from 'react-native-vector-icons/FontAwesome';
import Reminder from '../screens/Reminder';
import {AuthContext} from '../config/config';
import {Text} from 'react-native';
import CreateNewLable from '../screens/CreateNewLable';
import StackNavigation from './StackNavigation';

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
          <StackNavigation/>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default AppNavigation;
