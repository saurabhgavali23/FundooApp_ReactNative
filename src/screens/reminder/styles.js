import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    text: {
      fontSize: 20,
    },
    modal: {
      backgroundColor: '#fff',
      height: '40%',
      width: '80%',
      marginTop: '60%',
      marginLeft: '10%',
    },
    modalInput: {
      width: '70%',
      fontSize: 20,
    },
    modelText: {
      fontSize: 20,
      marginLeft: '3%',
      marginTop: '2%',
    },
    modalButtonContainer: {
      width: '60%',
      flexDirection: 'row',
      marginLeft: '50%',
      marginTop: '10%',
    },
    modelButton: {
      fontSize: 20,
      marginRight: '20%',
    },
  });

  export default styles;