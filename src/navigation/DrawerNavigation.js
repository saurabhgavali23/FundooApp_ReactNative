import React, { useState } from 'react'

import DashBoard from '../components/dashboard/DashBoard';
import NoteIcon from 'react-native-vector-icons/Entypo';
import Archive from 'react-native-vector-icons/Ionicons';
import ReminderIocn from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import CreateNewLable from '../screens/create_new_label/CreateNewLable'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}) => {
  const [isReminderList, setIsReminderList] = useState(true)
  const [isArchive, setIsArchive] = useState(true)
  
    return (
        <Drawer.Navigator initialRouteName="dashBoard">
            <Drawer.Screen
              name="dashBoard"
              component={DashBoard}
              options={{
                drawerLabel: () => (
                  <TouchableOpacity>
                  <Text style={{fontSize: 18, textAlign: 'left'}}
                  onPress={()=> navigation.navigate('dashBoard',
                  { isReminderList: !isReminderList, 
                    isArchive: !isArchive
                  })}>
                    Notes
                  </Text>
                  </TouchableOpacity>
                ),
                drawerIcon: () => <NoteIcon name="light-bulb" size={18} />,
              }}
            />
            <Drawer.Screen
              name="reminder"
              component={DashBoard}
              options={{
                drawerLabel: () => (
                  <TouchableOpacity>
                  <Text style={{fontSize: 18, textAlign: 'left'}}
                    onPress={()=> navigation.navigate('dashBoard',
                    { isReminderList: isReminderList, 
                      isArchive: !isArchive
                    })}>
                    Reminder
                  </Text>
                  </TouchableOpacity>
                ),
                drawerIcon: () => <ReminderIocn name="bell-o" size={18} />,
              }}
            />
            <Drawer.Screen
              name="archive"
              component={DashBoard}
              options={{
                drawerLabel: () => (
                  <TouchableOpacity>
                  <Text style={{fontSize: 18, textAlign: 'left'}}
                  onPress={()=> navigation.navigate('dashBoard',
                  { isReminderList: !isReminderList, 
                    isArchive: isArchive
                  })}>
                    Archive
                  </Text>
                  </TouchableOpacity>
                ),
                drawerIcon: () => <Archive name="archive" size={20} />
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