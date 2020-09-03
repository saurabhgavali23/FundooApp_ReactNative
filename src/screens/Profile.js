import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from '../styles/ProfileCss';
import AsyncStorage from '@react-native-community/async-storage';
import Logout from 'react-native-vector-icons/MaterialCommunityIcons';

import { logout } from '../config/config'

const Profile = ({navigation}) => {

  const [firstName, setFirstName] = useState('firstname');
  const [lastName, setLastName] = useState('lastname');
  const [email, setEmail] = useState('@email');
  try {
    AsyncStorage.getItem('userData').then((res) => {
      setFirstName(JSON.parse(res).firstName);
      setLastName(JSON.parse(res).lastName);
      setEmail(JSON.parse(res).email);
    });
  } catch {
    console.warn('Somthing Went Wrong');
  }

  const handleLogout = async () =>{
    logout().then((res)=>{
      if(res)
        navigation.navigate('signIn')
    }) 
  }
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar
          size="large"
          rounded
          title="SG"
          activeOpacity={0.7}
          containerStyle={styles.avatar}
        />
        <View style={{marginLeft: '10%'}}>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.emails}>{email}</Text>
        </View>
      </View>
      <View style={styles.logout}>
        <Logout.Button name="logout" size={35}
          onPress={()=> handleLogout()}
        />
      </View>
    </View>
  );
};

export default Profile;
