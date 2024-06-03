<template>
  <section>
    <div class="p-5 featured-category">
      <h3 class="text-center">Product Categories</h3>
      <div class="row justify-content-center">
        <div class="col-md-3 featured-category-item border m-2 p-4 rounded" v-for="item in 8">
          <div class="d-flex align-items-center justify-content-between">
            <p class="p-0 m-0">Lorem ipsum dolor.</p>
            <img width="20" src="https://cdn-icons-png.flaticon.com/512/25/25666.png?w=740&t=st=1684880378~exp=1684880978~hmac=2b7e1db53da0ed6ed778fce8f25a6aad5397f477fd0278af02a806b21d21e1fa" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>