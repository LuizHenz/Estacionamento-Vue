import { Configuracao } from "@/model/configuracao";
import axios, {AxiosInstance} from "axios";

export class ConfiguracaoClient{

    private axiosConfiguracao : AxiosInstance;

    constructor(){
        this.axiosConfiguracao = axios.create({
            baseURL:"http://localhost:8080/api/configuracao",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Configuracao>{
        try{
            return(await this.axiosConfiguracao.get<Configuracao>(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listarAll() : Promise<Configuracao[]>{
        try{
            return(await this.axiosConfiguracao.get<Configuracao[]>(`/listar`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(configuracao: Configuracao) : Promise<void>{
        try{
            return(await this.axiosConfiguracao.post(`/`, configuracao)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(configuracao: Configuracao) : Promise<void>{
        try{
            return(await this.axiosConfiguracao.put(`/`, configuracao)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(configuracao: Configuracao) : Promise<string>{
        try{
            return(await this.axiosConfiguracao.delete(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }    
}