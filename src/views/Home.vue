<template>
  <div class="home">
    <p>Add product name here:<input type="text" v-model="newProductName">
    <p>Add product description here<input type="text" v-model="newProductDescription">
    <p>Add product price here<input type="text" v-model="newProductPrice">
    <p>Add product image url here<input type="text" v-model="newProductImageUrl">

    <button v-on:click="addProduct()">Create Product</button>


    <div v-for="product in products">
      <p>{{product.name}}</p>
      <p>{{product.description}}</p>

    <br>

    <img v-bind:src="product.image_url">

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
      products: [],
      newProductName: "",
      newProductDescription: "",
      newProductPrice: "",
      newProductImageUrl: "",
    };
  },
  created: function() {
    console.log('hello');
    axios.get("/api/products").then(response => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {
    addProduct: function() {

      var params = {
        name: this.newProductName,
        description: this.newProductDescription,
        price: this.newProductPrice,
        image_url: this.newProductImageUrl
      };

      axios.post("/api/products", params).then(response => {
        console.log(response.data);
        this.products.push(response.data);
        this.newProductName = "";
        this.newProductDescription = "";
        this.newProductPrice = "";
        this.newProductImageUrl = "";
      });
    }
  }
};
</script>