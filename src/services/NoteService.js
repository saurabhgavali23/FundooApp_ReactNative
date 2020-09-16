import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const saveNotes = async (data) => {  

    var token = await AsyncStorage.getItem('userId')
    return axios.post(
        'http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',
        data,{
            headers:{
                Authorization : token
            }
        }
    )
}
