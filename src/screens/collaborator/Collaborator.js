import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './style'
import ArrowLeft from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import User from 'react-native-vector-icons/FontAwesome'
import AddUser from 'react-native-vector-icons/Feather'

const Collaborator = () => {

const [email, setEmail] = useState('@email');

  try {
    AsyncStorage.getItem('userData').then((res) => {
      setEmail(JSON.parse(res).email);
    });
  } catch {
    console.warn('Somthing Went Wrong');
  }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ArrowLeft name="arrow-left" size={32}/>
                <View style={styles.collabAndSaveContainer}>
                <Text style={styles.title}>Collaborator</Text>
                <TouchableOpacity>
                <Text style={styles.saveTitle}>SAVE</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.emailContainer}>
                <User name='user-circle-o' size={25}/>
                <Text style={styles.email}>{email}</Text>
            </View>
            <View style={styles.addUser}>
                <AddUser name='user-plus' size={25}/>
                <TextInput style={styles.inputEmail} 
                autoFocus={true}
                placeholder='Person or email to share with'/>
            </View>
        </View>
    )
}

export default Collaborator
