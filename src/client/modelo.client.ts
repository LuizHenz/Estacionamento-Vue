import { Modelo } from "@/model/modelo";
import axios, {AxiosInstance} from "axios";

export class ModeloClient{

    private axiosModelo : AxiosInstance;

    constructor(){
        this.axiosModelo = axios.create({
            baseURL:"http://localhost:8080/api/modelo",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Modelo>{
        try{
            return(await this.axiosModelo.get<Modelo>(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listarAll() : Promise<Modelo[]>{
        try{
            return(await this.axiosModelo.get<Modelo[]>(`/listar`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(modelo: Modelo) : Promise<void>{
        try{
            return(await this.axiosModelo.post(`/`, modelo)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(modelo: Modelo) : Promise<void>{
        try{
            return(await this.axiosModelo.put(`/`, modelo)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(modelo: Modelo) : Promise<string>{
        try{
            return(await this.axiosModelo.delete(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }
}
