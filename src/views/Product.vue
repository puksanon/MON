<template>
  <div class="home" id="home">
    <Navbar></Navbar>
    <div class="content">
      <div class="blog_content blog_img h100">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="../assets/img/mon_bg.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../assets/img/mon_bg.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../assets/img/mon_bg.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="blog_content blog_nav h100">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">Navbar</span>
          <form class="form-inline">
            <input
              type="text"
              class="form-control input-search"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <router-link class="btn btn-cart" :to="'/cart'"
              ><i class="fas fa-shopping-cart"></i
            ></router-link>
          </form>
        </nav>
      </div>

      <div class="blog_content blog_product h100">
        <Cardproduct></Cardproduct>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
const Navbar = () => import("@/components/Nav.vue");
const Footer = () => import("@/components/Footer");
const Cardproduct = () => import("@/components/Cardproduct");
export default {
  name: "Product",

  components: {
    Navbar,
    Footer,
    Cardproduct
  }
};
</script>

<style scoped>
.btn-cart {
  color: black;
  font-size: 27px;
  padding: 0px 15px;
}

@media (max-width: 580px) {
  .input-search {
    display: none;
  }
}

.input-search {
  border: 0.5px solid black;
  background-color: transparent;
  border-radius: 8px;
  color: black;
}

.carousel-item img {
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.block-center {
  margin: 0;
  position: absolute;
  top: 50%;
  right: 0;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  max-width: 150px;
}

.content .img,
img {
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.blog_img img {
  height: auto;
  max-height: 300px;
  width: 100%;
  display: block;
  position: relative;
}

</style>
