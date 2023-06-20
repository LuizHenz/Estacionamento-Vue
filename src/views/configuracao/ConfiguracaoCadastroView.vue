<template>
    <App></App>
    <div class="container mt-5">
        <h1>Cadastro de Configurações</h1>
        <div class="col">
            <div class="col">
                <input type="text" class="form-control" placeholder="Valor Hora" aria-label="Valor Hora">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Valor Minuto Multa" aria-label="Valor Minuto Multa">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Inicio Expediente" aria-label="Inicio Expediente">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Fim Expediente" aria-label="Fim Expediente">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Tempo para Desconto" aria-label="Tempo para Desconto">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Tempo de Desconto" aria-label="Tempo de Desconto">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Gerar Desconto" aria-label="Gerar Desconto">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Vagas de moto" aria-label="Vagas de moto">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Vagas de carro" aria-label="Vagas de carro">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Vagas de van" aria-label="Vagas de van">
            </div>
            <button type="button" class="btn btn-secondary">Cadastrar</button>
            <router-link to="/configuracao-lista">
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