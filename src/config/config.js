import React, { createContext} from 'react';
import Snackbar from 'react-native-snackbar';

export const AuthContext = createContext();

export const setSnackBarMsg = (message) => {
  return Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
  });
};