import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: '1%',
      justifyContent: 'flex-start'
    },
    title:{
      fontSize: 25
    },
    notes:{
      fontSize: 22
    },
    headOpetions: {
      flexDirection: 'row',
    },
    optionMargin: {
      marginLeft: '40%',
    },
    footerContainer: {
      position: 'absolute',
      bottom: '1%',
      left: '5%',
      right: '4%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    time:{
      fontSize: 20,
    },
    modal:{
      backgroundColor:'#fff', 
      height: '30%',
      width: '80%',
      marginTop: '60%',
      marginLeft: '10%'
    },
    modalButtonContainer:{
      width: '60%',
      flexDirection: 'row',
      marginLeft: '50%',
    },
    modelButton:{
      fontSize: 20,
      marginRight: '20%',
      marginTop: '10%'
    },
    avatar:{
      justifyContent:'center',
    },
    addLabelChip:{
      width: '40%',
      marginTop: '1%'
    }
  });

  export default styles;