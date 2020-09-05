import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const saveNotes = async (title, description) => {  

    const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        console.log("formdata", formData);
    var token = await AsyncStorage.getItem('userId')
    console.log("token", token);
    return axios.post(
        'http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',
        formData,{
            headers:{
                Authorization : token
            }
        }
    )
}
