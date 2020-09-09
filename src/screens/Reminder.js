import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Calendar from 'react-native-vector-icons/AntDesign';
import Time from 'react-native-vector-icons/Ionicons';
import DateAndTimePicker from '@react-native-community/datetimepicker';

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
    setChipDateTime(selectedDate)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
  },
  modal: {
    backgroundColor: '#fff',
    height: '40%',
    width: '80%',
    marginTop: '60%',
    marginLeft: '10%',
  },
  modalInput: {
    width: '70%',
    fontSize: 20,
  },
  modelText: {
    fontSize: 20,
    marginLeft: '3%',
    marginTop: '2%',
  },
  modalButtonContainer: {
    width: '60%',
    flexDirection: 'row',
    marginLeft: '50%',
    marginTop: '10%',
  },
  modelButton: {
    fontSize: 20,
    marginRight: '20%',
  },
});

export default Reminder;
