import  axios  from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const registerData = (FirstName, LastName, Email, Password) => {

    let Data = {
        firstName: FirstName,
        lastName: LastName,
        service: "advance",
        email: Email,
        password: Password
    }
    return axios.post(
        'http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',
        Data        
    )
}

export const login = (Email, Password) => {
    let Data ={
        email: Email,
        password: Password
    }

    return axios.post(
        'http://fundoonotes.incubation.bridgelabz.com/api/user/login',
        Data
    )
}

export const sendEmail = (Email) =>{
    let Data ={
        email: Email
    }
     var token = AsyncStorage.getItem('userId')
    return axios.post(
        'http://fundoonotes.incubation.bridgelabz.com/api/user/reset',
        Data,{
            headers: {
                Authorization : token
            }
        }
    )
}