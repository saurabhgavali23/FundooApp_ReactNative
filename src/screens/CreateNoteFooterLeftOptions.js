import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Camera from 'react-native-vector-icons/SimpleLineIcons';
import Image from 'react-native-vector-icons/Feather';
import Brush from 'react-native-vector-icons/Ionicons';
import Mic from 'react-native-vector-icons/MaterialCommunityIcons';
import Tickbox from 'react-native-vector-icons/AntDesign';

const CreateNoteFooterLeftOptions = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Camera name="camera" size={25} />
        <Text style={styles.text}>Take photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image name="image" size={27} />
        <Text style={styles.text}>Add image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Brush name="md-brush-outline" size={25} />
        <Text style={styles.text}>Drawing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Mic name="microphone-outline" size={27} />
        <Text style={styles.text}>Recording</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Tickbox name="checksquareo" size={25} />
        <Text style={styles.text}>Tick boxes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
    marginTop: '10%',
  },
  option: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  text: {
    fontSize: 20,
    marginLeft: '10%',
  },
});

export default CreateNoteFooterLeftOptions;
