<template>
  <div class="breeders-view py-5">
    <div class="container">
      <div class="d-flex align-items-center justify-content-end">
        <div class="card p-5">
          <h4 class="text-center">Bem vindo ao gerenciamento de matrizes do seu rebanho</h4>
          <div class="d-flex pt-5 flex-column align-items-center">
            <button class="btn btn-primary"> Cadastrar Matrizes</button>
            <button class="btn btn-primary my-4">Consultar Matrizes</button>
            <button class="btn btn-danger">Deletar Matrizes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.breeders-view{
  background: url(../assets/img/breeders/breeders-bg.jpg);
  background-repeat: no-repeat;
  background-size: 50% 100%;
  min-height:80vh;
  .card{
    max-width: 40%;
  }
}
</style>