<template>
    <App></App>
    <div class="container mt-5">
        <h1>Condutores</h1>
        <div class="d-grid gap-2 p-1 d-md-flex justify-content-md-end">
            <router-link type="butto" class="btn btn-success" to="/condutor-cadastro">Cadastrar
            </router-link>
        </div>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ativo</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <!-- <th>Tempo Pago</th>
                    <th>Tempo Desconto</th> -->
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in condutorList" :key="item.id">
                    <th>{{ item.id }}</th>
                    <th>
                        <span v-if="item.ativo" class="badge text-bg-success">Ativo</span>
                        <span v-if="!item.ativo" class="badge text-bg-success">Inativo</span>
                    </th>
                    <td>{{ item.nome }}</td>
                    <td>{{ item.cpf }}</td>
                    <td>{{ item.telefone }}</td>
                    <!-- <td>{{ item.tempoPago }}</td>
                    <td>{{ item.tempoDescontp }}</td> -->
                    <th>
                        <router-link type="button" class="btn btn-outline-primary"
                            :to="{ name: 'condutor-cadastro-editar-view', query: { id: item.id, form: 'editar' } }">
                            <i class="bi bi-pencil"></i>
                        </router-link>
                        <router-link type="button" class="btn btn-outline-danger"
                            :to="{ name: 'condutor-cadastro-excluir-view', query: { id: item.id, form: 'excluir' } }">
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

import CondutorClient from '@/client/condutor.client';
import { Condutor } from '@/model/condutor';

export default defineComponent({
    name: 'CondutorLista',
    data() {
        return {
            condutorList: new Array<Condutor>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {

        findAll() {
            CondutorClient.listAll().then(success => {
                this.condutorList = success
            })
                .catch(error => {
                    console.log(error);
                })
        }
    }
});

</script>
  