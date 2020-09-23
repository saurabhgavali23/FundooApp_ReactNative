import React, { useState } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Share from 'react-native-vector-icons/AntDesign';
import Copy from 'react-native-vector-icons/Ionicons';
import Labels from 'react-native-vector-icons/MaterialCommunityIcons';
import Delete from 'react-native-vector-icons/AntDesign';
import ColorList from '../color_list/ColorList';
import styles from './styles'
import { trashNotes } from '../../services/NoteService'

const CreateNoteFooterRightOptions = ({setBgColor, navigation, noteId}) => {

  const trashNote = (value) => {
    if(noteId !== null){
      let data ={
        isDeleted: value,
        noteIdList: noteId
      }
      trashNotes(data).then(res=>{
        navigation.navigate('drawer')
      }).catch(err=>{
        console.warn("error", err);
      })
    }
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}
      onPress={()=> trashNote(true)}>
        <Delete name="delete" size={25} />
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Copy name="md-copy-outline" size={27} />
        <Text style={styles.text}>Make a copy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Share name="sharealt" size={27} />
        <Text style={styles.text}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('createNewLable')}>
        <Labels name="label-outline" size={25} />
        <Text style={styles.text}>Labels</Text>
      </TouchableOpacity>
      <View>
        <ColorList setBgColor={setBgColor} />
      </View>
    </View>
  );
};

export default CreateNoteFooterRightOptions;
