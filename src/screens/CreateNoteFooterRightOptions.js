import React,{useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import Collaborate from 'react-native-vector-icons/Feather';
import Share from 'react-native-vector-icons/AntDesign';
import Copy from 'react-native-vector-icons/Ionicons';
import Labels from 'react-native-vector-icons/MaterialCommunityIcons';
import Delete from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';

const CreateNoteFooterRightOptions = () => {

  const [selectedId, setSelectedId] = useState(null)

  const DATA =[
    {id: 'BLACK', title: '#000000'},
    {id: 'MAROON', title: '#800000'},
    {id: 'OLIVE', title: '#808000'},
    {id: 'LIME', title: '#00FF00'},
    {id: 'GREEN', title: '#008000'},
    {id: 'AQUA', title: '#00FFFF'},
    {id: 'TEAL', title: '#008080'},
    {id: 'NAVY', title: '#000080'},
    {id: 'INDIANRED', title: '#CD5C5C'}
  ]

  const renderItem = ({item}) =>{
    return(
      <View style={styles.flatlist}>
      <TouchableOpacity>
        <Button containerStyle={styles.buttonList}
          buttonStyle={{
            backgroundColor: item.title,
          }}
        />
      </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Delete name="delete" size={25} />
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Copy name="md-copy-outline" size={27} />
        <Text style={styles.text}>Make a copy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Share name="sharealt" size={27} />
        <Text style={styles.text}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Collaborate name="user-plus" size={27} />
        <Text style={styles.text}>Collaborator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Labels name="label-outline" size={25} />
        <Text style={styles.text}>Labels</Text>
      </TouchableOpacity>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
    marginTop: '10%',
  },
  option: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  text: {
    fontSize: 20,
    marginLeft: '10%',
  },
  title:{
    fontSize: 20,
  },
  flatlist:{
    flexDirection: 'row'
  },
  buttonList:{
    borderRadius: 40,
    width:'90%',
  }
});

export default CreateNoteFooterRightOptions;
