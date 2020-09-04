import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar} from 'react-native-elements'
import { color } from 'react-native-reanimated'

export const SearchNotes = () => {
    return (
        <View>
            <SearchBar 
            inputContainerStyle={{backgroundColor: '#fff'}}
            searchIcon={{size:24}}
            containerStyle={styles.search}
                placeholder="Search Notes"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    search:{
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 17,
        height: "90%",
        width: "130%",
        backgroundColor: '#007aff',
        marginTop: "1%",
        borderRadius: 20,
    }
})

export default SearchNotes
