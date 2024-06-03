
<script setup>
import {ref} from "vue";

const isInCart = ref(true)
</script>


<template>
  <section>
    <div class="mt-3">
      <h3>Featured Products</h3>
      <div class="row">
        <div class="col-lg-3 mb-4 col-md-3 product-item" v-for="item in 23">
          <div class="card offer border-0">
            <div class="card-body">
              <img v-if="item % 2 === 0" class="card-img-top" src="https://chaldn.com/_mpimage/dettol-handwash-re-energize-refill-170-ml-combo-free-tiffin-box-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130578&q=best&v=1&m=400&webp=1" alt="">
              <img v-else class="card-img-top" src="https://chaldn.com/_mpimage/sagudana-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47075&q=best&v=1&m=400&webp=1" alt="">

              <div class="card-product-details card-text d-flex flex-column align-items-center text-center">
                <p class="p-0 m-0">Lorem ipsum dolor sit add new word.</p>
                <p class="p-0 m-0">KG</p>
                <p class="p-0 m-0">$1250  <span><s>$1280</s></span></p>
              </div>
            </div>
            <div class="card-footer">
              <button v-if="isInCart" class="border-0 bg-transparent">Add To Cart</button>
              <div v-else class="d-flex align-items-center justify-content-between cart-buttons">
                <span class="action">+</span>
                5
                <span class="action">-</span>
              </div>
            </div>
            <a>
              <div v-if="isInCart" class="offer-overlay">
                <p>Add To Bag</p>
                <a href="#" class="offer-card-bottom-button">Product Details</a>
              </div>

              <div v-else class="offer-overlay">
                <p class="d-flex text-center flex-column fs-4">
                  <span>10</span>
                  Items in you bag
                </p>
                <a href="#" class="offer-card-bottom-button">Product Details</a>
              </div>

            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.offer{
  position: relative;
  cursor: pointer;
}
.offer-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 88.7%;
  background: rgba(0,0,0,0.8);
  border-radius: 5px;
  opacity: 0;
  cursor: pointer;
  /*transition: 0.4s all ease;*/
}
.offer-overlay p{
  color: #FFFFFF;
  /*padding: 78% 26% 61% 26%;*/
  cursor: pointer;
}
.offer:hover .offer-overlay{
  opacity: 1;
  cursor: pointer;
}

.offer-card-bottom-button {
  position: absolute;
  bottom: -1px;
  background: white;
  padding: 2px 0px;
  display: block;
  width: 100%;
  font-size: 13px;
  border: 1px solid #cdc6c6;
  color: black;
  border-top: none;
  cursor: pointer;
}
.offer-card-bottom-button:hover{
  color: black !important;
  cursor: pointer;
}

.offer:hover .offer-overlay a{
  text-decoration: none;
  text-align: center;
  padding: 5px;
  background: #ededed;
  border-radius: 0 0 5px 5px;
}
</style>