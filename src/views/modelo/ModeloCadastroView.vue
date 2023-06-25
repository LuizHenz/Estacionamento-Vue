<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Modelos</h1>

        <div v-if="mensagem.ativo" class="row">
            <div class="col-md-12 text-start">
                <div :class="mensagem.css" role="alert">
                    <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>

        <div class="row g-3">
            <div class="col">
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    placeholder="Nome da modelo" v-model="modelo.nome">
            </div>
            <div class="row" style="margin-top: 10px;">
            <div class="col-md-12 text-start">
                <label class="modelo-marca">Marca</label>
                <select v-model="modelo.marca" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example" id="modelo-marca">
                    <option v-for="item in marca" :value="item" >{{ item.nome }}</option>
                </select>
            </div>
        </div>
        </div>

        <div class="row">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-info" to="/modelo-lista">Voltar
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
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import ModeloClient from '@/client/modelo.client';
import { Modelo } from '@/model/modelo';
import MarcaClient from '@/client/marca.client';
import { Marca } from '@/model/marca';

export default defineComponent({
    name: 'ModeloCadastro',
    data() {
        return {
            modelo: new Modelo(),
            marca: new Array<Marca>(),
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

        this.findAllMarca();

        if (this.id !== undefined) {
            this.findById(Number(this.id));
        }
    },
    methods: {

        onClickCadastrar() {
            ModeloClient.cadastrar(this.modelo).then(success => {
                this.modelo = new Modelo()

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "Excelente.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Erro.";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        findById(id: number) {
            ModeloClient.findById(id).then(success => {
                this.modelo = success
            })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Erro.";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        findAllMarca() {
            MarcaClient.listAll().then(success => {
                this.marca = success;
               
            }).catch(error =>{
                console.log(error)
            })
        },
        onClickEditar() {
            ModeloClient.editar(this.modelo.id, this.modelo)
                .then(sucess => {
                    this.modelo = new Modelo()

                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = sucess;
                    this.mensagem.titulo = "Excelente. ";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show";
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Erro. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        onClickExcluir() {
            ModeloClient.deletar(this.modelo.id)
                .then(sucess => {
                    this.modelo = new Modelo()

                    this.$router.push({ name: 'modelo-lista-view' });
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Erro. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        }
    }
})



</script>