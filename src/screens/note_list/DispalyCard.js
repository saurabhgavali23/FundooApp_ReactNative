import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { RNChipView } from 'react-native-chip-view';
import {Card} from 'react-native-elements';
import styles from './styles';

const DisplayCard = ({item, isList, navigation, showDeleteOptions}) =>{
    let reminder = item.reminder !== undefined ? item.reminder.toString().slice(4, 21) : '';
    return(
      <Card
        containerStyle={[
          isList ? styles.card : styles.listStyle,
          {backgroundColor: item.color},
        ]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('createNote', {item: item, reminder: reminder, showDeleteOptions: showDeleteOptions})}>
          <Text style={styles.titleFont}>{item.title}</Text>
          <Text style={styles.discriptionFont}>{item.description}</Text>
          {reminder !== '' ? (
            <View style={styles.reminderAndLabelContainer}>
              <Text style={styles.titleStyle}>{reminder}</Text>
            </View>
          ) : null}
          <View>
          {
            item.noteLabels!==undefined &&
            item.noteLabels.map((value,index)=>(
              <View key={index} style={styles.reminderAndLabelContainer}>
              <Text style={styles.titleStyle}>{value.label}</Text>
            </View>  
            ))
          }
          </View>
          <View>
            {
              item.collaborators!==undefined &&
              item.collaborators.map((value,index)=>(
              <View key={index} style={styles.collaborator}>
                <RNChipView
                  title={value.firstName}
                  avatar={true}
                  maxWidth={10}
                  backgroundColor={item.color}
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
