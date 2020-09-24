import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import ArrowLeft from 'react-native-vector-icons/Feather';
import Plus from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Label from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements';

const CreateNewLable = ({navigation}) => {
  const [addLabel, setAddLabel] = useState([]);
  const [label, setLabel] = useState('');
  let selectedData = []

  const handleLabel = () => {
    setAddLabel([
      ...addLabel,
      {
        value: label,
        check: false
      },
    ]);
  };

  const handleCheckedLabel = (item,index) =>{
      
      addLabel[index] = {...addLabel[index],check: !item.check}
      setAddLabel(addLabel)
      selectedData.push(item.value)
   }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ArrowLeft name="arrow-left" size={32} 
        style={styles.arrow} 
        onPress={()=> navigation.navigate('createNote',{addLabels: selectedData})}/>
        <TextInput
          placeholder="Create new label"
          style={styles.input}
          onChangeText={(value) => setLabel(value)}
        />
      </View>
      <View>
        {label != '' ? (
          <TouchableOpacity
            style={styles.createLabel}
            onPress={() => handleLabel()}>
            <Plus name="plus" size={23} />
            <Text style={styles.text}>Create"{label}"</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View>
        {addLabel.length ? (
          <View style={styles.addLabel}>
            {addLabel.map((item, index) => (
             <View style={styles.subAddLabel} key={index}>
              <Label name="label-outline" size={25}/>
              <CheckBox 
                right
                containerStyle={styles.checkbox}
                size={25}
                textStyle={styles.checkboxTitle}
                iconRight
                title={item.value}
                checked={item.check}
                onPress={()=>handleCheckedLabel(item,index)}
                />
              </View>
            ))}
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default CreateNewLable;
