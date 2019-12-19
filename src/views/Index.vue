<template>
  <div class="products-index">
    <h1>{{ message }}</h1>
    <div v-for="product in products">
      <p>ID: {{ product.id}} </p>
      <p>Name: {{ product.name}} </p>
      <p>Price: {{ product.price}} </p>
      <p>Image: {{ product.image_id}} </p>
      <p>Description: {{ product.description}} </p>
      <p>Discounted: {{ product.is_discounted}} </p>
      <p>Total: {{ product.total}} </p>
      <p>Supplier ID: {{ product.supplier_id}} </p>
      <p>Supplier Name: {{ product.supplier_name}} </p>
      <router-link v-bind:to="`/products/${product.id}`">Show Item</router-link>
      <br>
      <br>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      products: []
    };
  },
  created: function() {
    axios.get(`/api/products`).then(response =>{
      console.log(response.data);
      this.products = response.data;
    });


  },
  methods: {}
};
</script>