<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Marcas</h1>

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
                    placeholder="Nome da marca" v-model="marca.nome">
            </div>
        </div>

        <div class="row">
            <div class="col-md-2 offset-md-4">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-info" to="/marca-lista">Voltar
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

<script lang="ts">

import MarcaClient from '@/client/marca.client';
import { Marca } from '@/model/marca';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MarcaCadastro',
    data() {
        return {
            marca: new Marca(),
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
    },
    methods: {

        onClickCadastrar() {
            MarcaClient.cadastrar(this.marca).then(success => {
                this.marca = new Marca()

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "Excelente.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error.data;
                    this.mensagem.titulo = "Erro.";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        findById(id: number) {
            MarcaClient.findById(id).then(success => {
                this.marca = success
            })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error.data;
                    this.mensagem.titulo = "Erro.";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        onClickEditar() {
            MarcaClient.editar(this.marca.id, this.marca)
                .then(sucess => {
                    this.marca = new Marca()

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
            MarcaClient.deletar(this.marca.id)
                .then(sucess => {
                    this.marca = new Marca()

                    this.$router.push({ name: 'marca-lista-view' });
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