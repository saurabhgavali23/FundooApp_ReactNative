import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Reminder = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Reminder Note</Text>
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

export default Reminder;
