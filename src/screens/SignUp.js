import React, {Fragment, useState} from 'react';
import {View, StatusBar} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {setSnackBarMsg} from '../config/config';
import {registerData} from '../services/userService';
import styles from '../styles/SignUpCss';

export const SignUp = ({navigation}) => {
  const [FirstName, setFirstName] = useState('');
  const [isValidFirstName, setIsValidFirstName] = useState(true);
  const [LastName, setLastName] = useState('');
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleChange = () => {
    registerData(FirstName, LastName, Email, Password)
      .then((res) => {
        setSnackBarMsg(res.data.data.message);
        goToSignIn();
      })
      .catch((err) => {
        setSnackBarMsg('user already exist');
      });
    console.log(FirstName, LastName, Email, Password);
  };

  const goToSignIn = () => {
    navigation.navigate('signIn');
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

  const FirstnameValidation = () => {
    var nameReg = /([A-Za-z0-9\. -]+)/;
    if (!nameReg.test(FirstName)) {
      setIsValidFirstName(false);
    } else {
      setIsValidFirstName(true);
    }
  };

  const LastnameValidation = () => {
    var nameReg = /([A-Za-z0-9\. -]+)/;
    if (!nameReg.test(FirstName)) {
      setIsValidLastName(false);
    } else {
      setIsValidLastName(true);
    }
  };

  return (
    <View style={styles.container}>
      <Fragment>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={styles.text}>SignUp</Text>
        <Input
          errorStyle={styles.error}
          errorMessage={isValidFirstName ? null : 'Invalid FirstName'}
          inputContainerStyle={styles.input}
          placeholder="FirstName"
          onChangeText={(value) => setFirstName(value)}
          onBlur={FirstnameValidation}
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
        <Input
          errorStyle={styles.error}
          errorMessage={isValidLastName ? null : 'Invalid LastName'}
          inputContainerStyle={styles.input}
          placeholder="LastName"
          onChangeText={(value) => setLastName(value)}
          onBlur={LastnameValidation}
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
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
          title="Register"
          onPress={() => handleChange()}
        />
        <Button
          containerStyle={styles.button}
          title="SignIn"
          onPress={() => navigation.navigate('signIn')}
        />
      </Fragment>
    </View>
  );
};
export default SignUp;
