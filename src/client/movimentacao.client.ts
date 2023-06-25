import { Movimentacao } from "@/model/movimentacao";
import axios, {AxiosInstance} from "axios";
import configuracaoClient from "./configuracao.client";

class MovimentacaoClient{

    private axiosMovimentacao : AxiosInstance;

    constructor(){
        this.axiosMovimentacao = axios.create({
            baseURL:"http://localhost:8080/api/movimentacao",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Movimentacao>{
        try{
            return(await this.axiosMovimentacao.get<Movimentacao>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Movimentacao[]>{
        try{
            return(await this.axiosMovimentacao.get<Movimentacao[]>(`/lista`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findByAbertas() : Promise<Movimentacao[]> {
        try {
            return (await this.axiosMovimentacao.get<Movimentacao[]>('/abertas')).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(movimentacao: Movimentacao) : Promise<string>{
        try{
            return(await this.axiosMovimentacao.post(``, movimentacao)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(id: number, movimentacao: Movimentacao) : Promise<string>{
        try{
            return(await this.axiosMovimentacao.put(`/${id}`, movimentacao)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async fecharMovimentacao(id : number) : Promise<string> {
        try { 
            return (await this.axiosMovimentacao.put(`/saida/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number) : Promise<string>{
        try{
            return(await this.axiosMovimentacao.delete(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }    
}

export default new MovimentacaoClient();