<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Veiculos</h1>
        <div v-if="mensagem.ativo" class="row">
            <div class="col-md-12 text-start">
                <div :class="mensagem.css" role="alert">
                    <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 text-start">
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    placeholder="Placa" v-model="veiculo.placa">
            </div>
            <div class="col-md-5 text-start">
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    placeholder="Ano" v-model="veiculo.ano">
            </div>
            <div class="col-md-6 text-start">
                <label class="form-label" for="cor-enum">Cor</label>
                <select v-model="veiculo.cor" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example" id="cor-enum">
                    <option v-for="cor in corEnum" :value="cor">{{ cor }}</option>
                </select>
            </div>
            <div class="col-md-5 text-start">
                <label class="form-label" for="tipo-veiculo">Tipo</label>
                <select v-model="veiculo.tipo" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example" id="tipo-veiculo">
                    <option v-for="tipo in tipoEnum" :value="tipo">{{ tipo }}</option>
                </select>
            </div>
            <div class="col-md-11 text-start">
                <label for="modelo-veiculo">Modelo</label>
                <select v-model="veiculo.modelo" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example" id="modelo-veiculo">
                    <option v-for="item in modelo" :value="item">{{ item.nome }}</option>
                </select>
            </div>
        </div>

        <div class="row">
            <div class="col-md-2 offset-md-4">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-info" to="/veiculo-lista">Voltar
                    </router-link>
                </div>
            </div>
            <div class="col-md-2 ">
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
import VeiculoClient from '@/client/veiculo.client';
import { Veiculo } from '@/model/veiculo';
import ModeloClient from '@/client/modelo.client';
import { Modelo } from '@/model/modelo';
import { cor } from '@/model/cor';
import { tipo } from '@/model/tipo';


export default defineComponent({
    name: 'VeiculoCadastro',
    data() {
        return {
            veiculo: new Veiculo(),
            modelo: new Array<Modelo>(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            },
            corEnum: cor,
            tipoEnum: tipo
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
        
        this.findAllModelo();

        if (this.id !== undefined) {
            this.findById(Number(this.id));
        }

    },
    methods: {
        findById(id: number) {
            VeiculoClient.findById(id).then(success => {
                this.veiculo = success
                console.log(this.veiculo.modelo.marca)
            }).catch(error => {
                this.mensagem.ativo = true;
                    this.mensagem.mensagem = error.data;
                    this.mensagem.titulo = "Erro. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            });
        },
        findAllModelo() {
            ModeloClient.listAll().then(success => {
                this.modelo = success
            }).catch(error => {
                console.log(error)
            })
        },
        onClickCadastrar() {
            VeiculoClient.cadastrar(this.veiculo).then(success => {
                this.veiculo = new Veiculo();

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "Excelente.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            }).catch(error => {
                const bruh = error.data
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error.data;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        },
        onClickEditar() {
            VeiculoClient.editar(this.veiculo.id, this.veiculo).then(success => {
                this.veiculo = new Veiculo();

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "Excekente.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            }).catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error.data;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            });
        },
        onClickExcluir() {
            VeiculoClient.deletar(this.veiculo.id).then(success => {
                this.veiculo = new Veiculo()

                this.$router.push({ name: 'veiculo-lista-view' });
            }).catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error.data;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        }
    }
});

</script>