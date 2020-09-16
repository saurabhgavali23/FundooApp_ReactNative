import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
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
    <ScrollView>
      {notes.map((item, index) => (
        <Card key={index} containerStyle={[styles.card],{backgroundColor: item.color}}>
          <Text style={styles.titleFont}>{item.title}</Text>
          <Text style={styles.discriptionFont}>{item.description}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

export default NoteList;
