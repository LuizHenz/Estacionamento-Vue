<template>
    <App></App>
    <div class="container mt-5">
        <h1>Condutores</h1>
        <div class="d-grid gap-2 p-1 d-md-flex justify-content-md-end">
            <router-link to="/condutor-cadastro">
                <button type="button" class="btn btn-secondary">Cadastrar</button>
            </router-link>
        </div>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ativo</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>Tempo Pago</th>
                    <th>Tempo Desconto</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>TRUE</td>
                    <td>Luiz</td>
                    <td>111.222.333-44</td>
                    <td>+55(045)99999-9999</td>
                    <td>00:00:00</td>
                    <td>00:00:00</td>
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
    margin-left: 5px;
}
</style>
  