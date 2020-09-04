import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const saveNotes = async (formData) => {  

    var token = await AsyncStorage.getItem('userId')
    return axios.post(
        'http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',
        formData,{
            headers:{
                'ContentType': 'applicationi/json',
                Authorization : token
            }
        }
    )
}
