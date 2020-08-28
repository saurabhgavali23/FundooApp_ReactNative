import React from 'react'
import { View, StyleSheet, Text } from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>FundooApp</Text>
        </View>
    );
};


const styles = StyleSheet.create({

    header: {
        alignItems: 'center',
        position: 'relative'
    },
    text: {
        textAlign: 'center',
        fontSize: 35,
    }

})


export default Header;