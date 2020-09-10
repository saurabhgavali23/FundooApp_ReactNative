import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
      backgroundColor: '#007aff',
    },
    avatarContainer: {
        padding: '5%',
        flexDirection: 'row'
    },
    name:{
        fontSize: 20,
        fontStyle: 'normal'
    },
    emails:{
        fontSize: 17,
    },
    logout:{
        flex: 1,
        width: '17%',
        height: '5%',
        flexDirection: 'column',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: '5%',
        marginBottom: '5%'
    }
  });
  export default styles
