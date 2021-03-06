import React, { useState } from 'react'

import DashBoard from '../components/dashboard/DashBoard';
import NoteIcon from 'react-native-vector-icons/Entypo';
import Archive from 'react-native-vector-icons/Ionicons';
import ReminderIocn from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import Delete from 'react-native-vector-icons/AntDesign';
import Label from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CreateNewLabel from '../screens/create_new_label/CreateNewLabel'
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}) => {
  const [isReminderList, setIsReminderList] = useState(true)
  const [isArchive, setIsArchive] = useState(true)
  const [isDeleted, setIsDeleted] = useState(true)
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
                    isArchive: !isArchive,
                    isDeleted: !isDeleted
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
                      isArchive: !isArchive,
                      isDeleted: !isDeleted
                    })}>
                    Reminder
                  </Text>
                  </TouchableOpacity>
                ),
                drawerIcon: () => <ReminderIocn name="bell-o" size={18} />,
              }}
            />
            <Drawer.Screen
              name="createNewLabel"
              component={CreateNewLabel}
              options={{
                drawerLabel: () => (
                  <Text style={{fontSize: 18, textAlign: 'left'}}>
                    Create New Label
                  </Text>
                ),
                drawerIcon: () => <Label name="plus" size={20} />
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
                    isArchive: isArchive,
                    isDeleted: !isDeleted
                  })}>
                    Archive
                  </Text>
                  </TouchableOpacity>
                ),
                drawerIcon: () => <Archive name="archive-outline" size={20} />
              }}
            />
            <Drawer.Screen
              name="trash"
              component={DashBoard}
              options={{
                drawerLabel: () => (
                  <Text style={{fontSize: 18, textAlign: 'left'}}
                  onPress={()=> navigation.navigate('dashBoard',
                  { isReminderList: !isReminderList, 
                    isArchive: isArchive,
                    isDeleted: isDeleted
                  })}>
                    Trash
                  </Text>
                ),
                drawerIcon: () => <Delete name="delete" size={20} />
              }}
            />
          </Drawer.Navigator>
    )
}

export default DrawerNavigation