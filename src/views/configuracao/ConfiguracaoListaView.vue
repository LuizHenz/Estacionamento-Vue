<template>
    <App></App>
    <div class="container mt-5">
        <h1>Configurações</h1>
        <div class="d-grid gap-2 p-1 d-md-flex justify-content-md-end">
            <router-link to="/configuracao-cadastro">
                <button type="button" class="btn btn-secondary">Cadastrar</button>
            </router-link>
        </div>
        <table class="table table-dark table-striped">
            <thead>
                <tr class="text">
                    <th>ID</th>
                    <th>Ativo</th>
                    <th>Valor Hora</th>
                    <th>Tempo Para Desconto</th>
                    <th>Tempo De Desconto</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text">
                    <td>1</td>
                    <td>true</td>
                    <td>0</td>
                    <td>0</td>
                    <td>00:00:00</td>
                    <td>00:00:00</td>
                    <td>00:00:00</td>
                    <td>00:00:00</td>
                    <td>sim</td>
                    <td>20</td>
                    <td>5</td>
                    <td>10</td>
                    <th>
                        <button class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
                        <button class="btn btn-outline-primary"><i class="bi bi-pencil"></i></button>
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

import  ConfiguracaoClient  from '@/client/configuracao.client';
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
        findAll(){
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