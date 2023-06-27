import { Condutor } from "./condutor";
import { Veiculo } from "./veiculo";

export class Recibo {
    entrada! : Date
    saida! : Date
    condutor! : Condutor
    veiculo! : Veiculo
    horas! : number
    horasDesconto! : number
    valor! : number
    desconto! : number
    
}