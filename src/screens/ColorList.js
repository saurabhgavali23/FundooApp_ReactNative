import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

const ColorList = () => {
  const DATA = [
    {title: 'BLACK', id: '#000000'},
    {title: 'MAROON', id: '#800000'},
    {title: 'WHITE', id: '#FFFFFF'},
    {title: 'salmon5', id: '#CFAFAF'},
    {title: 'dustyrose', id: '#D0C0C0'},
    {title: 'indianred4', id: '#DBA9A9'},
    {title: 'brown', id: '#DF9D9D'},
    {title: 'OLIVE', id: '#808000'},
    {title: 'LIME', id: '#00FF00'},
    {title: 'GREEN', id: '#008000'},
    {title: 'AQUA', id: '#00FFFF'},
    {title: 'TEAL', id: '#008080'},
    {title: 'NAVY', id: '#000080'},
    {title: 'INDIANRED', id: '#CD5C5C'},
    {title: 'rosybrown', id: '#CFAFAF'},
    {title: 'indianred', id: '#EABCBC'},
    {title: 'firebrick5', id: '#E69898'},
    {title: 'strawberry', id: '#EDA2A2'},
    {title: 'bloodred', id: '#FF6666'},
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: item.id,
            margin: 5,
            width: 30,
            height: 30,
            borderRadius: 50,
          }}></View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default ColorList;
