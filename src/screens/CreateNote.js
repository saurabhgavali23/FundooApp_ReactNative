import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet, StatusBar, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import {Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Archive from 'react-native-vector-icons/MaterialIcons';
import Bell from 'react-native-vector-icons/FontAwesome';
import Pin from 'react-native-vector-icons/MaterialCommunityIcons';
import PlusBox from 'react-native-vector-icons/Feather';
import OptionIcon from 'react-native-vector-icons/SimpleLineIcons';
import {saveNotes} from '../services/NoteService';
import RBSheet from 'react-native-raw-bottom-sheet';
import CreateNoteFooterRightOptions from './CreateNoteFooterRightOptions';
import CreateNoteFooterLeftOptions from './CreateNoteFooterLeftOptions';
import Reminder from './Reminder';

const CreateNote = ({navigation}) => {
  const refRBSheetLeft = useRef();
  const refRBSheetRight = useRef(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false)
  const [optionsToggle, setOptionsToggle] = useState(false)
  const [leftOption, setLeftOption] = useState(false)
  const [rightOption, setRightOption] = useState(false)

  const [show, setShow] = useState(false)

    const hideModal = () =>{
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
    <View style={styles.container}>
      <StatusBar backgroundColor="#007aff" barStyle="light-content" />
      <Header
        containerStyle={{backgroundColor: '#fff'}}
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
      <TextInput
        style={styles.text1}
        placeholder="Title"
        multiline={true}
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <View style={styles.text2}>
        <TextInput
          placeholder="Notes"
          style={{fontSize: 22}}
          multiline={true}
          value={description}
          onChangeText={(value) => setDescription(value)}
        />
      </View>
      <View >
        <ScrollView>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=> handleBottomSheetLeft(true)}>
          <PlusBox name="plus-square" size={25} />
          </TouchableOpacity>
          <Text style={styles.time}>{hour}:{min}</Text>
          <TouchableOpacity onPress={()=> handleBottomSheetRight(true)} >
          <OptionIcon name="options-vertical" size={25} />
          </TouchableOpacity>
        </View>
        </ScrollView>
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
            <CreateNoteFooterRightOptions/>
          </RBSheet>
      </View>
      <View style={styles.modalContainer}>
      <Modal
        transparent={true}
        visible={show}
      >
      <View style={styles.modal}>
        <Reminder/>
          <View style={styles.modalButtonContainer}>
          <Button containerStyle={styles.modelButton} title='close' onPress={()=> hideModal()}/>
          <Button containerStyle={styles.modelButton} title='OK' onPress={()=> hideModal()}/>
          </View>
      </View>
      </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '1%',
  },
  text1: {
    fontSize: 25,
    height: '10%',
  },
  text2: {
    height: '75%',
  },
  headOpetions: {
    flexDirection: 'row',
  },
  optionMargin: {
    marginLeft: '40%',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  time:{
    fontSize: 20,
    marginLeft: '25%',
    marginRight: '25%'
  },
  modal:{
    backgroundColor:'#fff', 
    height: '30%',
    width: '80%',
    marginTop: '60%',
    marginLeft: '10%'
  },
  modalButtonContainer:{
    width: '60%',
    flexDirection: 'row',
    marginLeft: '50%',
  },
  modelButton:{
    fontSize: 20,
    marginRight: '20%',
    marginTop: '10%'
  }
});
export default CreateNote;
