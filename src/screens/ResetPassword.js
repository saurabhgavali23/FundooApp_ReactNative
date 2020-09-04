import React, {Fragment, useState} from 'react';
import {View, StatusBar} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/AuthScreensCss';

export const ResetPassword = ({navigation}) => {
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [isValidConfrPassword, setIsValidConfrPassword] = useState(true);
  const [NewPassword, setNewPassword] = useState('');
  const [isValidNewPassword, setIsValidNewPassword] = useState(true);

  const handleChange = () => {
    console.log(ConfirmPassword, NewPassword);
  };

  const confrPasswordValidation = () => {
    var passReg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
    if (!passReg.test(ConfirmPassword)) {
      setIsValidConfrPassword(false);
    } else {
      setIsValidConfrPassword(true);
    }
  };

  const newPasswordValidation = () => {
    if (!ConfirmPassword === NewPassword) {
      setIsValidNewPassword(false);
    } else {
      setIsValidNewPassword(true);
    }
  };

  return (
    <View style={styles.container}>
      <Fragment>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={styles.text}>Reset Password</Text>
        <Input
          errorStyle={styles.error}
          errorMessage={isValidConfrPassword ? null : 'Invalid Password'}
          inputContainerStyle={styles.input}
          placeholder="Confirm Password"
          onChangeText={(value) => setConfirmPassword(value)}
          onBlur={confrPasswordValidation}
          leftIcon={<Icon name="lock" size={30} color="black" />}
          secureTextEntry
        />
        <Input
          errorStyle={styles.error}
          errorMessage={isValidNewPassword ? null : 'Invalid New Password'}
          inputContainerStyle={styles.input}
          placeholder="New Password"
          onChangeText={(value) => setNewPassword(value)}
          onBlur={newPasswordValidation}
          leftIcon={<Icon name="lock" size={30} color="black" />}
          secureTextEntry
        />
        <Button
          containerStyle={styles.button}
          title="Submit"
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
export default ResetPassword;
