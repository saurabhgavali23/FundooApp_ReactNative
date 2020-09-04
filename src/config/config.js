import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-community/async-storage';

export const setSnackBarMsg = (message) => {
  return Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
  });
};

export const isLoggedIn = async() =>{
  const value = await AsyncStorage.getItem('userId');
  if (value != null){
    return true
  }else{
    return false
  }
};

export const logout = async ()=>{
 try{
   await AsyncStorage.clear()
   return true
 }catch{
   return false;
 }
}