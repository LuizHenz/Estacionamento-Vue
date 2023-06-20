<template>
    <App></App>
    <div class="container mt-5">
        <h1>Movimentações</h1>
        <div class="d-grid gap-2 p-1 d-md-flex justify-content-md-end">
            <router-link to="/movimentacao-cadastro">
                <button type="button" class="btn btn-secondary">Cadastrar</button>
            </router-link>
        </div>
        <table class="table table-dark table-striped">
            <thead>
                <tr class="text">
                    <th>ID</th>
                    <th>Ativo</th>
                    <th>VeiculoId</th>
                    <th>CondutorId</th>
                    <th>Entrada</th>
                    <th>Saida</th>
                    <th>Tempo</th>
                    <th>Tempo Desconto</th>
                    <th>Tempo Multa</th>
                    <th>Valor Desconto</th>
                    <th>Valor Multa</th>
                    <th>Valor Total</th>
                    <th>Valor Hora</th>
                    <th>Valor Hora Multa</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text">
                    <td>1</td>
                    <td>true</td>
                    <td>1</td>
                    <td>1</td>
                    <td>00:00:00</td>
                    <td>00:00:00</td>
                    <td>00:00:00</td>
                    <td>00:00:00</td>
                    <td>00:00:00</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <th>
                        <button class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
                        <button class="btn btn-outline-primary"><i class="bi bi-pencil"></i></button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss">
.btn {
    margin-top: 5px;
}

.text {
    font-size: 15px;
}
</style>
  