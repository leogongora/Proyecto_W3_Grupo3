<template>
  <div class="home-component">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <img alt="Vue logo" src="../assets/fogata.jpeg" width="250px" />
        <h3 class="display-5 ">
          <span style="color:#42b983">Restaurante la Fogata Italiana</span>
        </h3>
        <p class="lead">Un lugar para tener lo mejor de la comida italiana a domicilio</p>
      </div>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          Nuestros productos destacados
        </li>
        <li class="ml-auto" aria-current="page">
          <router-link to="/products">Mostrar todo</router-link>
        </li>
      </ol>
    </nav>
    <BestProducts></BestProducts>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active " aria-current="page">
          Nuestros platos favoritos
        </li>
        <li class="ml-auto" aria-current="page">
          <router-link to="/products">Mostrar todo</router-link>
        </li>
      </ol>
    </nav>
    <TopProducts></TopProducts>
  </div>
</template>

<script>
// @ is an alias to /src

import BestProducts from "@/components/products/BestProducts.vue";
import TopProducts from "@/components/products/TopProducts.vue";
export default {
  name: "home",
  components: {
    BestProducts,
    TopProducts,
  },
};
</script>
<style>
.jumbotron {
  padding: 1rem 0rem;
}
</style>
