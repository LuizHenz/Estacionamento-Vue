import { Marca } from "@/model/marca";
import axios, {AxiosInstance} from "axios";

export class MarcaClient{

    private axiosMarca : AxiosInstance;

    constructor(){
        this.axiosMarca = axios.create({
            baseURL:"http://localhost:8080/api/marca",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Marca>{
        try{
            return(await this.axiosMarca.get<Marca>(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listarAll() : Promise<Marca[]>{
        try{
            return(await this.axiosMarca.get<Marca[]>(`/listar`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca: Marca) : Promise<void>{
        try{
            return(await this.axiosMarca.post(`/`, marca)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(marca: Marca) : Promise<void>{
        try{
            return(await this.axiosMarca.put(`/`, marca)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(marca: Marca) : Promise<string>{
        try{
            return(await this.axiosMarca.delete(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }    
}