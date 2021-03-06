import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Calendar from 'react-native-vector-icons/AntDesign';
import Time from 'react-native-vector-icons/Ionicons';
import DateAndTimePicker from '@react-native-community/datetimepicker';
import styles from './styles'

const Reminder = ({setChipDateTime}) => {
  const [isDateAndTimeVisible, setIsDateAndTimeVisible] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [mode, setMode] = useState('date');

  const showDate = () => {
    setIsDateAndTimeVisible(!isDateAndTimeVisible);
    setMode('date');
  };
  const showTime = () => {
    setIsDateAndTimeVisible(!isDateAndTimeVisible);
    setMode('time');
  };

  const pickDataAndTime = async (event, selectedDate) => {
    
    if (mode === 'date') {
      let currentDate = new Date(selectedDate).toLocaleDateString()
      setDate(currentDate);
    } else {
      let currentTime = new Date(selectedDate).toLocaleTimeString()
      setTime(currentTime);
    }
    setChipDateTime(date+','+time)
    await setIsDateAndTimeVisible(!isDateAndTimeVisible);
  };

  const hideDateAndTime = async () => {
    await setIsDateAndTimeVisible(!isDateAndTimeVisible);
  };

  return (
    <View>
      <Text style={styles.modelText}>Add reminder</Text>
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder={date}
            style={styles.modalInput}
            underlineColorAndroid="black"
            editable={false}
            value={date}
          />
          <TouchableOpacity onPress={() => showDate()}>
            <Calendar name="calendar" size={25} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder={time}
            style={styles.modalInput}
            underlineColorAndroid="black"
            editable={false}
            value={time}
          />
          <TouchableOpacity onPress={() => showTime()}>
            <Time name="time-outline" size={29} />
          </TouchableOpacity>
        </View>
      </View>
      {isDateAndTimeVisible && (
        <DateAndTimePicker
          value={new Date()}
          mode={mode}
          is24Hour={false}
          onCancel={hideDateAndTime}
          onChange={pickDataAndTime}
        />
      )}
    </View>
  );
};

export default Reminder;
