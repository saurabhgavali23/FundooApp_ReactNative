import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { registerData } from '../services/userService'
import { setSnackBarMsg } from '../config/config';

const SignUp = ({navigation}) => {

  const [FirstName, setFirstName] = useState('')
  const [FirstNameError, setFirstNameError] = useState('')
  const [LastName, setLastName] = useState('')
  const [LastNameError, setLastNameError] = useState('')
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('')
  const [EmailError, setEmailError] = useState('')
  const [PasswordError, setPasswordError] = useState('')
  const [isValid, setisValid] = useState(true);

  const handleChange = () =>{

  registerData(FirstName, LastName, Email, Password)
    .then(res=>{
      setSnackBarMsg(res.data.data.message)
      goToSignIn();
    }).catch(err=>{
      setSnackBarMsg("user already exist")
    })
  }

  const goToSignIn = () =>{
    navigation.navigate('signin')
  }

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

  const passwordValidation = () =>{
    var passReg =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/
    if(!passReg.test(Password)){
      setPasswordError("Invalid Password")
      setisValid(false)
    }else{
      setPasswordError(null)
      setisValid(true)
    }
  }

  const FirstnameValidation = () =>{
      var nameReg =/([A-Za-z0-9\. -]+)/
      if(!nameReg.test(FirstName)){
          setFirstNameError("invalid First name")
          setisValid(false)
      }else{
          setFirstNameError(null)
          setisValid(true)
      }
  }

  const LastnameValidation = () =>{
    var nameReg =/([A-Za-z0-9\. -]+)/
    if(!nameReg.test(FirstName)){
        setLastNameError("invalid Last name")
        setisValid(false)
    }else{
        setLastNameError(null)
        setisValid(true)
    }
}

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <Text style={styles.text}>SignUp</Text>
          <View>
          <TextInput
              style={styles.input}
              placeholder="FirstName"
              onChangeText={(value) => setFirstName(value)}
              onBlur={FirstnameValidation}
              value={FirstName}
            />
            {isValid === false ? 
              <Text style={styles.errorText}>{FirstNameError}</Text>: null
            }
            <TextInput
              style={styles.input}
              placeholder="LastName"
              onChangeText={(value) => setLastName(value)}
              onBlur={LastnameValidation}
              value={LastName}
            />
            {isValid === false ? 
              <Text style={styles.errorText}>{LastNameError}</Text>: null
            }
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
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={value => setPassword(value)}
              onBlur={passwordValidation}
              value={Password}
            />
            {isValid === false ? 
              <Text style={styles.errorText}>{PasswordError}</Text>: null
            }   
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
              style={styles.userButton}
              onPress={handleChange}
              disabled={!isValid}
              >
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.userButton}
              onPress={goToSignIn}
              >
                <Text style={styles.btnText}>SignIn</Text>
              </TouchableOpacity>
            </View>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 15,
    marginLeft: 20,
    marginBottom: 10,
    alignItems: 'stretch'
  },

  text: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10
  },

  userButton:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
    padding: 15,
    marginLeft: 20,
    marginRight: 22,
    width: "44%"
  },
  
  btnText: {
    fontSize: 20,
    justifyContent: 'center'
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },

  errorText:{
      color: 'red',
      marginLeft: 18,
      fontSize: 17
  }
});
export default SignUp;
