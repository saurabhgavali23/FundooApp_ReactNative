import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './style'
import ArrowLeft from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import User from 'react-native-vector-icons/FontAwesome'
import AddUser from 'react-native-vector-icons/Feather'

const Collaborator = ({navigation}) => {

const [email, setEmail] = useState('@email');
const [isValidEmail, setIsValidEmail] = useState(false)
const [userEmail, setUserEmail] = useState();

  try {
    AsyncStorage.getItem('userData').then((res) => {
      setEmail(JSON.parse(res).email);
    });
  } catch {
    console.warn('Somthing Went Wrong');
  }

  const emailValidation = () => {
    var emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!emailReg.test(userEmail)) {
      setIsValidEmail(true);
      return false
    } else {
      setIsValidEmail(false);
      return true
    }
  };

  const handleSaveData = () => {
    if(emailValidation()){
    navigation.navigate('createNote',{ collaborator: userEmail })
    }
  }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ArrowLeft name="arrow-left" size={32} 
                onPress={()=>navigation.navigate('createNote')}/>
                <View style={styles.collabAndSaveContainer}>
                <Text style={styles.title}>Collaborator</Text>
                <TouchableOpacity onPress={()=> handleSaveData()}>
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
                placeholder='Person or email to share with'
                onChangeText={(value)=>setUserEmail(value)}
                />
            </View>
            <View style={styles.errorContainer}>
            {
              isValidEmail === true? 
                <Text style={styles.textError}>Invalid Email Id</Text>
                : null
            }
            </View>
        </View>
    )
}

export default Collaborator
