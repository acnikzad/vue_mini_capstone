<template>
  <div class="products-new">
    <h1>{{ message }}</h1>
     <div class="container">
        <form v-on:submit.prevent="submit()">
          <h1>Make a New Product</h1>
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="name">
          </div>
          <div class="form-group">
            <label>Price:</label>
            <input type="text" class="form-control" v-model="price">
          </div>
          <div class="form-group">
            <label>Image:</label>
            <input type="text" class="form-control" v-model="image_id">
          </div>
          <div class="form-group">
            <label>Description:</label>
            <input type="text" class="form-control" v-model="description">
          </div>
          <div class="form-group">
            <label>Supplier ID:</label>
            <input type="text" class="form-control" v-model="supplier_id">
          </div>
          <input type ="submit" class="btn btn-primary" value="Submit">     
        </form>
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
      message: "Welcome to the New Product Page!!",
      name: "",
      price: "",
      image_id:"",
      description: "",
      supplier_id: ""
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        price: this.price,
        image_id: this.image_id,
        description: this.description,
        supplier_id: this.supplier_id
      };
      axios
        .post("/api/products", params)
        .then(response => {
          this.$router.push("/products");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>