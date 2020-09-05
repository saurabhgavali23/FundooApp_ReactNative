import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet, StatusBar, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Archive from 'react-native-vector-icons/MaterialIcons';
import Bell from 'react-native-vector-icons/FontAwesome';
import Pin from 'react-native-vector-icons/MaterialCommunityIcons';
import PlusBox from 'react-native-vector-icons/Feather';
import OptionIcon from 'react-native-vector-icons/SimpleLineIcons';
import {saveNotes} from '../services/NoteService';
import RBSheet from 'react-native-raw-bottom-sheet';
import CreateNoteFooterLeftOptions from './CreateNoteFooterLeftOptions';

const CreateNote = ({navigation}) => {
  const refRBSheet = useRef();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
            <TouchableOpacity>
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
          <TouchableOpacity onPress={()=> refRBSheet.current.open()}>
          <PlusBox name="plus-square" size={25} />
          </TouchableOpacity>
          <Text style={styles.time}>{hour}:{min}</Text>
          <TouchableOpacity>
          <OptionIcon name="options-vertical" size={25} onPress={()=> refRBSheet.current.open()}/>
          </TouchableOpacity>
        </View>
        </ScrollView>
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
          <CreateNoteFooterLeftOptions/>
          </RBSheet>
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
  }
});
export default CreateNote;
