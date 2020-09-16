import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {getNotes} from '../../services/NoteService';
import {Card} from 'react-native-elements';
import styles from './styles';

const NoteList = () => {
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
    <View>
      {notes.map((item, index) => (
        <Card key={index} containerStyle={styles.card}>
          <Text style={styles.titleFont}>{item.title}</Text>
          <Text style={styles.discriptionFont}>{item.description}</Text>
        </Card>
      ))}
    </View>
  );
};

export default NoteList;
