import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from './ProfileCss';
import AsyncStorage from '@react-native-community/async-storage';
import Logout from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../components/context';

const Profile = () => {

  const [firstName, setFirstName] = useState('firstname');
  const [lastName, setLastName] = useState('lastname');
  const [email, setEmail] = useState('@email');

  const {signOut} = useContext(AuthContext)

  try {
    AsyncStorage.getItem('userData').then((res) => {
      if(res !== null){
        setFirstName(JSON.parse(res).firstName);
        setLastName(JSON.parse(res).lastName);
        setEmail(JSON.parse(res).email);
      }
    });
  } catch {
    console.warn('Somthing Went Wrong');
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
          onPress={()=> {signOut()}}
        />
      </View>
    </View>
  );
};

export default Profile;
