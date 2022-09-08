<template>
  <section class="statistics-component-view">
    <div class="custom-card p-4" v-if="statistics">
      <div class="d-flex pb-3">
        <h6>Matrizes:</h6>
        <p></p>
      </div>
      <div class="d-flex pb-3">
        <h6>Filhotes:</h6>
        <p></p>
      </div>
      <div class="pb-3 d-flex">
        <h6>Pastos Disponiveis:</h6>
        <p></p>
      </div>

      <div class="d-flex pb-3">
        <h6>Pastos Ocupados:</h6>
        <p></p>
      </div>
      <div class="d-flex pb-3">
        <h6>Lucros com Vendas:</h6>
        <p></p>
      </div>
    </div>
    <div class="py-5 text-center" v-else>
      <em>Nenhum dado cadastrado</em>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      statistics: { Animais: 78, "Pasto Disponivel": 78 },
    };
  },
};
</script>
<style lang="scss" scoped>
.statistics-component-view {
  .custom-card {
    border-radius: 20px;
    background: #fff;
    min-width: 200px;
    min-height: 400px;
  }
}
</style>