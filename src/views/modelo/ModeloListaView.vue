<template>
  <App></App>
  <div class="container mt-5">
    <h1>Modelos</h1>
    <div class="d-grid gap-2 p-1 d-md-flex justify-content-md-end">
      <router-link type="butto" class="btn btn-success" to="/modelo-cadastro">Cadastrar
      </router-link>
    </div>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Ativo</th>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in modeloList" :key="item.id">
          <th>{{ item.id }}</th>
          <th>
            <span v-if="item.ativo" class="badge text-bg-success">Ativo</span>
            <span v-if="!item.ativo" class="badge text-bg-success">Inativo</span>
          </th>
          <td>{{ item.nome }}</td>
          <td>{{ item.marca.nome }}</td>
          <th>
            <router-link type="button" class="btn btn-outline-primary"
              :to="{ name: 'modelo-cadastro-editar-view', query: { id: item.id, form: 'editar' } }">
              <i class="bi bi-pencil"></i>
            </router-link>
            <router-link type="button" class="btn btn-outline-danger"
              :to="{ name: 'modelo-cadastro-excluir-view', query: { id: item.id, form: 'excluir' } }">
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

import  ModeloClient  from '@/client/modelo.client';
import { Modelo } from '@/model/modelo';

export default defineComponent({
  name: 'ModeloLista',
  data() {
    return {
      modeloList: new Array<Modelo>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      ModeloClient.listAll().then(success => {
        this.modeloList = success
      })
        .catch(error => {
          console.log(error);
        })
    }
  }
});
</script>