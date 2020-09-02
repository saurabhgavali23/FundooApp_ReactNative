import React from 'react'
import { View, TextInput, StyleSheet, StatusBar } from 'react-native'

const CreateNote = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='blue' barStyle="light-content"/>
            <TextInput 
                style={styles.text1}
                placeholder="Title"
                multiline={true}
            />
            <View style={styles.text2}>
            <TextInput placeholder="Notes" 
                style={{fontSize:22}}
                multiline={true}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: '1%'
    },
    text1:{
        fontSize: 25,
    },
    text2:{
        height: '100%',
    }
})
export default CreateNote

