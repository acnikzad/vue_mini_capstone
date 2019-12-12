<template>
  <div class="home">
    <p>Add product name here:<input type="text" v-model="newProductName">
    <p>Add product description here<input type="text" v-model="newProductDescription">
    <p>Add product price here<input type="text" v-model="newProductPrice">
    <p>Add product image url here<input type="text" v-model="newProductImageUrl">

    <button v-on:click="addProduct()">Create Product</button>

    <div v-for="product in products">
      <p>Name: {{product.name}}</p>
      <p>Description: {{product.description}}</p>

      <br>

      <img v-bind:src="product.image_url">
      
      <br>

      <button v-on:click="toggleInfo(product)">See more info</button>
   
      <div v-if="currentProduct === product">
        <p> price: {{product.price}}</p>

        <p>Name: <input type="text" v-model="product.name"></p>
        <p>Description: <input type="text" v-model="product.description"></p>
        <p>Price: <input type="text" v-model="product.price"></p>
        <p>Image URL: <input type="text" v-model="product.image_url"></p>
        <button v-on:click="updateProduct(product)">Update this product</button>
        <button v-on:click="destroyProduct(product)">Delete this product</button>
      </div>
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
      currentProduct: {},
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
    },
    toggleInfo: function(theProduct) {
      console.log(theProduct);
      if (this.currentProduct === theProduct) {
        this.currentProduct = null;
      } else {
        this.currentProduct = theProduct;
      }
      console.log('in toggle info...');
    },

    updateProduct: function(theProduct) {
      console.log("updating the product");
      console.log(theProduct);

      var params = {
        name: theProduct.name,
        description: theProduct.description,
        price: theProduct.price,
        imageUrl: theProduct.image_url,
      };

      axios.patch(`/api/products/$[theProduct.id}`, params).then(response => {
        console.log(response.data);
        theProduct.name = response.data.name;
        theProduct.description = response.data.description;
        theProduct.price = response.data.price;
        theProduct.imageUrl = response.data.imageUrl;
      });
    },

    destroyProduct: function(theProduct) {
      console.log(theProduct);
      axios.delete(`/api/products${theProduct.id}`).then(response => {
        console.log(response.data);

        var index = this.products.indexOf(theProduct);
        console.log(index);
        this.products.splice(index, 1);
      });
    }
  }
};
</script>