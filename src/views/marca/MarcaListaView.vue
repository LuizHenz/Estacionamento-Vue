<template>
  <NavBar></NavBar>
<div class="container">
  <table class="table">
  <thead>
    <tr>
      <th scope="col" class="p-2">#</th>
      <th scope="col" class="p-2">Nome da Marca</th>

    </tr>
  </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Fiat</td>
      </tr>
    </tbody>
  </table>
</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'MarcaListaView',
  components: {
    NavBar,
  },
});
</script>
