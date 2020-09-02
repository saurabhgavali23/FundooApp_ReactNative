import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import NoteIcon from 'react-native-vector-icons/AntDesign';
import SearchNotes from '../screens/SearchNotes';

const DashBoard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.plusicon}>
        <NoteIcon name="pluscircle" size={60} onPress={() => navigation.navigate('createNote')} />
      </View>
      <View style={styles.header}>
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
              onPress={() => navigation.navigate('reminder')}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignContent: 'stretch',
  },
  plusicon: {
    marginBottom: '10%',
    marginRight: '10%',
  },
});

export default DashBoard;
