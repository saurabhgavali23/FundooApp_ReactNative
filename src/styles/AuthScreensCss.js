
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    width: '90%',
    marginBottom: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  error: {
    fontSize: 15,
    marginLeft: 20,
  },
  linkingUrl: {
    textDecorationLine: 'underline',
    fontSize: 20,
  },
  buttonFont:{
    fontSize: 20
  }
});

  export default styles;