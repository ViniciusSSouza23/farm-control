<template>
  <div class="home-view">
    <section class="img d-flex align-items-center justify-content-center">
      <h1>Bem vindo {{ user }} ao Farm Controller</h1>
    </section>
    <content-area/>
   
  </div>
</template>
<script>
import ContentArea from "@/components/home/ContentArea.vue"
export default {
  data() {
    return {
      user: "Vinicius",
    };
  },
  components:{
    ContentArea
  }
};
</script>
<style lang="scss" scoped>
.home-view {
  .img {
    background-image: url(../assets/img/home/farm.jpg);
    width: 100%;
    min-height: 300px;
    background-position-x: center;
    background-position-y: bottom;
    /* h1 {
      mix-blend-mode: difference;
      filter: invert(1);
    } */
  }
}
</style>

