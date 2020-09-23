import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput, StatusBar, Text, TouchableOpacity, Modal} from 'react-native';
import {Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Archive from 'react-native-vector-icons/Ionicons';
import Bell from 'react-native-vector-icons/FontAwesome';
import Pin from 'react-native-vector-icons/MaterialCommunityIcons';
import PlusBox from 'react-native-vector-icons/Feather';
import OptionIcon from 'react-native-vector-icons/SimpleLineIcons';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import {pinUnPinNotes, saveNoteLabels, saveNotes, setNoteColor, updateNotes, setArchiveNote} from '../../services/NoteService';
import RBSheet from 'react-native-raw-bottom-sheet';
import CreateNoteFooterRightOptions from '../create_note_footer_right_options/CreateNoteFooterRightOptions';
import CreateNoteFooterLeftOptions from '../create_note_footer_left_options/CreateNoteFooterLeftOptions';
import Reminder from '../reminder/Reminder';
import {RNChipView} from 'react-native-chip-view'
import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage';

const CreateNote = ({navigation, route}) => {
  const refRBSheet = useRef();
  const {addLabels = undefined, item = undefined, reminder = ''} = route.params ?? {};
  const [title, setTitle] = useState(item!==undefined?item.title:'');
  const [description, setDescription] = useState(item!==undefined?item.description:'');
  const [optionsToggle, setOptionsToggle] = useState(false)
  const [chipDateTime, setChipDateTime] = useState(reminder!==null?reminder:null)
  const [showChip, setShowChip] = useState(false)
  const [bgColor, setBgColor] = useState(item!=undefined?item.color:'#F0FFF0')
  const [show, setShow] = useState(false)
  const [isArchive, setIsArchive] = useState(item!=undefined?item.isArchived:false)
  const [isPined, setIsPined] = useState(item!==undefined?item.isPined:false)
  const [labelId, setLabelId] = useState([])
  let noteId = []
  noteId.push(item!==undefined?item.id:null)
  
  useEffect(() => {
    AsyncStorage.getItem('userId').then(res=>{
     var userId = res;
      
    if(addLabels!==undefined){
      let data={
        label : addLabels.toString(),
        isDeleted: false,
        userId: userId
      }
      saveNoteLabels(data).then(res=>{
        var label12 = [];
         label12.push(res.data.id)
         setLabelId(label12) 
      }).catch(err=>{
        console.warn("error", err);
      })
    }
  })
  }, [addLabels])

  const handleModel = () =>{
    setShowChip(!showChip)
    setShow(false)
  }

  var hour = new Date().getHours();
  var min = new Date().getMinutes();

  const isPinOrUnPin = (value) =>{
    setIsPined(value)
    if(item!==undefined){
      let data = {
        isPined: value,
        noteIdList: noteId
      }
     pinUnPinNotes(data).then((res)=>{
      }).catch(err=>{
        console.warn("error", err);
      })
    }
  }

  const updateNoteColor = () => {
    let data = {
      color: bgColor,
      noteIdList: noteId
    }
   setNoteColor(data).then(res=>{})
    .catch(err=>{
      console.warn("error", err);
    })
  }

  const updateArchivedNote = (value) => {
    setIsArchive(value)
    if(item!==undefined){
      let data = {
        isArchived: value,
        noteIdList: noteId 
      }
     setArchiveNote(data).then(res=>{
    })
      .catch(err=>{
        console.warn("error", err);
      })
    }
  }
  
  const handleChange = () => {
  let formData = new FormData()
      formData.append('title', title)
      formData.append('description', description)
      formData.append('color', bgColor)
      formData.append('isPined', isPined)
      formData.append('isArchived', isArchive)
      formData.append('labelIdList', JSON.stringify(labelId))
      formData.append('reminder', chipDateTime)
  if(item===undefined){
    saveNotes(formData)
      .then((res) => {
        if (res.status === 200) {
          navigation.navigate('drawer');
        }
      })
      .catch((err) => {});
    }else{
      let formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('noteId', item.id)
      updateNotes(formData).then((res)=>{
        if (res.status === 200) {
          navigation.navigate('drawer');
        }
      }).catch((err) => {
        console.warn("note not update");
      });
      updateNoteColor()
    }
   };

  const handleBottomSheet = (value) =>{
    refRBSheet.current.open()
    setOptionsToggle(value)
  }
  
  return (
    <View style={[styles.container,{backgroundColor: bgColor}]}>
      <StatusBar backgroundColor="#007aff" barStyle="light-content" />
      <Header
        containerStyle={{backgroundColor: bgColor}}
        leftComponent={
          <Icon
            name="arrow-back-outline"
            size={25}
            onPress={() => handleChange()}
          />
        }
        rightComponent={
          <View style={styles.headOpetions}>
            <TouchableOpacity onPress={()=> isPinOrUnPin(!isPined)}>
            <Pin name={isPined? 'pin':'pin-outline'} size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setShow(true)}>
            <Bell name="bell-o" size={25} style={{marginLeft: '40%'}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> updateArchivedNote(!isArchive)}>
            <Archive name={isArchive?'archive':'archive-outline'} size={25} style={{marginLeft: '28%'}}/>
            </TouchableOpacity>
          </View>
        }
      />
      <View>
      <TextInput
        style={styles.title}
        placeholder="Title"
        multiline={true}
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      </View>
        <View>
        <TextInput
          placeholder="Notes"
          style={styles.notes}
          multiline={true}
          value={description}
          onChangeText={(value) => setDescription(value)}
        />
        </View>
      <View style={{width:'60%',}}>
        {
          (showChip || reminder !== '') ? (
          <RNChipView
          title={chipDateTime}
          avatar={<Alarm name='alarm' size={20}/>}
          avatarStyle={styles.avatar}
        />
        ):null}
      </View>
      <View style={styles.addLabelChip}>
        {
          addLabels!==undefined ? (
          <RNChipView
          title={addLabels.toString()}
          avatar={false}
        />
        ): null}
      </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=> handleBottomSheet(true)}>
          <PlusBox name="plus-square" size={25} />
          </TouchableOpacity>
          <Text style={styles.time}>{hour}:{min}</Text>
          <TouchableOpacity onPress={()=> handleBottomSheet(false)} >
          <OptionIcon name="options-vertical" size={25} />
          </TouchableOpacity>
        </View>
      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'tranperent',
              marginBottom: '11%'
            },
            draggableIcon:{
              display: 'none'
            }
          }}
          height={300}
          >
            {optionsToggle?
            <CreateNoteFooterLeftOptions/> :
            <CreateNoteFooterRightOptions setBgColor={setBgColor} navigation={navigation} noteId={noteId}/>
            }
          </RBSheet>
      </View>
      <View style={styles.modalContainer}>
      <Modal
        transparent={true}
        visible={show}
      >
      <View style={styles.modal}>
        <Reminder setChipDateTime={setChipDateTime}/>
          <View style={styles.modalButtonContainer}>
          <Button containerStyle={styles.modelButton} title='close' onPress={()=> setShow(false)}/>
          <Button containerStyle={styles.modelButton} title='OK' onPress={()=> handleModel()}/>
          </View>
      </View>
      </Modal>
      </View>
    </View>
  );
};

export default CreateNote;
