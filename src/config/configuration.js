import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-community/async-storage';

export const setSnackBarMsg = (message, msgColor) => {
  return Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    textColor: msgColor
  });
};

export const isLoggedIn = async() =>{
  const value = await AsyncStorage.getItem('userToken');
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