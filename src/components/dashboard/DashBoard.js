import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import NoteIcon from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';
import Profile from '../../screens/profile/Profile';
import SearchNotes from '../../screens/search_note/SearchNotes';
import styles from './styles'
import NoteList from '../../screens/note_list/NoteList';

const DashBoard = ({navigation}) => {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <View>
        <Header
        containerStyle={{backgroundColor:"#007aff"}}
          leftComponent={
            <Icon
              name="ios-menu"
              size={40}
              onPress={() => navigation.openDrawer()}
            />
          }
          centerComponent={<SearchNotes/>}
          rightComponent={
            <Icon
              name="person-circle-outline"
              size={40}
              onPress={() => refRBSheet.current.open()}
            />
          }
        />
      </View>
      <View>
      <NoteList/>
      </View>
      <View style={styles.plusicon}>
        <NoteIcon
          name="pluscircle"
          size={60}
          onPress={() => navigation.navigate('createNote')}
        />
      </View>
      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'tranperent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container:{
              borderTopStartRadius: 40,
              borderTopEndRadius: 40,
              shadowOffset:{
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5
            }
          }}
          height={300}
          >
            <Profile navigation={navigation}/>
          </RBSheet>
      </View>
    </View>
  );
};


export default DashBoard;
