<script setup>
import Carosel from "@/pages/Carosel.vue";
import FeaturedCategories from "@/pages/FeaturedCategories.vue";
import Products from "@/pages/Products.vue";
import Footer from "@/Shared/Footer.vue";
import ChousUs from "@/pages/ChousUs.vue";
import SingleProduct from "@/components/modules/SingleProduct.vue";
import Modal from "../components/Modal.vue";



</script>

<template>
  <Carosel/>


  <Modal/>

  <FeaturedCategories/>

  <Products/>
  <ChousUs/>
  <Footer/>




<!--  <Modal/>-->
</template>