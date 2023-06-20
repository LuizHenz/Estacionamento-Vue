<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Configurações</h1>
        <div class="col">
            <div class="col">
                <input type="text" class="form-control" placeholder="VeiculoId" aria-label="VeiculoId">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="CondutorId" aria-label="CondutorId">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Entrada" aria-label="Entrada">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Saida" aria-label="Saida">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Tempo" aria-label="Tempo">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Tempo Desconto" aria-label="Tempo Desconto">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Tempo Multa" aria-label="Tempo Multa">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Valor Desconto" aria-label="Valor Desconto">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Valor Multa" aria-label="Valor Multa">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Valor Total" aria-label="Valor Total">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Valor Hora" aria-label="Valor Hora">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Valor Hora" aria-label="Valor Hora Multa">
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