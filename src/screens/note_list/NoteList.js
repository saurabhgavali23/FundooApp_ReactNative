import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {getNotes} from '../../services/NoteService';
import {Card} from 'react-native-elements';
import styles from './styles';

const NoteList = ({isList, navigation}) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes()
      .then((res) => {
        let data = res.data.data.data;
        setNotes(data);
      })
      .catch((err) => {
        console.warn('something wrong');
      });
  }, []);

  return (
    <ScrollView style={{height: '80%'}}>
      <View style={isList ? styles.container : null}>
        {notes.map((item, index) => (
          <Card key={index} containerStyle={[isList?styles.card: null,{backgroundColor: item.color}]}>
            <TouchableOpacity onPress={()=> navigation.navigate('createNote', {item:item})}>
            <Text style={styles.titleFont}>{item.title}</Text>
            <Text style={styles.discriptionFont}>{item.description}</Text>
            </TouchableOpacity>
          </Card>
        ))}
      </View>
      </ScrollView>
  );
};

export default NoteList;
