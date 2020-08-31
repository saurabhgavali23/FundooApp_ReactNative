import React,{useState, useMemo, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword';
import SendEmail from '../screens/SendEmail';
import DashBoard from '../components/DashBoard';
import Icon from 'react-native-vector-icons/Ionicons';
import Notes from '../screens/Notes';
import Reminder from '../screens/Reminder';
import { AuthContext } from '../config/config';

const stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = () => {  

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const authContext = useMemo(() => {
    return{
      signOut: () => {
        setIsAuthenticated(false)
      }
    }
  }, [])

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {isAuthenticated ? (
        <Drawer.Navigator initialRouteName='dashBoard'>
        <Drawer.Screen name="dashBoard" component={DashBoardScreen}/>
        <Drawer.Screen name="note" component={Notes}/>
        <Drawer.Screen name="reminder" component={Reminder}/>
      </Drawer.Navigator>
      ):(
      <stack.Navigator initialRouteName='signIn'>
        <stack.Screen options={{headerShown: false}} name="signIn" component={SignIn}/>
        <stack.Screen options={{headerShown: false}} name="signUp" component={SignUp}/>
        <stack.Screen options={{headerShown: false}} name="resetPassword" component={ResetPassword}/>
        <stack.Screen options={{headerShown: false}} name="sendEmail" component={SendEmail}/>
      </stack.Navigator>
      )}
    </NavigationContainer>
    </AuthContext.Provider>
  );
};

const DashBoardScreen = ({navigation}) => {
  return(
    <stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold',
        textAlign: 'justify'
      },
    }}>
    
    <stack.Screen name="dashboard" component={DashBoard} options={{
          headerTitle: false,
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={30} 
              backgroundColor='#009387' onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon.Button name="person-circle-outline" size={30}
              backgroundColor="#009387" onPress={() => Profile()}
            />
          )
        }} />
    </stack.Navigator>
  )
}
export default AppNavigation;
