<template>
    <App></App>
    <div class="container mt-5">
        <h1>Veiculos</h1>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Modelo</th>
                    <th>Placa</th>
                    <th>Condutor</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>Uno</td>
                    <td>ABC-123</td>
                    <td>Luiz</td>
                    <th>
                        <button class="btn btn-outline-danger">Delete</button>
                        <button class="btn btn-outline-primary">Edit</button>
                    </th>
                </tr>
            </tbody>
        </table>
        <router-link to="/veiculo-cadastro">
                <button type="button" class="btn btn-secondary">Cadastrar</button>
            </router-link>
    </div>
</template>
<style lang="scss">
.btn {
    margin-left: 5px;
}
</style>
