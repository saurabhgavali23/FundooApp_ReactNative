import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9',
      justifyContent: 'center',
    },
    input: {
      fontSize: 20,
      width: '90%',
      backgroundColor: '#fff',
      borderRadius: 4,
      padding: 15,
      marginLeft: 20,
      marginBottom: 10,
      alignItems: 'stretch'
    },
  
    text: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 10
    },
  
    userButton:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFD700',
      padding: 15,
      marginLeft: 20,
      marginRight: 22,
      width: "44%"
    },
    
    btnText: {
      fontSize: 20,
      justifyContent: 'center'
    },
  
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%'
    },
  
    errorText:{
        color: 'red',
        marginLeft: 18,
        fontSize: 17
    }
  });

  export default styles