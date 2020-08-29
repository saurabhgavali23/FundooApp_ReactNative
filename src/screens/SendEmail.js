import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {sendEmail} from '../services/userService';
import { setSnackBarMsg } from '../config/config';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  input: {
    width: '85%',
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    marginBottom: 10,
  },
  userButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
    padding: 15,
    marginLeft: 10,
    marginRight: 20,
    width: '43%',
  },

  btnText: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },

  errorText:{
    color: 'red',
    fontSize: 17,
    textAlign: 'right',
  }
});
export default SendEmail;
