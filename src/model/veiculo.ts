import { AbstractEntity } from "./abstract.entity"
import { cor } from "./cor"
import { Marca } from "./marca"
import { Modelo } from "./modelo"
import { tipo } from "./tipo"

export class Veiculo extends AbstractEntity
{

    placa!: string
    marca!: Marca
    modelo!: Modelo
    cor!: cor
    tipo!: tipo
    ano!: number

    constructor(){
        super()
        this.ativo=true
    }
}
