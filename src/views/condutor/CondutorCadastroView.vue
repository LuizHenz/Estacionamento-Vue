<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Condutores</h1>

        <div v-if="mensagem.ativo" class="row">
            <div class="col-md-12 text-start">
                <div :class="mensagem.css" role="alert">
                    <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="col">
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    placeholder="Nome" v-model="condutor.nome">
            </div>
            <div class="col">
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    placeholder="CPF" v-model="condutor.cpf">
            </div>
            <div class="col">
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    placeholder="Telefone" v-model="condutor.telefone">
            </div>
            <div class="col">
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    placeholder="Tempo Pago" v-model="condutor.tempoPago">
            </div>
            <div class="col">
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    placeholder="Tempo Desconto" v-model="condutor.tempoDescontp">
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 offset-md-4">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-info" to="/condutor-lista">Voltar
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

import CondutorClient from '@/client/condutor.client';
import { Condutor } from '@/model/condutor';

export default defineComponent({
    name: 'CondutorCadastro',
    data() {
        return {
            condutor: new Condutor(),
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
            CondutorClient.cadastrar(this.condutor).then(success => {
                this.condutor = new Condutor()

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
            CondutorClient.findById(id).then(success => {
                this.condutor = success
            })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error.data;
                    this.mensagem.titulo = "Erro.";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        onClickEditar() {
            CondutorClient.editar(this.condutor.id, this.condutor)
                .then(sucess => {
                    this.condutor = new Condutor()

                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = sucess;
                    this.mensagem.titulo = "Excelente. ";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show";
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error.data;
                    this.mensagem.titulo = "Erro. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        onClickExcluir() {
            CondutorClient.deletar(this.condutor.id)
                .then(sucess => {
                    this.condutor = new Condutor()

                    this.$router.push({ name: 'condutor-lista-view' });
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error.data;
                    this.mensagem.titulo = "Erro. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        }
    }
})

</script>