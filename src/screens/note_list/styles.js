import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card:{
      width: '46%',
      marginHorizontal: '2%',
      borderRadius: 10,
      elevation: 0,
      borderWidth: 2
    },
    titleFont:{
        fontSize: 22
    },
    discriptionFont:{
        fontSize: 20,
    },
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    reminderAndLabelContainer:{
        alignSelf: 'flex-start',
        borderRadius: 20,
        borderWidth: 0.5,
        marginBottom: '1%'
    },
    listStyle:{
        borderRadius: 10,
        elevation: 0,
        borderWidth: 2
    },
    titleStyle:{
        fontSize:15,
        marginHorizontal: '2%'
    },
    pin:{
        fontSize: 20, 
        marginLeft: '4%', 
        marginTop: '1%'
    },
    other:{
        fontSize: 20, 
        marginLeft: '4%', 
        marginTop: '2%'
    }
});

export default styles;
