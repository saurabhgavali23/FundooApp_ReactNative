import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {getNotes} from '../../services/NoteService';
import styles from './styles';
import DisplayCard from './DispalyCard';

const NoteList = ({isList, navigation, isReminderList}) => {
  const [isPined, setIsPined] = useState(true);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNotes()
      .then((res) => {
        setIsLoading(false);
        let data = res.data.data.data;
        setNotes(data);
      })
      .catch((err) => {
        console.warn('something wrong');
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, marginTop: '90%'}}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }
  
  return (
    <ScrollView style={{height: '80%'}}>
      {isPined !== isReminderList && <Text style={styles.pin}>Pined</Text>}
      <View style={isList ? styles.container : null}>
        {notes.map(
          (item, index) =>{
            return(
              (item.isPined === true && isReminderList === false)? (
                <DisplayCard
                  key={index}
                  item={item}
                  isList={isList}
                  navigation={navigation}
                />
              ):null
            )
            })}
      </View>
      {isPined !== isReminderList && <Text style={styles.other}>Other</Text>}
      <View style={isList ? styles.container : null}>
        {notes.map(
          (item, index) =>
            (item.isPined === false && isReminderList === false) && (
              <DisplayCard
                key={index}
                item={item}
                isList={isList}
                navigation={navigation}
              />
            ),
        )}
      </View>
      <View style={isList ? styles.container : null}>
        {notes.map(
          (item, index) =>{
            return(
              (item.reminder.length !== 0 && isReminderList === true) && (
                <DisplayCard
                  key={index}
                  item={item}
                  isList={isList}
                  navigation={navigation}
                />
              )
            )
          })}
      </View>
    </ScrollView>
  );
};

export default NoteList;
