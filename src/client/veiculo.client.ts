import { Veiculo } from "@/model/veiculo";
import axios, {AxiosInstance} from "axios";

class VeiculoClient{

    private axiosVeiculo : AxiosInstance;

    constructor(){
        this.axiosVeiculo = axios.create({
            baseURL:"http://localhost:8080/api/veiculo",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Veiculo>{
        try{
            return(await this.axiosVeiculo.get<Veiculo>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Veiculo[]>{
        try{
            return(await this.axiosVeiculo.get<Veiculo[]>(`/lista`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAtivos(): Promise<Veiculo[]> {
        try {
            return (await this.axiosVeiculo.get<Veiculo[]>('/ativo')).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(veiculo: Veiculo) : Promise<string>{
        try{
            return(await this.axiosVeiculo.post(``, veiculo)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(id: number, veiculo: Veiculo) : Promise<string>{
        try{
            return(await this.axiosVeiculo.put(`/${id}`, veiculo)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number) : Promise<string>{
        try{
            return(await this.axiosVeiculo.delete(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }    
}

export default new VeiculoClient();