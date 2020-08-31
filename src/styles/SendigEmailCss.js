import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F9F9F9',
    },
    input: {
      width: '85%',
      backgroundColor: '#fff',
      fontSize: 20,
      marginBottom: 20,
    },
    text: {
      fontSize: 25,
      marginBottom: 10,
    },
    userButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFD700',
      padding: 15,
      marginLeft: 10,
      marginRight: 20,
      width: '43%',
    },
  
    btnText: {
      fontSize: 20,
      justifyContent: 'center',
      textAlign: 'center',
    },
  
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
    },
  
    errorText:{
      color: 'red',
      fontSize: 17,
      textAlign: 'right',
    }
  });

  export default styles;