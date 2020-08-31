
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F9F9F9',
      justifyContent: 'center',
    },
    input: {
      fontSize: 20,
      backgroundColor: '#fff',
      padding: 15,
      marginLeft: 20,
      marginRight: 21,
      marginBottom: 10,
      alignItems: 'stretch',
    },
  
    text: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 10,
    },
  
    userButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFD700',
      padding: 15,
      marginLeft: 20,
      marginRight: 22,
      width: '44%',
    },
  
    btnText: {
      fontSize: 20,
      justifyContent: 'center',
    },
  
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
    },
    errorText: {
      color: 'red',
      marginLeft: 18,
      fontSize: 17,
    },
    linkingUrl: {
      justifyContent: 'center',
      color: 'black',
      textDecorationLine: 'underline',
      textAlign: 'center',
      marginTop: 10,
      fontSize: 20
    }
  });

  export default styles;