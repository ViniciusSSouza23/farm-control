<template>
  <div class="animals-form-component">
    <form>
      <div class="d-flex flex-column  form-group">
        <label for="name">Nome</label>
        <input
          id="name"
          class="form-control"
          type="text"
          placeholder="Digite o nome do animal"
        />
      </div>
      <div class="d-flex flex-column  form-group">
        <label for="idFather">Brinco do Pai</label>
        <input
          id="idFather"
          type="text"
          class="form-control"
          placeholder="Digite o numero do Pai do animal"
        />
      </div>
      <div class="d-flex flex-column  form-group">
        <label for="idMother">Brinco da Mãe</label>
        <input
          id="idMother"
          class="form-control"
          type="text"
          placeholder="Digite o numero da Mãe do animal"
        />
      </div>
      <div class="d-flex flex-column  form-group">
        <label for="Data">Data de Nascimento</label>
        <input class="form-control" id="Data" type="date" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    action: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang='scss' scoped>
.animals-form-component {
 .form-group{
  padding-bottom: 16px;
 }
}
</style>