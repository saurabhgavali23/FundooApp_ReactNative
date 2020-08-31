import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {sendEmail} from '../services/userService';
import { setSnackBarMsg } from '../config/config';
import styles from '../styles/SendigEmailCss'

const SendEmail = ({navigation}) => {

  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [isValid, setisValid] = useState(true);

  const handleChange = () => {
    console.log(Email);
    sendEmail(Email)
      .then((res) => {
        if(res.status == 200){
          setSnackBarMsg("Email Sent ")
          navigation.navigate('resetpassword')
        }
      })
      .catch((err) => {
        setSnackBarMsg("Faild to sent Email")
      });
  };

  const emailValidation = () =>{
    var emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if(!emailReg.test(Email)){
      setEmailError("Invalid Email")
      setisValid(false)
    }else{
      setEmailError('')
      setisValid(true)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text style={styles.text}>Send Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(value) => setEmail(value)}
        onBlur={emailValidation}
        value={Email}
      />
      {isValid === false ? 
        <Text style={styles.errorText}>{EmailError}</Text>: null
        } 
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.userButton} 
        onPress={handleChange}
        disabled={!isValid}
        >
          <Text style={styles.btnText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userButton}
          onPress={() => navigation.navigate('signin')}>
          <Text style={styles.btnText}>SignIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SendEmail;
