<template>
  <div class="products-show">
    <h1>{{ message }}</h1>
    <p>ID: {{ product.id}} </p>
    <p>Name: {{ product.name}} </p>
    <p>Price: {{ product.price}} </p>
    <p>Image: {{ product.image_id}} </p>
    <p>Description: {{ product.description}} </p>
    <p>Discounted: {{ product.is_discounted}} </p>
    <p>Total: {{ product.total}} </p>
    <p>Supplier ID: {{ product.supplier_id}} </p>
    <p>Supplier Name: {{ product.supplier_name}} </p>
    <router-link to="/products">Back to Index</router-link>
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
      product: {},
    };
  },
  created: function() {
    console.log(this.$route.params.id);
    axios.get(`/api/products/${this.$route.params.id}`).then(response => {
      this.product = response.data;
    });
  },

  methods: {}
};
</script>