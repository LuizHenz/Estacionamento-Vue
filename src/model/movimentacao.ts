import { AbstractEntity } from "./abstract.entity"
import { Condutor } from "./condutor"
import { Veiculo } from "./veiculo"

export class Movimentacao extends AbstractEntity
{

    veiculo!: Veiculo
    condutor!: Condutor
    entrada!: Date
    saida!: Date
    tempoHora!: number
    tempoMinuto!: number
    tempoDesconto!: Date
    valorDesconto!: number
    valorMulta!: number
    valorHoraTotal!: number
    valorHoraMulta!: number
    tempoMulta!: number
    valorTotal!: number
    
    constructor(){
        super()
        this.ativo=true
    }
}
