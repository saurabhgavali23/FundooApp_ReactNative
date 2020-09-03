import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-community/async-storage';

export const setSnackBarMsg = (message) => {
  return Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
  });
};

export const isLoggedIn = async() =>{
  return await AsyncStorage.getItem('userId') !== null  
};

export const logout = async ()=>{
 try{
   await AsyncStorage.removeItem('userData')
   await AsyncStorage.removeItem('userId')
   return true
 }catch{
   return false;
 }
}