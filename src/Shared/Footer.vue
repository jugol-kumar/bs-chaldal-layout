<template>
  <footer class="py-5 bg-black text-white">
    <div class="container-sm">
      <div class="row pb-5 footerTop gap-4 gap-lg-0">
        <div class="col-sm-12 col-md-12 col-lg-4 col-12">
          <div class="address-content">
            <img src="https://chaldn.com/_mpimage/dettol-handwash-re-energize-refill-170-ml-combo-free-tiffin-box-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130578&q=best&v=1&m=400&webp=1"  width="80" alt="">
            <p class="mt-3" style="text-align: justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam cumque debitis enim eos est exercitationem facere facilis incidunt laboriosam nobis quasi, repellat similique sint sit temporibus veritatis, voluptates! Fugit!
            </p>
          </div>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-2 col-12" v-for="page in 2">
          <div class="help-center-content">
            <h1 class="font-weight-bold">page title</h1>
            <ul class="navbar-nav">
              <li class="nav-item d-flex align-items-center" v-for="item in  3">
                <a href="#" class="ms-1 nav-link">
                  item name here
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div class="col-sm-12 col-md-12 col-lg-3 col-12">
          <div class="address-content">
            <h1 class="font-weight-bold">Address:</h1>
            <p>Lorem ipsum dolor sit. Lorem ipsum.</p>
            <p class="m-0 p-0"><span class="font-weight-bold">Phone:</span>+88 01233333378</p>
            <p class="m-0 p-0"> <span class="font-weight-bold">Email:</span> jugol@engr.com</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>