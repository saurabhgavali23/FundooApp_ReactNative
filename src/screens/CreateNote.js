import React, {useState} from 'react';
import {View, TextInput, StyleSheet, StatusBar, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Archive from 'react-native-vector-icons/MaterialIcons';
import Bell from 'react-native-vector-icons/FontAwesome';
import Pin from 'react-native-vector-icons/MaterialCommunityIcons';
import {saveNotes} from '../services/NoteService';

const CreateNote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
    height: '71%',
  },
  headOpetions: {
    flexDirection: 'row',
  },
  optionMargin: {
    marginLeft: '40%',
  }
});
export default CreateNote;
