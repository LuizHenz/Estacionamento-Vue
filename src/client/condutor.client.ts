import { Condutor } from "@/model/condutor";
import axios, {AxiosInstance} from "axios";

class CondutorClient{

    private axiosCondutor : AxiosInstance;

    constructor(){
        this.axiosCondutor = axios.create({
            baseURL:"http://localhost:8080/api/condutor",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id: number) : Promise<Condutor>{
        try{
            return(await this.axiosCondutor.get<Condutor>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Condutor[]>{
        try{
            return(await this.axiosCondutor.get<Condutor[]>(`/lista`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAtivos(): Promise<Condutor[]> {
        try {
            return (await this.axiosCondutor.get<Condutor[]>('/ativo')).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(condutor: Condutor) : Promise<string>{
        try{
            return(await this.axiosCondutor.post(``, condutor)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(id: number, condutor: Condutor) : Promise<string>{
        try{
            return(await this.axiosCondutor.put(`/${id}`, condutor)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number) : Promise<string>{
        try{
            return(await this.axiosCondutor.delete(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }    
}

export default new CondutorClient();