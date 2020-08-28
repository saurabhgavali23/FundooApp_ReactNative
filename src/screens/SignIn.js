import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {useHistory} from 'react-router-native';
import Snackbar from 'react-native-snackbar';
import { login } from '../services/userService'

const SignIn = () => {
  const history = useHistory();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [isValid, setisValid] = useState(true);

  const handleChange = () => {
    login(Email,Password).then(res=>{
      Snackbar.show({
        text: "Login Sucessfull",
        duration: Snackbar.LENGTH_LONG,
      })
    }).catch(err=>{
      Snackbar.show({
        text:  "login faild",
        duration: Snackbar.LENGTH_LONG,
      })
    })
  };

  const goToSignUp = () => {
    history.push({
      pathname: 'signup',
    });
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginLeft: 20,
    marginBottom: 10,
    alignItems: 'stretch',
  },

  text: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },

  userButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
    padding: 15,
    marginLeft: 20,
    marginRight: 22,
    width: '44%',
  },

  btnText: {
    fontSize: 20,
    justifyContent: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  errorText: {
    color: 'red',
    marginLeft: 18,
    fontSize: 17,
  },
});
export default SignIn;
