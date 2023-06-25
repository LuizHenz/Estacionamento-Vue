<template>
    <App></App>
    <div class="container mt-5">
        <h1>Configurações</h1>
        <div class="d-grid gap-2 p-1 d-md-flex justify-content-md-end">
            <router-link type="butto" class="btn btn-success" to="/configuracao-cadastro">Cadastrar
            </router-link>
        </div>
        <table class="table table-dark table-striped">
            <thead>
                <tr class="text">
                    <th>ID</th>
                    <th>Ativo</th>
                    <th>Valor Hora</th>
                    <th>Valor Multa</th>
                    <th>Inicio Expediente</th>
                    <th>Fim Expediente</th>
                    <th>Tempo Para Desconto</th>
                    <th>Tempo De Desconto</th>
                    <th>Vagas de Carro</th>
                    <th>Vagas de Moto</th>
                    <th>Vagas de Van</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in configuracaoList" :key="item.id">
                    <td>{{ item.id }}</td>
                    <th>
                        <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                        <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                    </th>
                    <th>{{ item.valorHora }}</th>
                    <th>{{ item.valorMinutoMulta }}</th>
                    <th>{{ item.inicioExpediente }}</th>
                    <th>{{ item.fimExpediente }}</th>
                    <th>{{ item.tempoParaDesconto }}</th>
                    <th>{{ item.tempoDeDesconto }}</th>
                    <th>{{ item.vagasCarro }}</th>
                    <th>{{ item.vagasMoto }}</th>
                    <th>{{ item.vagasVan }}</th>
                    <th class="col-md-2">
                        <div>
                            <router-link type="button" class="btn btn-outline-warning"
                                :to="{ name: 'configuracao-cadastro-editar-view', query: { id: item.id, form: 'editar' } }">
                                <i class="bi bi-pencil-fill"></i>
                            </router-link>
                        </div>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss">
.btn {
    margin-top: 5px;
}

.text {
    font-size: 15px;
}
</style>

<script lang="ts">

import { defineComponent } from 'vue';

import ConfiguracaoClient from '@/client/configuracao.client';
import { Configuracao } from '@/model/configuracao';

export default defineComponent({
    name: 'ConfiguracaoList',
    data() {
        return {
            configuracaoList: new Array<Configuracao>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            ConfiguracaoClient.listAll().then(success => {
                this.configuracaoList = success;
            })
                .catch(error => {
                    console.log(error);
                })
        }
    }
});
</script>