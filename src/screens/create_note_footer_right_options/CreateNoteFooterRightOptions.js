import React, { useState } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Share from 'react-native-vector-icons/AntDesign';
import Collaborator from 'react-native-vector-icons/Feather';
import Copy from 'react-native-vector-icons/Ionicons';
import Labels from 'react-native-vector-icons/MaterialCommunityIcons';
import Delete from 'react-native-vector-icons/AntDesign';
import Restore from 'react-native-vector-icons/MaterialIcons';
import ColorList from '../color_list/ColorList';
import styles from './styles'
import { trashNotes, permanentDeleteNotes } from '../../services/NoteService'

const CreateNoteFooterRightOptions = ({setBgColor, navigation, noteId, showDeleteOptions}) => {
const [flag, setFlag] = useState(Math.random())

  const trashNote = (value) => {
    if(noteId !== null){
      let data ={
        isDeleted: value,
        noteIdList: noteId
      }
      trashNotes(data).then(res=>{
        navigation.navigate('dashBoard',{flag: flag})
      }).catch(err=>{
        console.warn("error", err);
      })
    }
  }

  const permanentDeleteNote = () =>{
    if(noteId !== null){
      let data ={
        isDeleted: true,
        noteIdList: noteId
      }
      permanentDeleteNotes(data).then(res=>{
        navigation.navigate('dashBoard',{flag: flag})
      }).catch(err=>{
        console.warn("error", err);
      })
    }
  }
  
  return (
    <View style={styles.container}>
      {showDeleteOptions!== true?(
      <View>
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
      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('collaborator')}>
      <Collaborator name="user-plus" size={27}/>
        <Text style={styles.text}>Collaborator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('createNewLabel')}>
        <Labels name="label-outline" size={25} />
        <Text style={styles.text}>Labels</Text>
      </TouchableOpacity>
      <View>
        <ColorList setBgColor={setBgColor} />
      </View>
      </View>): 
      (<View>
        <TouchableOpacity style={styles.option}
          onPress={()=> trashNote(false)}>
          <Restore name="restore" size={25} />
          <Text style={styles.text}>Restore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}
          onPress={()=> permanentDeleteNote()}>
          <Delete name="delete" size={25} />
          <Text style={styles.text}>Perment Delete</Text>
        </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CreateNoteFooterRightOptions;
