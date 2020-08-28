import  axios  from 'axios'

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
