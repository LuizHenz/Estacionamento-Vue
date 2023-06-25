import { Configuracao } from "@/model/configuracao";
import axios, {AxiosInstance} from "axios";

class ConfiguracaoClient{

    private axiosConfiguracao : AxiosInstance;

    constructor(){
        this.axiosConfiguracao = axios.create({
            baseURL:"http://localhost:8080/api/configuracao",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Configuracao>{
        try{
            return(await this.axiosConfiguracao.get<Configuracao>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Configuracao[]>{
        try{
            return(await this.axiosConfiguracao.get<Configuracao[]>(`/lista`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(configuracao: Configuracao) : Promise<string>{
        try{
            return(await this.axiosConfiguracao.post(``, configuracao)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(id: number, configuracao: Configuracao) : Promise<string>{
        try{
            return(await this.axiosConfiguracao.put(`/${id}`, configuracao)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }    
}

export default new ConfiguracaoClient();