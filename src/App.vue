<template>
  <nav class="navbar navbar-expand-lg nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Estacionamento</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item fw-bold"><router-link class="nav-link" to="/condutor-lista">Condutor</router-link></li>
          <li class="nav-item fw-bold"><router-link class="nav-link" to="/movimentacao-lista">Movimentação</router-link></li>
          <li class="nav-item fw-bold"><router-link class="nav-link" to="/veiculo-lista">Veiculo</router-link></li>
          <li class="nav-item fw-bold"><router-link class="nav-link" to="/marca-lista">Marca</router-link></li>
          <li class="nav-item fw-bold"><router-link class="nav-link" to="/modelo-lista">Modelo</router-link></li>
          <li class="nav-item fw-bold"><router-link class="nav-link" to="/configuracao-lista">Configuração</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
// fim da istilização boostrap!

li {
  margin-left: 5%;
}

.nav {
  background-color: rgb(153, 173, 192);
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #040f1b;
  background-color: #b7b9bb;
  width: 100vw;
  height: 100vh;
}
</style>

