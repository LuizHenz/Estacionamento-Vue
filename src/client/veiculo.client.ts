import { Veiculo } from "@/model/veiculo";
import axios, {AxiosInstance} from "axios";

export class VeiculoClient{

    private axiosVeiculo : AxiosInstance;

    constructor(){
        this.axiosVeiculo = axios.create({
            baseURL:"http://localhost:8080/api/marca",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Veiculo>{
        try{
            return(await this.axiosVeiculo.get<Veiculo>(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listarAll() : Promise<Veiculo[]>{
        try{
            return(await this.axiosVeiculo.get<Veiculo[]>(`/listar`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(veiculo: Veiculo) : Promise<void>{
        try{
            return(await this.axiosVeiculo.post(`/`, veiculo)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(veiculo: Veiculo) : Promise<void>{
        try{
            return(await this.axiosVeiculo.put(`/`, veiculo)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(veiculo: Veiculo) : Promise<string>{
        try{
            return(await this.axiosVeiculo.delete(`/$(id)`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }    
}