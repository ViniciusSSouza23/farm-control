<template>
  <nav class="header-view navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/matrizes">Matrizes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Filhotes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/vendas">Vendas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Relatorios</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>