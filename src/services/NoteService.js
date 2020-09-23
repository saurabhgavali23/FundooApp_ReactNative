import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import Config from 'react-native-config'
import NoteApi from '../config/NoteApi'

const URL = Config.REACT_APP_BASE_URL;

export const saveNotes = async (data) => {  

    var token = await AsyncStorage.getItem('userToken')
    return axios.post(
        URL+NoteApi.addNotes,
        data,{
            headers:{
                Authorization : token
            }
        }
    )
}

export const getNotes = async () => {

    var token = await AsyncStorage.getItem('userToken')
    return axios.get(
        URL+NoteApi.getNotes,
        {
            headers:{
                Authorization : token
            }
        }
    )
}

export const updateNotes = async (data) => {
    
    var token = await AsyncStorage.getItem('userToken')
    return axios.post(
        URL+NoteApi.updateNotes,
        data,{
            headers:{
                Authorization : token
            }
        }
    )
}

export const saveNoteLabels = async (data) => {

    var token = await AsyncStorage.getItem('userToken')
    return axios.post(
        URL+NoteApi.saveNoteLabels,
        data,{
            headers:{
                Authorization : token
            }
        }
    ) 
}

export const pinUnPinNotes = async (data) => {

    var token = await AsyncStorage.getItem('userToken')
    return axios.post(
        URL+NoteApi.pinUnpinNotes,
        data,{
            headers:{
                Authorization : token
            }
        }
    )
}

export const setNoteColor = async (data) => {

    var token = await AsyncStorage.getItem('userToken')
    return axios.post(
        URL+NoteApi.NoteColor,
        data,{
            headers:{
                Authorization : token
            }
        }
    )
}

export const setArchiveNote = async (data) => {

    var token = await AsyncStorage.getItem('userToken')
    return axios.post(
        URL+NoteApi.ArchiveNote,
        data,{
            headers:{
                Authorization : token
            }
        }
    )
}

export const trashNotes = async (data) => {

    var token = await AsyncStorage.getItem('userToken')
    return axios.post(
        URL+NoteApi.TrashNotes,
        data,{
            headers:{
                Authorization : token
            }
        }
    )
}

export const permanentDeleteNotes = async (data) => {

    var token = await AsyncStorage.getItem('userToken')
    return axios.post(
        URL+NoteApi.PermanentDeleteNotes,
        data,{
            headers:{
                Authorization : token
            }
        }
    )
}
