<template>
    <div class="container mt-5">
        <div class="row mt-3">
            <H1>Recibo</H1>
        </div>
    </div>


    <div class="col-12">
        <div class="">

            <div v-if="mensagem.ativo" class="row">
                <div class="col-md-12 text-start">
                    <div :class="mensagem.css" role="alert">
                        <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-4">
                        <article>
                            <h3>Condutor</h3>
                            <p>{{ recibo.condutor?.nome }}</p>
                            <p>{{ recibo.condutor?.cpf }}</p>
                            <p>{{ recibo.condutor?.telefone }}</p>
                            <h3>Veiculo</h3>
                            <p>{{ recibo.veiculo?.modelo?.nome }} </p>
                            <p>{{ recibo.veiculo?.placa }} </p>
                            <p>{{ recibo.veiculo?.tipo }} </p>
                            <h3>Entrada</h3>
                            <p>{{ recibo.entrada }} </p>
                            <h3>Saida</h3>
                            <p>{{ recibo.saida }} </p>
                        </article>
                    </div>
                    <div class="col-4">
                        <article>
                            <h3>Horas</h3>
                            <p>{{ recibo.horas }} </p>
                            <h3>Horas Desconto</h3>
                            <p>{{ recibo.horasDesconto }} </p>
                            <h3>Desconto</h3>
                            <p>{{ recibo.desconto }} </p>
                            <h3>Valor Total</h3>
                            <p>{{ recibo.valor }}</p>
                        </article>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-2 offset-md-5">
                        <div class="row mp-">
                            <RouterLink to="/" type="button" class="btn btn-success">
                                Voltar a home
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss"></style>




<script lang="ts">
import MovimentacaoClient from '@/client/movimentacao.client';
import { Condutor } from '@/model/condutor';
import { Movimentacao } from '@/model/movimentacao';
import { Recibo } from '@/model/recibo';
import { defineComponent } from 'vue';

//  import  pdfMake from "pdfmake/build/pdfmake";
//  import  pdfFonts from 'pdfmake/build/vfs_fonts';


export default defineComponent({
    name: 'MovimentacaoRecibo',
    data() {
        return {
            movimentacao: new Movimentacao(),
            recibo: new Recibo(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            },


        }

    },
    computed: {
        id() {
            return this.$route.query.id
        }
    },
    mounted() {

        if (this.id !== undefined) {
            this.findById(Number(this.id))
            this.onClickfecharMov(Number(this.id));
        }
    },
    methods: {
        findById(id: number) {
            MovimentacaoClient.findById(id).then(success => {
                this.movimentacao = success
            }).catch(error => {
                console.log(error)
            })
        },
        onClickfecharMov(id: number) {
            MovimentacaoClient.fecharMovimentacao(id)
                .then(success => {
                    this.recibo = success

                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = "Movimentacao finalizada com sucesso";
                    this.mensagem.titulo = "Excelente.";
                    this.mensagem.css = "alert alert-success alert-dismissible fade show";
                }).catch(error => {
                    console.log(error)

                    const bruh = error.data
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = bruh;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                })
        }
    }

})

</script>