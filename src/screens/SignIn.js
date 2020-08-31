import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { login } from '../services/userService'
import { setSnackBarMsg } from '../config/config';
import styles from '../styles/SignInCss'

const SignIn = ({navigation}) => {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [isValid, setisValid] = useState(true);

  const handleChange = () => {
    login(Email,Password).then(res=>{
      AsyncStorage.setItem('userId', res.data.id);
      setSnackBarMsg("Login Sucessfull")
      navigation.navigate('dashboard')
    }).catch(err=>{
      setSnackBarMsg("Login Failed")
    })
  };

  const goToSignUp = () => {
    navigation.navigate('signup')
  };

  const emailValidation = () => {
    var emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!emailReg.test(Email)) {
      setEmailError('Invalid Email');
      setisValid(false);
    } else {
      setEmailError('');
      setisValid(true);
    }
  };

  const passwordValidation = () => {
    var passReg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
    if (!passReg.test(Password)) {
      setPasswordError('Invalid Password');
      setisValid(false);
    } else {
      setPasswordError(null);
      setisValid(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text style={styles.text}>SignIn</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
          onBlur={emailValidation}
          value={Email}
        />
        {isValid === false ? <Text style={styles.errorText}>{EmailError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          onBlur={passwordValidation}
          value={Password}
        />
        {isValid === false ? <Text style={styles.errorText}>{PasswordError}</Text> : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.userButton}
            onPress={handleChange}
            disabled={!isValid}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userButton} onPress={goToSignUp}>
            <Text style={styles.btnText}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <Text
        style={styles.linkingUrl}
        onPress={()=> navigation.navigate('sendemail')}
        >
        Forget Password
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
