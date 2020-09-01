import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchNotes from '../screens/SearchNotes';

const DashBoard = ({navigation}) => {
  return (
    <View>
      <View >
      <Header
            leftComponent={
              <Icon
                name="ios-menu"
                size={30}
                onPress={() => navigation.openDrawer()}
              />
            }
            centerComponent={<SearchNotes />}
            rightComponent={
              <Icon
                name="person-circle-outline"
                size={30}
                onPress={() => navigation.navigate()}
              />
            }
          />
          </View>
          <View style={styles.container}>
          <Text style={styles.text}>FundooApp</Text>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    flexDirection: 'row-reverse',
    alignItems: 'flex-start'
  },
});

export default DashBoard;
