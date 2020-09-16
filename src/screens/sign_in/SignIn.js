import React, {Fragment, useState} from 'react';
import {View, StatusBar, TouchableOpacity} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Eye from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import {setSnackBarMsg} from '../../config/config';
import {login} from '../../services/userService';
import styles from './styles';

export const SignIn = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const [isEyeOff, setIsEyeOff] = useState(true)

  const handleChange = () => {
    setIsLoading(true)
    login(Email, Password)
      .then( (res) => {
      try{
        let userId = res.data.id
        AsyncStorage.multiSet([['userId', userId],['userData', JSON.stringify(res.data)]])
      }catch(error){console.warn(error)}
        setIsLoading(false)
        setSnackBarMsg('Login Sucessfull','green');
        navigation.navigate('drawer');
      })
      .catch((err) => {
        setIsLoading(false)
        setSnackBarMsg('Login Failed','red');
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
        <StatusBar backgroundColor="#007aff" barStyle="light-content" />
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
        <View style={styles.passwordContainer}>
        <Input
          errorStyle={styles.error}
          errorMessage={isValidPassword ? null : 'Invalid Password'}
          inputContainerStyle={styles.passworInput}
          placeholder="Password"
          onChangeText={(value) => setPassword(value)}
          onBlur={passwordValidation}
          leftIcon={<Icon name="lock" size={30} color="black" />}
          secureTextEntry={isEyeOff}
        />
        <TouchableOpacity onPress={()=> setIsEyeOff(!isEyeOff)}>
          <Eye name={isEyeOff? 'eye-off' : 'eye'} size={20} style={styles.eyeStyle}/>
        </TouchableOpacity>
        </View>
        <Button
          loading={isLoading}
          loadingProps={{size: 25}}
          containerStyle={styles.button}
          titleStyle={styles.buttonFont}
          title="Login"
          onPress={() => handleChange()}
        />
        <Button
          containerStyle={styles.button}
          titleStyle={styles.buttonFont}
          title="SignUp"
          onPress={() => navigation.navigate('signUp')}
        />
        <Text
          style={styles.linkingUrl}
          onPress={() => navigation.navigate('sendEmail')}>
          Forget Password
        </Text>
    </View>
  );
};
export default SignIn;
