<template>
    <App></App>
    <div class="container mt-5">
        <h1>Veiculos</h1>
        <div class="d-grid gap-2 p-1 d-md-flex justify-content-md-end">
            <router-link type="butto" class="btn btn-success" to="/veiculo-cadastro">Cadastrar
            </router-link>
        </div>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ativo</th>
                    <th>Modelo</th>
                    <th>Placa</th>
                    <th>Ano</th>
                    <th>Cor</th>
                    <th>Tipo</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in veiculoList" :key="item.id">
                    <th>{{ item.id }}</th>
                    <th>
                        <span v-if="item.ativo" class="badge text-bg-success">Ativo</span>
                        <span v-if="!item.ativo" class="badge text-bg-success">Inativo</span>
                    </th>
                    <td>{{ item.modelo.nome}}</td>
                    <td>{{ item.placa }}</td>
                    <td>{{ item.ano }}</td>
                    <td>{{ item.cor }}</td>
                    <td>{{ item.tipo }}</td>
                    <th>
                        <router-link type="button" class="btn btn-outline-primary"
                            :to="{ name: 'veiculo-cadastro-editar-view', query: { id: item.id, form: 'editar' } }">
                            <i class="bi bi-pencil"></i>
                        </router-link>
                        <router-link type="button" class="btn btn-outline-danger"
                            :to="{ name: 'veiculo-cadastro-excluir-view', query: { id: item.id, form: 'excluir' } }">
                            <i class="bi bi-trash"></i>
                        </router-link>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss">
.btn {
    margin-left: 5px;
}
</style>

<script lang="ts">

import { defineComponent } from 'vue';
import VeiculoClient from '@/client/veiculo.client';
import { Veiculo } from '@/model/veiculo';


export default defineComponent({
    name: 'VeiculoLista',
    data() {
        return {
            veiculoList: new Array<Veiculo>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {

        findAll() {
            VeiculoClient.listAll().then(success => {
                this.veiculoList = success
            })
                .catch(error => {
                    console.log(error);
                })
        }
    }
});
</script>
