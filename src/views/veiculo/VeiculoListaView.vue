<template>
    <App></App>
    <div class="container mt-5">
        <h1>Veiculos</h1>
        <div class="d-grid gap-2 p-1 d-md-flex justify-content-md-end">
            <router-link to="/veiculo-cadastro">
                <button type="button" class="btn btn-secondary">Cadastrar</button>
            </router-link>
        </div>
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
