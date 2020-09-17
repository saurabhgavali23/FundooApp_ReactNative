import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import Config from 'react-native-config'
import NoteApi from '../config/NoteApi'

export const saveNotes = async (data) => {  

    var token = await AsyncStorage.getItem('userId')
    return axios.post(
        Config.REACT_APP_BASE_URL+NoteApi.addNotes,
        data,{
            headers:{
                Authorization : token
            }
        }
    )
}

export const getNotes = async () => {

    var token = await AsyncStorage.getItem('userId')
    return axios.get(
        Config.REACT_APP_BASE_URL+NoteApi.getNotes,
        {
            headers:{
                Authorization : token
            }
        }
    )
}
