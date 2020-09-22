import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './styles';
import {RNChipView} from 'react-native-chip-view';

const DisplayCard = ({item, isList, navigation}) =>{
    let reminder = item.reminder !== undefined ? item.reminder.toString().slice(4, 21) : '';
    return(
      <Card
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
            item.noteLabels!==undefined &&
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
 export default DisplayCard 
