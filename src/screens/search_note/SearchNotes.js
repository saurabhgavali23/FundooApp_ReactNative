import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './SearchNoteCss'

export const SearchNotes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchIcon}>
        <Icon name="search1" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Search Notes"
          placeholderTextColor="gray"
        />
      </View>
    </View>
  );
};

export default SearchNotes;
