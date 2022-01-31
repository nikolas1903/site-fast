import  { http } from './config'


export default {

    login:(login) => {
        return http.post('Usuario/Login', login)
    }
}