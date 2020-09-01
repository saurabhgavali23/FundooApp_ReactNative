import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar} from 'react-native-elements'

export const SearchNotes = () => {
    return (
        <View>
            <SearchBar 
            inputContainerStyle={{backgroundColor: 'white'}}
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
        width: "120%",
        backgroundColor: '#2089dc',
        marginTop: "1%"
    }
})

export default SearchNotes
