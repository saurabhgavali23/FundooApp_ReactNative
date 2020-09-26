import Snackbar from 'react-native-snackbar';

export const setSnackBarMsg = (message, msgColor) => {
  return Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    textColor: msgColor
  });
};