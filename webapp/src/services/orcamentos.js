import  { http } from './config'


export default {

    listar:() => {
        return http.get('Orcamento/Listar')
    },

    cadastrar:(orcamento) => {
        return http.post('Orcamento/Cadastrar', orcamento)
    }
}