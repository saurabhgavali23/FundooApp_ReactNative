import {StyleSheet, Platform, StatusBar} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding: '2%',
    },
    header:{
        flexDirection: 'row', 
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        height: '7%'
    },
    title:{
        fontSize: 20,
        marginLeft: '2%'
    },
    saveTitle:{
        fontSize: 15,
    },
    collabAndSaveContainer:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        width: '90%'
    },
    email:{
        fontSize: 17,
        marginLeft: '7%'
    },
    emailContainer:{
        marginTop: '10%',
        flexDirection: 'row',
        marginLeft: '7%'
    },
    addUser:{
        flexDirection: 'row',
        marginTop: '7%',
        marginLeft: '7%',
        alignItems: 'center'
    },
    inputEmail:{
        fontSize: 17,
        marginLeft: '7%',
    }
})

export default styles