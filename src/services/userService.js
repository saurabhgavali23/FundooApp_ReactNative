import  axios  from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import Config from 'react-native-config'
import NoteApi from '../config/NoteApi'

export const registerData = (FirstName, LastName, Email, Password) => {

    let Data = {
        firstName: FirstName,
        lastName: LastName,
        service: "advance",
        email: Email,
        password: Password
    }
    return axios.post(
        Config.REACT_APP_BASE_URL+NoteApi.userSignUp,
        Data        
    )
}

export const login = (Email, Password) => {
    let Data ={
        email: Email,
        password: Password
    }

    return axios.post(
        Config.REACT_APP_BASE_URL+NoteApi.userLogin,
        Data
    )
}

export const sendEmail = (Email) =>{
    let Data ={
        email: Email
    }
     var token = AsyncStorage.getItem('userId')
    return axios.post(
        Config.REACT_APP_BASE_URL+NoteApi.userReset,
        Data,{
            headers: {
                Authorization : token
            }
        }
    )
}