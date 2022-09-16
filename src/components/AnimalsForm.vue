<template>
  <div class="animals-form-component">
    <form>
      <div class="d-flex flex-column w-50 form-group">
        <label for="name">Nome</label>
        <input
          id="name"
          class="form-control"
          type="text"
          placeholder="Digite o nome do animal"
        />
      </div>
      <div class="d-flex flex-column w-50 form-group">
        <label for="idPai">Brinco do Pai</label>
        <input
          id="idPai"
          type="text"
          class="form-control"
          placeholder="Digite o numero do Pai do animal"
        />
      </div>
      <div class="d-flex flex-column w-50 form-group">
        <label for="">Brinco da Mãe</label>
        <input type="text" placeholder="Digite o numero da Mãe do animal" />
      </div>
    </form>
  </div>
</template>