import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        padding: '2%'
    },
    header:{
        top: 20,
        width: '100%',
        height: 50,
        justifyContent:'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#fff'
    },
    input:{
        fontSize: 20,
        width: '70%',
        borderRadius: 5
    },
    arrow:{
        marginRight: '1%'
    },
    createLabel:{
        marginTop: '10%',
        marginLeft: '10%',
        flexDirection: 'row'
    },
    text:{
        fontSize: 18,
        marginLeft: '1%'
    },
    addLabel:{
        marginTop: '10%',
        marginLeft: '3%',
    },
    subAddLabel:{
        flexDirection: 'row', 
        marginBottom: '2%',
        alignItems: 'center'
    },
    checkbox:{
        width: '90%',
    },
    checkboxTitle:{
        fontSize: 20,
        marginRight: '65%'
    }
})

export default styles;