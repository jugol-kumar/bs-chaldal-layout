<template>
  <div class="row">
    <div class="col-6 col-lg-3 col-sm-4" v-for="value in 12" :key="value.id">
      <div class="card offer">
        <div class="card-body">
          <div class="">
            <a href="#"></a>
            <a href="#">
              <img src="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg" class="img-fluid"/>
            </a>
            <div class="content">
              <a href="#" class="name">this is the first product</a>
              <p class="qty_unit">
                <small>5</small>
              </p>
              <span class="regular-price" v-if="true">$1100</span>
              <span class="regular-price" v-else >$1200</span>
              <span class="discount-price" v-if="true" >$ 1250</span>
              <div class="item-cart" v-if="true">
                <a title="Remove On"  class="float-left qty-minus">
                  <strong>
                    -
                    <!--            <vue-feather type="minus" size="12"/>-->
                  </strong>
                </a>

                <div class="qty-text float-left">
                  <strong>5 in Cart</strong>
                </div>

                <a title="Add One More" class="float-left qty-plus">
                  <strong>
                    +
                    <!--            <vue-feather type="plus" size="12"/>-->
                  </strong>
                </a>
              </div>
              <a v-else @click.prevent="" href="" class="button button-sm add_to_cart_button">5 item<i class="lni-shopping-basket"></i
              ></a>
            </div>
            <a>
              <div class="offer-overlay">
                <p>1250</p>
                <a href="#" class="offer-card-bottom-button">Product Details</a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.offer{
  position: relative;
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
}
.offer-overlay p{
  color: #FFFFFF;
  padding: 78% 26% 61% 26%;
}
.offer:hover .offer-overlay{
  opacity: 1;
  border-radius: 5px;
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
}
.offer-card-bottom-button:hover{
  color: black !important;
}


.offer:hover .offer-overlay a{
  text-decoration: none;
  text-align: center;
  padding: 5px;
  background: #ededed;
  border-radius: 0 0 5px 5px;
}
</style>