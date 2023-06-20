<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Modelos</h1>
        <div class="row g-3">
        <div class="col">
            <input type="text" class="form-control" placeholder="Nome da marca" aria-label="Nome da marca">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="Nome do modelo" aria-label="Nome do modelo">
        </div>
        <button type="button" class="btn btn-secondary">Cadastrar</button>
        <router-link to="/modelo-lista">
            <button type="button" class="btn btn-secondary">Voltar</button>
        </router-link>
    </div>
    </div>
</template>