import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Collaborate from 'react-native-vector-icons/Feather';
import Share from 'react-native-vector-icons/AntDesign';
import Copy from 'react-native-vector-icons/Ionicons';
import Labels from 'react-native-vector-icons/MaterialCommunityIcons';
import Delete from 'react-native-vector-icons/AntDesign';
import ColorList from './ColorList';

const CreateNoteFooterRightOptions = ({setBgColor}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}>
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
      <TouchableOpacity style={styles.option}>
        <Collaborate name="user-plus" size={27} />
        <Text style={styles.text}>Collaborator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.labelOption}>
        <Labels name="label-outline" size={25} />
        <Text style={styles.text}>Labels</Text>
      </TouchableOpacity>
      <View>
        <ColorList setBgColor={setBgColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    marginLeft: '5%',
  },
  option: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  text: {
    fontSize: 20,
    marginLeft: '10%',
  },
  title: {
    fontSize: 20,
  },
  labelOption: {
    flexDirection: 'row',
  },
});

export default CreateNoteFooterRightOptions;
