<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Movimentações</h1>

        <div v-if="mensagem.ativo" class="row">
            <div class="col-md-12 text-start">
                <div :class="mensagem.css" role="alert">
                    <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Placa do Veiculo *</label>
                <select v-model="movimentacao.veiculo" class="form-select">
                    <option v-for="item in veiculo" :value="item"> {{ item.placa }}</option>
                </select>
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Nome do Condutor *</label>
                <select v-model="movimentacao.condutor" class="form-select">
                    <option v-for="item in condutor" :value="item"> {{ item.nome }}</option>
                </select>
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Entrada *</label>
                <input type="text" this class="form-control" placeholder="yyyy-mm-ddThh:min:ss" v-model="movimentacao.entrada">
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Saida *</label>
                <input type="text" this class="form-control" v-model="movimentacao.saida">
            </div>
            <div class="col-md-12 text-start">
                <label class="form-label mt-3">Valor total *</label>
                <input type="text" this class="form-control" v-model="movimentacao.valorTotal">
            </div>
        </div>
        
        <div class="row mt-3">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-primary" to="/movimentacao-lista">Voltar
                    </router-link>
                </div>
            </div>
            <div class="col-md-3 ">
                <div class="d-grid gap-2">
                    <button v-if="this.form === undefined" type="button" class="btn btn-success"
                        @click="onClickCadastrar()">
                        Cadastrar
                    </button>
                    <button v-if="this.form === 'editar'" type="button" class="btn btn-warning" @click="onClickEditar()">
                        Editar
                    </button>
                    <button v-if="this.form === 'excluir'" type="button" class="btn btn-danger" @click="onClickExcluir()">
                        Excluir
                    </button>
                    <button v-if="this.form === 'finalizar'" type="button" class="btn btn-info" @click="FinalizarMovimentacao()">
                        Finalizar
                    </button>
                </div>
            </div>
        </div>
        

    </div>
</template>
<style lang="scss">
.col {
    padding: 5px;
}

</style>

<script lang="ts">
import { defineComponent } from 'vue';

import MovimentacaoClient from '@/client/movimentacao.client';
import { Movimentacao } from '@/model/movimentacao';
import VeiculoClient from '@/client/veiculo.client';
import { Veiculo } from '@/model/veiculo';
import CondutorClient from '@/client/condutor.client';
import { Condutor } from '@/model/condutor';


export default defineComponent({
    name: 'MovimentacaoCadastro',
    data() {
        return {
            movimentacao: new Movimentacao(),
            veiculo: new Array<Veiculo>(),
            condutor: new Array<Condutor>(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            }
        }
    },
    computed: {
        id() {
            return this.$route.query.id
        },
        form() {
            return this.$route.query.form
        }
    },
    mounted() {

        if (this.id !== undefined) {
            this.findById(Number(this.id));
        }

        this.listAllVeiculo();
        this.listAllCondutor();
    },
    methods: {
        findById(id: number) {
            MovimentacaoClient.findById(id)
                .then(sucess => {
                    this.movimentacao = sucess;
                })
                .catch(Error => {
                    console.log(Error);
                })
        },
        listAllVeiculo() {
            VeiculoClient.listAll()
                .then(sucess => {
                    this.veiculo = sucess;
                })
                .catch(Error => {
                    console.log(Error);
                })
        },
        listAllCondutor() {
            CondutorClient.listAll()
                .then(sucess => {
                    this.condutor = sucess;
                })
                .then(Error => {
                    console.log(Error);
                })
        },
        onClickCadastrar() {
            MovimentacaoClient.cadastrar(this.movimentacao)
                .then(sucess => {
                    this.movimentacao = new Movimentacao()

                    this.mensagem.ativo = true
                    this.mensagem.mensagem = sucess;
                    this.mensagem.titulo = "Parabens. ";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show"
                })
                .catch(error => {
                    const mensagemError = error.data;
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = mensagemError;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show"
                })
        },
        onClickEditar() {
            MovimentacaoClient.editar(this.movimentacao.id, this.movimentacao)
                .then(sucess => {
                    this.movimentacao = new Movimentacao()

                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = sucess;
                    this.mensagem.titulo = "Parabens. "
                    this.mensagem.css = "alert alert-success alert-dismissible fade show"
                })
                .catch(error => {
                    const mensagemError = error.data;
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = mensagemError;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show"
                });
        },
        onClickExcluir() {
            MovimentacaoClient.deletar(this.movimentacao.id)
                .then(sucess => {
                    this.movimentacao = new Movimentacao()

                    this.$router.push({ name: 'movimentacao-lista-view' });
                })
                .catch(error => {
                    const mensagemError = error.data;
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = mensagemError;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show"
                })

        },
        FinalizarMovimentacao(){
            MovimentacaoClient.fecharMovimentacao(this.movimentacao.id)
            .then(sucess => {
                this.movimentacao = new Movimentacao()
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens! ";
                this.mensagem.css = "alert alert-success alert-dismissible fade show"
            })
            .catch(error => {
                const mensagemError = error.data;
                this.mensagem.ativo = true;
                this.mensagem.mensagem = mensagemError;
                this.mensagem.titulo = "Error! ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show"
            })
            
        }
        
    }
})


</script>