import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    plusicon: {
      flex: 1,
      position: 'absolute',
      bottom: '5%',
      right: '5%',
      alignSelf: 'flex-end'
    },
    text: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightIcons:{
      flexDirection: 'row', 
      alignItems: 'center'
    },
    listIcon:{
      marginRight: '5%'
    },
    centerContainer:{
      alignItems: 'flex-end'
    }
  });

  export default styles;