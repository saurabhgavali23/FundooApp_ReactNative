import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Notes = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create Note</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text:{
        fontSize: 20
    }
})

export default Notes;
