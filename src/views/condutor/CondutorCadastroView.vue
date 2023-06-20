<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Condutores</h1>
        <div class="col">
            <div class="col">
                <input type="text" class="form-control" placeholder="Nome" aria-label="Nome">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="CPF" aria-label="CPF">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Telefone" aria-label="Telefone">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Tempo Pago" aria-label="Tempo Pago">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Tempo Desconto" aria-label="Tempo Desconto">
            </div>
            <button type="button" class="btn btn-secondary">Cadastrar</button>
            <router-link to="/condutor-lista">
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