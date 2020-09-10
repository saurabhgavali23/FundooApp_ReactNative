import React, {useState, useRef} from 'react';
import {View, TextInput, StatusBar, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import {Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Archive from 'react-native-vector-icons/MaterialIcons';
import Bell from 'react-native-vector-icons/FontAwesome';
import Pin from 'react-native-vector-icons/MaterialCommunityIcons';
import PlusBox from 'react-native-vector-icons/Feather';
import OptionIcon from 'react-native-vector-icons/SimpleLineIcons';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import {saveNotes} from '../../services/NoteService';
import RBSheet from 'react-native-raw-bottom-sheet';
import CreateNoteFooterRightOptions from '../create_note_footer_right_options/CreateNoteFooterRightOptions';
import CreateNoteFooterLeftOptions from '../create_note_footer_left_options/CreateNoteFooterLeftOptions';
import Reminder from '../reminder/Reminder';
import {RNChipView} from 'react-native-chip-view'
import styles from './styles'

const CreateNote = ({navigation}) => {
  const refRBSheetLeft = useRef();
  const refRBSheetRight = useRef(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false)
  const [optionsToggle, setOptionsToggle] = useState(false)
  const [leftOption, setLeftOption] = useState(false)
  const [rightOption, setRightOption] = useState(false)
  const [chipDateTime, setChipDateTime] = useState(null)
  const [showChip, setShowChip] = useState(false)
  const [bgColor, setBgColor] = useState('#F0FFF0')

  const [show, setShow] = useState(false)

    const hideModal = () =>{
        setShow(false)
    }

    const handleModel = () =>{
      const date = new Date(chipDateTime).toLocaleDateString()
      const time = new Date(chipDateTime).toLocaleTimeString()
      setChipDateTime(date+','+time)
      setShowChip(!showChip)
      setShow(false)
    }

  var hour = new Date().getHours();
  var min = new Date().getMinutes();

  const handleChange = () => {
    saveNotes(title, description)
      .then((res) => {
        if (res.status === 200) {
          navigation.navigate('drawer');
        }
      })
      .catch((err) => {});
  };

  const openReminder = () =>{
    setShow(true)
  }

  const handleBottomSheetLeft = (value) =>{

    refRBSheetLeft.current.open()
    setLeftOption(value)
    setRightOption(false)
  }
  const handleBottomSheetRight = (value) =>{

    refRBSheetRight.current.open()
    
    setRightOption(value)
    setLeftOption(false)
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
            <TouchableOpacity>
            <Pin name="pin" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> openReminder()}>
            <Bell name="bell-o" size={25} style={{marginLeft: '40%'}}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Archive name="archive" size={25} style={{marginLeft: '28%'}}/>
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
          showChip && (
          <RNChipView
          title={chipDateTime}
          avatar={<Alarm name='alarm' size={20}/>}
          avatarStyle={styles.avatar}
        />
        )}
      </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=> handleBottomSheetLeft(true)}>
          <PlusBox name="plus-square" size={25} />
          </TouchableOpacity>
          <Text style={styles.time}>{hour}:{min}</Text>
          <TouchableOpacity onPress={()=> handleBottomSheetRight(true)} >
          <OptionIcon name="options-vertical" size={25} />
          </TouchableOpacity>
        </View>
      <View>
        <RBSheet
          ref={refRBSheetLeft}
          closeOnDragDown={true}
          closeOnPressMask={true}
          onOpen={leftOption}
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
            <CreateNoteFooterLeftOptions/>
          </RBSheet>
      </View>
      <View>
        <RBSheet
        ref={refRBSheetRight}
          closeOnDragDown={true}
          closeOnPressMask={true}
          onOpen={rightOption}
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
            <CreateNoteFooterRightOptions setBgColor={setBgColor}/>
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
          <Button containerStyle={styles.modelButton} title='close' onPress={()=> hideModal()}/>
          <Button containerStyle={styles.modelButton} title='OK' onPress={()=> handleModel()}/>
          </View>
      </View>
      </Modal>
      </View>
    </View>
  );
};


export default CreateNote;
