<template>
    <App></App>
    <div class="container mt-5">
        <h1>Movimentações</h1>
        <div class="d-grid gap-2 p-1 d-md-flex justify-content-md-end">
            <router-link type="butto" class="btn btn-success" to="/movimentacao-cadastro">Cadastrar
            </router-link>
        </div>
        <table class="table table-dark table-striped">
            <thead>
                <tr class="text">
                    <th>ID</th>
                    <th>Ativo</th>
                    <th>VeiculoId</th>
                    <th>CondutorId</th>
                    <th>Entrada</th>
                    <th>Saida</th>
                    <th>Valor Total</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in movimentacaoList" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>
                        <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                        <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                    </td>
                    <td>{{ item.veiculo.placa }}</td>
                    <td>{{ item.condutor.nome }}</td>
                    <td>{{ item.entrada }}</td>
                    <td>{{ item.saida }}</td>
                    <td>{{ item.valorTotal }}</td>
                    <th class="col-md-2">
                        <div>
                            <router-link type="button" class="btn btn-outline-warning"
                                :to="{ name: 'movimentacao-cadastro-editar-view', query: { id: item.id, form: 'editar' } }">
                                <i class="bi bi-pencil-fill"></i>
                            </router-link>
                            <router-link type="button" class="btn btn-outline-danger ms-3"
                                :to="{ name: 'movimentacao-cadastro-excluir-view', query: { id: item.id, form: 'excluir' } }">
                                <i class="bi bi-trash-fill"></i>
                            </router-link>
                            <router-link type="button" class="btn btn-outline-info ms-3"
                                :to="{ name: 'movimentacao-recibo-view', query: { id: item.id} }">
                                Finalizar
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
import MovimentacaoClient from '@/client/movimentacao.client';
import { Movimentacao } from '@/model/movimentacao';


export default defineComponent({
    name: 'MovimentacaoCadastro',
    data() {
        return {
            movimentacaoList: new Array<Movimentacao>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAllAbertas() {
            MovimentacaoClient.findByAbertas().then(success => {
                this.movimentacaoList = success;
            })
                .catch(error => {
                    console.log(error);
                });

        },
        findAll() {
            MovimentacaoClient.listAll().then(success => {
                this.movimentacaoList = success;
            })
                .catch(error => {
                    console.log(error);
                })
        }
    }
});

</script>