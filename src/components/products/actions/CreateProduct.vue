<template>
  <div class="createProduct">
    <modal
      :header="'Create Product'"
      :isShow="showModal"
      v-if="showModal"
      @close="showModal = false"
    >
      <product-form :product="product" v-on:submit-form="productAction" />
    </modal>
  </div>
</template>
<script>
import Modal from "../../shared/Modal.vue";
import ProductForm from "./ProductForm";
import axios from "axios";
import { successToaster, errorToaster } from "../../shared/service/ErrorHandler.js";

export default {
  name: "createProduct",
  components: { Modal, ProductForm },
  data() {
    return {
      product: new Object(),
      showModal: false,
    };

  },
  methods: {
    showModalForm: function() {
      this.showModal = true;
    },

    productAction: function(product) {
      axios.post(`${process.env.VUE_APP_BASE_URL}/products`, this.product)
          .then(() => {
            this.showLoader = false;
            successToaster(
              "Product Created Successfully"
            );
          })
          .catch((error) => {
            console.log(error);
            errorToaster(
              "Error de creación",
              "Por favor intente de nuevo"
            );
          }); 
             
       console.log("Creating new Product", product);
      
    },
  },
};

</script>
<style lang="css"></style>
