import { AbstractEntity } from "./abstract.entity"

export class Configuracao extends AbstractEntity
{
    inicioExpediente!: Date
    fimExpediente!: Date
    tempoDesconto!: number
    gerarDesconto!: boolean
    necessarioDesconto!: number
    vagasMoto!: number
    vagasCarro!: number
    vagasVa!: number
    
    constructor(){
        super()
        this.ativo=true
    }

}