<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Veiculos</h1>
        <div class="col">
            <div class="col">
                <input type="text" class="form-control" placeholder="Modelo" aria-label="Modelo">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Placa" aria-label="Placa">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Condutor" aria-label="Condutor">
            </div>
            <button type="button" class="btn btn-secondary">Cadastrar</button>
            <router-link to="/veiculo-lista">
                <button type="button" class="btn btn-secondary">Voltar</button>
            </router-link>
        </div>
    </div>
</template>
<style lang="scss">
.col {
    padding: 5px;
}
</style>