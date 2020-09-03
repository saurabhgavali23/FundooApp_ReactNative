import React, {Fragment, useState} from 'react';
import {View, StatusBar} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {setSnackBarMsg} from '../config/config';
import {login} from '../services/userService';
import styles from '../styles/SignInCss';

export const SignIn = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleChange = () => {
    login(Email, Password)
      .then((res) => {
        AsyncStorage.setItem('userId', res.data.id)
        AsyncStorage.setItem('userData', JSON.stringify(res.data));
        setSnackBarMsg('Login Sucessfull');
        navigation.navigate('drawer');
      })
      .catch((err) => {
        setSnackBarMsg('Login Failed');
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

  const passwordValidation = () => {
    var passReg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
    if (!passReg.test(Password)) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
  };

  return (
    <View style={styles.container}>
      <Fragment>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={styles.text}>SignIn</Text>
        <Input
          errorStyle={styles.error}
          errorMessage={isValidEmail ? null : 'Invalid Email'}
          inputContainerStyle={styles.input}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
          onBlur={emailValidation}
          leftIcon={<Icon name="envelope" size={24} color="black" />}
        />
        <Input
          errorStyle={styles.error}
          errorMessage={isValidPassword ? null : 'Invalid Password'}
          inputContainerStyle={styles.input}
          placeholder="Password"
          onChangeText={(value) => setPassword(value)}
          onBlur={passwordValidation}
          leftIcon={<Icon name="lock" size={30} color="black" />}
          secureTextEntry
        />
        <Button
          containerStyle={styles.button}
          title="Login"
          onPress={() => handleChange()}
        />
        <Button
          containerStyle={styles.button}
          title="SignUp"
          onPress={() => navigation.navigate('signUp')}
        />
        <Text
          style={styles.linkingUrl}
          onPress={() => navigation.navigate('sendEmail')}>
          Forget Password
        </Text>
      </Fragment>
    </View>
  );
};
export default SignIn;
