import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {getNotes} from '../../services/NoteService';
import {Card} from 'react-native-elements';
import styles from './styles';

const NoteList = ({isList}) => {
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
      <View style={isList ? styles.container : null}>
        {notes.map((item, index) => (
          <Card
            key={index}
            containerStyle={[
              isList ? styles.card : null,
              {backgroundColor: item.color},
            ]}>
            <Text style={styles.titleFont}>{item.title}</Text>
            <Text style={styles.discriptionFont}>{item.description}</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

export default NoteList;
