import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {useHistory} from 'react-router-native';
import {confirmPassword} from '../services/userService';

const ResetPassword = () => {
  const history = useHistory();

  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [NewPassword, setNewPassword] = useState('');

  const handleChange = () => {
    console.log(ConfirmPassword, NewPassword);
    confirmPassword(ConfirmPassword, NewPassword)
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text style={styles.text}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        onChangeText={(value) => setConfirmPassword(value)}
        value={ConfirmPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="New password"
        onChangeText={(value) => setNewPassword(value)}
        value={NewPassword}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.userButton} onPress={handleChange}>
          <Text style={styles.btnText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userButton}
          onPress={() => history.push('/signin')}>
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
});
export default ResetPassword;
