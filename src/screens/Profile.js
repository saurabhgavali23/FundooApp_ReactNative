import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from '../styles/ProfileCss'

const Profile = () => {
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
         <View>
         <Text style={styles.name}>Saurabh Gavali</Text>
         </View>
      </View>
     
    </View>
  );
};

export default Profile;
