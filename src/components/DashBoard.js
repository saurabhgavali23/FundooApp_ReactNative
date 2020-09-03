import React, {useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import NoteIcon from 'react-native-vector-icons/AntDesign';
import SearchNotes from '../screens/SearchNotes';
import RBSheet from 'react-native-raw-bottom-sheet';
import Profile from '../screens/Profile';

const DashBoard = ({navigation}) => {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <View>
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
              onPress={() => refRBSheet.current.open()}
            />
          }
        />
      </View>
      <View style={styles.text}>
        <Text style={{fontSize:30}}>FundooApp</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plusicon: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    marginRight: '5%',
    marginBottom: '5%',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashBoard;
