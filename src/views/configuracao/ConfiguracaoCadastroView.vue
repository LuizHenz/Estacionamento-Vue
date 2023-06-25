<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Configurações</h1>

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
                <label class="form-label mt-3">Valor hora *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="configuracao.valorHora">
            </div>
            <div class="col-md-6 text-start">
                <label class="form-label mt-3">Valor Multa *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="configuracao.valorMinutoMulta">
            </div>
            <div class="col-md-6 text-start">
                <label class="form-label mt-3">Inicio Expediente *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="configuracao.inicioExpediente">
            </div>
            <div class="col-md-6 text-start">
                <label class="form-label mt-3">Fim Expediente *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="configuracao.fimExpediente">
            </div>
            <div class="col-md-6 text-start">
                <label class="form-label mt-3">Tempo para desconto *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" placeholder="Valor em horas"
                    v-model="configuracao.tempoParaDesconto">
            </div>
            <div class="col-md-6 text-start">
                <label class="form-label mt-3">Tempo de desconto *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" placeholder="Valor em horas"
                    v-model="configuracao.tempoDeDesconto">
            </div>
            <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Gerar desconto*</label>
                        <select v-model="configuracao.gerarDesconto" :disabled="this.form === 'excluir' ? '' : disabled"
                            class="form-select" aria-label="Default select example">
                            <option v-for="item in options" :value="item.value">{{ item.text }}</option>
                            
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Vagas de Carro *</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.vagasCarro">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Vagas Moto *</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.vagasMoto">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Vagas Vans *</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.vagasVan">
                    </div>
                </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-primary" to="/configuracao-lista">Voltar
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
import ConfiguracaoClient from '@/client/configuracao.client';
import { Configuracao } from '@/model/configuracao';

export default defineComponent({
    name: 'ConfiguracaoCadastro',
    data() {
        return {
            configuracao: new Configuracao(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            },

            options: [
                { text: 'true', value: true },
                { text: 'false', value: false }
            ]
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
        findById(id: number) {
            ConfiguracaoClient.findById(id)
                .then(success => {
                    this.configuracao = success;
                })
                .catch(Error => {
                    console.log(Error);
                })
        },
        onClickCadastrar() {
            ConfiguracaoClient.cadastrar(this.configuracao)
                .then(success => {
                    this.configuracao = new Configuracao()

                    this.mensagem.ativo = true
                    this.mensagem.mensagem = success;
                    this.mensagem.titulo = "Excelente. ";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show"
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Erro. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show"
                })
        },
        onClickEditar() {
            ConfiguracaoClient.editar(this.configuracao.id, this.configuracao)
                .then(success => {
                    this.configuracao = new Configuracao()

                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = success;
                    this.mensagem.titulo = "Excelente. "
                    this.mensagem.css = "alert alert-success alert-dismissible fade show"
                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show"
                });
        }
    }
})



</script>