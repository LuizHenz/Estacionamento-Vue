<template>
    <App></App>
    <div class="container mt-5">
        <h1>Movimentações</h1>
        <div class="d-grid gap-2 p-1 d-md-flex justify-content-md-end">
            <router-link type="button" class="btn btn-success" to="/movimentacao-cadastro">Cadastrar
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
                        <span v-if="item.ativo" class="badge bg-success"> Ativo </span>
                        <span v-else class="badge bg-danger"> Inativo </span>
                    </td>
                    <td>{{ item.veiculo.placa }}</td>
                    <td>{{ item.condutor.nome }}</td>
                    <td>{{ formatarData(item.entrada) }}</td>
                    <td>{{ formatarData(item.saida) }}</td>
                    <td>R${{ item.valorTotal }}</td>
                    <th class="col-md-2">
                        <div >
                            <router-link v-if="item.ativo" type="button" class="btn btn-outline-warning"
                                :to="{ name: 'movimentacao-cadastro-editar-view', query: { id: item.id, form: 'editar' } }">
                                <i class="bi bi-pencil-fill"></i>
                            </router-link>
                            <router-link v-if="item.ativo" type="button" class="btn btn-outline-danger ms-3"
                                :to="{ name: 'movimentacao-cadastro-excluir-view', query: { id: item.id, form: 'excluir' } }">
                                <i class="bi bi-trash-fill"></i>
                            </router-link>
                            <router-link v-if="item.ativo" type="button" class="btn btn-outline-info ms-3"
                                :to="{ name: 'movimentacao-recibo-view', query: { id: item.id} }">
                                Finalizar
                            </router-link>
                            <router-link v-if="!item.ativo" type="button" class="btn btn-outline-info ms-3"
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
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


export default defineComponent({
    name: 'MovimentacaoCadastro',
    data() {
        return {
            movimentacaoList: new Array<Movimentacao>()
        }
    },
    mounted() {
        this.findAll();
        this.findAllAbertas();
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
        },
        formatarData(data: any) {
            if (data) {
                try {
                    let dateObj;
                    if (Array.isArray(data)) {
                        let year = data [0];
                        let month = data [1] - 1;
                        let day = data[2];
                        let hours = data[3];
                        let minutes = data[4];
                        let seconds = data.length > 5 ? data[5] : 0;

                        dateObj = new Date(year, month, day, hours, minutes, seconds);
                    } else {
                        dateObj = new Date(data);
                    }
                    return format(dateObj, 'dd/MM/yyyy HH:mm:ss', { locale: ptBR});
                } catch (error) {
                    console.error("Erro ao formatar", error);
                }
            }
            return '';
        }
    }
});

</script>