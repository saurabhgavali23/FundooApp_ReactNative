import React, { useState } from 'react'
import { View, TextInput, StyleSheet, StatusBar } from 'react-native'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import { saveNotes } from '../services/NoteService'

const CreateNote = ({navigation}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleChange = () =>{
        
        saveNotes(title,description).then(res=>{
            if(res.status === 200){
                navigation.navigate('drawer')
            }
        }).catch(err=>{
            
        })
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='blue' barStyle="light-content"/>
            <Header
                containerStyle={{backgroundColor: '#fff'}}
                leftComponent={
                    <Icon name="arrow-back-outline" size={25}
                        onPress={()=> handleChange()}
                    />
                }
            />
            <TextInput 
                style={styles.text1}
                placeholder="Title"
                multiline={true}
                value={title}
                onChangeText={value=>setTitle(value)}
            />
            <View style={styles.text2}>
            <TextInput placeholder="Notes" 
                style={{fontSize:22}}
                multiline={true}
                value={description}
                onChangeText={value=>setDescription(value)}
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
        fontSize: 20,
        height: '10%'
    },
    text2:{
        height: '100%',
    }
})
export default CreateNote

