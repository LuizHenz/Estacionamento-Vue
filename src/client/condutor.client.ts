import { Condutor } from "@/model/condutor";
import axios, {AxiosInstance} from "axios";

export class CondutorClient{

    private axiosCondutor : AxiosInstance;

    constructor(){
        this.axiosCondutor = axios.create({
            baseURL:"http://localhost:8080/api/marca",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Condutor>{
        try{
            return(await this.axiosCondutor.get<Condutor>(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listarAll() : Promise<Condutor[]>{
        try{
            return(await this.axiosCondutor.get<Condutor[]>(`/listar`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(condutor: Condutor) : Promise<void>{
        try{
            return(await this.axiosCondutor.post(`/`, condutor)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(condutor: Condutor) : Promise<void>{
        try{
            return(await this.axiosCondutor.put(`/`, condutor)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(condutor: Condutor) : Promise<string>{
        try{
            return(await this.axiosCondutor.delete(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }    
}