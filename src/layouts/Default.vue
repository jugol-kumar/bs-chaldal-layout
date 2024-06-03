<script setup>
import Header from "@/Shared/Header.vue";
import Sidebar from "@/Shared/Sidebar.vue";



</script>
<template>
  <div id="wrapper">
    <div id="page-content-wrapper">
      <!-- Top navigation-->
      <Header/>
      <!-- Page content-->
      <div class="d-flex" style="margin-top:3.5rem;">
        <Sidebar/>
        <div class="container-fluid sidebar-margin" id="main-content">
          <RouterView/>
        </div>
      </div>
    </div>
  </div>
</template>
