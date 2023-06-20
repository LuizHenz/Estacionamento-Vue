<template>
    <App></App>
    <div class="container mt-5">
        <h1>Condutores</h1>
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
                        <button class="btn btn-outline-danger">Delete</button>
                        <button class="btn btn-outline-primary">Edit</button>
                    </th>
                </tr>
            </tbody>
        </table>
        <router-link to="/condutor-cadastro">
            <button type="button" class="btn btn-secondary">Cadastrar</button>
        </router-link>

    </div>
</template>
<style lang="scss">
.btn {
    margin-left: 5px;
}
</style>
  