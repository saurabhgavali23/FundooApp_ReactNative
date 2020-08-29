import React from 'react';
import Snackbar from 'react-native-snackbar';

export const setSnackBarMsg = (message) => {
  return Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
  });
};

