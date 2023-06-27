import { AbstractEntity } from "./abstract.entity"

export class Configuracao extends AbstractEntity
{
    valorHora! : number
    valorMinutoMulta! : number
    incioExpediente!: Date
    fimExpediente!: Date
    tempoParaDesconto! : number
    tempoDeDesconto!: number
    gerarDesconto!: boolean
    vagasMotos!: number
    vagasCarro!: number
    vagasVans!: number
    
    constructor(){
        super()
        this.ativo=true
    }

}