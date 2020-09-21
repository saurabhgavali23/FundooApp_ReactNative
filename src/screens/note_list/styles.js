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
    reminderFont:{
        width: '50%',
    },
    listStyle:{
        borderRadius: 10,
        elevation: 0,
        borderWidth: 2
    },
    titleStyle:{
        fontSize:15,
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
