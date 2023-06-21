<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Movimentações</h1>
        <div class="col">
            <div class="col">
                <input type="text" class="form-control" placeholder="VeiculoId" aria-label="VeiculoId">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="CondutorId" aria-label="CondutorId">
            </div>
            <button type="button" class="btn btn-secondary">Cadastrar</button>
            <router-link to="/movimentacao-lista">
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