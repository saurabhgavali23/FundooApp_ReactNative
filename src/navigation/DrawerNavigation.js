import React from 'react'

import DashBoard from '../components/dashboard/DashBoard';
import NoteIcon from 'react-native-vector-icons/Entypo';
import ReminderIocn from 'react-native-vector-icons/FontAwesome';
import Reminder from '../screens/reminder/Reminder';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import CreateNewLable from '../screens/create_new_label/CreateNewLable'
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
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
    )
}

export default DrawerNavigation