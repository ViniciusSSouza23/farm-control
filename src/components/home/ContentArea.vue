<template>
  <div class="content-area-component container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h2 class="text-center pb-4">Estatisticas da sua propriedade:</h2>
        <statistics-component/>
      </div>
    </div>
  </div>
</template>
<script>
import StatisticsComponent from "./StatisticsComponent.vue";
export default {
  components:{
    StatisticsComponent
  }
}
</script>
<style lang="scss" scoped>
.content-area-component{
  background-color: rgb(209, 209, 209);
  min-height: 40vh;
}
</style>

