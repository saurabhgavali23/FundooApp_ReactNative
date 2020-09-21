import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import {getNotes} from '../../services/NoteService';
import {Card} from 'react-native-elements';
import styles from './styles';
import {RNChipView} from 'react-native-chip-view';

const NoteList = ({isList, navigation}) => {

  const [isPined, setIsPined] = useState(true)
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
    getNotes()
      .then((res) => {
        let data = res.data.data.data;
        setNotes(data);
      })
      .catch((err) => {
        console.warn('something wrong');
      });
  }, []);

  if (isLoading){
    return(
    <View style={{flex: 1, marginTop: '90%'}}>
      <ActivityIndicator size='large' color='green'/>
    </View>
    )
  }

  const noteLists = (item, index) =>{
    let reminder = item.reminder !== undefined ? item.reminder.toString().slice(4, 21) : '';
    return(
      <Card
        key={index}
        containerStyle={[
          isList ? styles.card : styles.listStyle,
          {backgroundColor: item.color},
        ]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('createNote', {item: item, reminder: reminder})}>
          <Text style={styles.titleFont}>{item.title}</Text>
          <Text style={styles.discriptionFont}>{item.description}</Text>
          {reminder !== '' ? (
            <View style={styles.reminderFont}>
              <RNChipView
                title={reminder}
                titleStyle={styles.titleStyle}
                avatar={false}
                height={20}
              />
            </View>
          ) : null}
          <View>
          {
            item.noteLabels.map((value,index)=>(
              <View key={index} style={{width: '40%'}}>
              <RNChipView
                title={value.label}
                titleStyle={styles.titleStyle}
                avatar={false}
                height={20}
              />
            </View>  
            ))
          }
          </View>
        </TouchableOpacity>
      </Card>
    )
  }

  return (
    <ScrollView style={{height: '80%'}}>
      {isPined && (
          <Text style={styles.pin}>Pined</Text>)
      }
      <View style={isList ? styles.container : null}>
        {notes.map((item, index)=>(
          item.isPined === true && (
            noteLists(item, index)
            )))}
      </View>
      {isPined && (
          <Text style={styles.other}>Other</Text>)
      }
      <View style={isList ? styles.container : null}>
        {notes.map((item, index) =>(
          item.isPined === false && (
           noteLists(item, index)
          )
        ))}
      </View>
    </ScrollView>
  );
};

export default NoteList;
