<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Marcas</h1>
        <div class="row g-3">
        <div class="col">
            <input type="text" class="form-control" placeholder="Nome da marca" aria-label="Nome da marca">
        </div>
        <button type="button" class="btn btn-secondary">Cadastrar</button>
        <router-link to="/marca-lista">
            <button type="button" class="btn btn-secondary">Voltar</button>
        </router-link>
    </div>
    </div>
</template>