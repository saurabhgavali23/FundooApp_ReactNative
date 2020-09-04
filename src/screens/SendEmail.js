import React, {Fragment, useState} from 'react';
import {View, StatusBar} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {setSnackBarMsg} from '../config/config';
import {sendEmail} from '../services/userService';
import styles from '../styles/AuthScreensCss'

export const SendEmail = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = () => {
    sendEmail(Email)
      .then((res) => {
        if(res.status == 200){
          setSnackBarMsg("Email Sent ")
          navigation.navigate('resetPassword')
        }
      })
      .catch((err) => {
        setSnackBarMsg("Faild to sent Email")
      });
  };

  const emailValidation = () => {
    var emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!emailReg.test(Email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  return (
    <View style={styles.container}>
      <Fragment>
      <StatusBar backgroundColor="#007aff" barStyle="light-content" />
        <Text style={styles.text}>Send Email</Text>
        <Input
          errorStyle={styles.error}
          errorMessage={isValidEmail ? null : 'Invalid Email'}
          inputContainerStyle={styles.input}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
          onBlur={emailValidation}
          leftIcon={<Icon name="envelope" size={24} color="black" />}
        />
        <Button
          containerStyle={styles.button}
          title="Reset Password"
          onPress={() => handleChange()}
        />
        <Button containerStyle={styles.button} title="SignIn" 
            onPress={()=> navigation.navigate('signIn')}
        />
      </Fragment>
    </View>
  );
};
export default SendEmail;
