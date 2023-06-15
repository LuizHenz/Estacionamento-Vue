import { Movimentacao } from "@/model/movimentacao";
import axios, {AxiosInstance} from "axios";

export class MovimentacaoClient{

    private axiosMovimentacao : AxiosInstance;

    constructor(){
        this.axiosMovimentacao = axios.create({
            baseURL:"http://localhost:8080/api/movimentacao",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Movimentacao>{
        try{
            return(await this.axiosMovimentacao.get<Movimentacao>(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listarAll() : Promise<Movimentacao[]>{
        try{
            return(await this.axiosMovimentacao.get<Movimentacao[]>(`/listar`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(movimentacao: Movimentacao) : Promise<void>{
        try{
            return(await this.axiosMovimentacao.post(`/`, movimentacao)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(movimentacao: Movimentacao) : Promise<void>{
        try{
            return(await this.axiosMovimentacao.put(`/`, movimentacao)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(movimentacao: Movimentacao) : Promise<string>{
        try{
            return(await this.axiosMovimentacao.delete(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }    
}