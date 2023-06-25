<template>
  <App></App>
  <div class="container mt-5">
    <h1>Marcas</h1>
    <div class="d-grid gap-2 p-1 d-md-flex justify-content-md-end">
      <router-link type="butto" class="btn btn-success" to="/marca-cadastro">Cadastrar
      </router-link>
    </div>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Ativo</th>
          <th>Marca</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in marcaList" :key="item.id">
          <th>{{ item.id }}</th>
          <th>
            <span v-if="item.ativo" class="badge text-bg-success">Ativo</span>
            <span v-if="!item.ativo" class="badge text-bg-success">Inativo</span>
          </th>
          <td>{{ item.nome }}</td>
          <th>
            <router-link type="button" class="btn btn-outline-primary"
              :to="{ name: 'marca-cadastro-editar-view', query: { id: item.id, form: 'editar' } }">
              <i class="bi bi-pencil"></i>
            </router-link>
            <router-link type="button" class="btn btn-outline-danger"
              :to="{ name: 'marca-cadastro-excluir-view', query: { id: item.id, form: 'excluir' } }">
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

import MarcaClient from '@/client/marca.client';
import { Marca } from '@/model/marca';

export default defineComponent({
  name: 'MarcaLista',
  data() {
    return {
      marcaList: new Array<Marca>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      MarcaClient.listAll().then(success => {
        this.marcaList = success
      })
        .catch(error => {
          console.log(error);
        })
    }
  }
});
</script>