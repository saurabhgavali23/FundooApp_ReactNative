import React from 'react'
import { View, TextInput } from 'react-native'

const CreateNote = () => {
    return (
        <View style={{flex: 1}}>
            <TextInput placeholder="Title" 
            multiline={true}
             style={{fontSize: 25}}/>
            <TextInput placeholder="Note"
            multiline={true}
            numberOfLines={25}
            style={{fontSize: 22}}
            />
        </View>
    )
}
export default CreateNote

