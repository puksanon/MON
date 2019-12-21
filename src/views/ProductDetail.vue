<template>
  <div class="prdouct_detail" id="prdouct_detail">
    <Navbar></Navbar>
    <div class="content">
      <div class="blog_content blog_nav h100">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">DETAIL</span>
          <div class="form-inline">
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
          </div>
        </nav>
      </div>

      <div class="blog_content blog_product h100">
        <div class="card-group row">
          <div class="col-md-8">
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
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    :src="Scrimg_add(proimg1)"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    :src="Scrimg_add(proimg2)"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    :src="Scrimg_add(proimg3)"
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
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-body ">
                <h5 class="card-title">{{ proname }}</h5>
                <hr />
                <h6 class="card-subtitle mb-2 text-muted">DETAIL :</h6>
                <p class="card-text">
                  {{ prodetail }}
                </p>
              </div>
              <div class="card-footer">
                <p class="card-text">
                  <small class="text-muted">TYPE : {{ protype }}</small>
                </p>
                <p class="card-text">
                  <small class="text-muted">PRICE : {{ proprice }} BATH.</small>
                </p>
                <div class="btn_cart">
                  <hr />
                  <div class="row">
                    <router-link class="btn btn-buy" :to="'/cart'"
                      >BUY NOW</router-link
                    >
                    <router-link
                      v-if="proid == '001'"
                      class="btn btn-customize"
                      :to="'/Product/Customize'"
                      >CUSTOMIZE</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="blog_content cm_product blog_product h100">
        <div
          id="carouselExampleIndicatorsRec"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicatorsRec"
              data-slide-to="0"
              class="active"
            ></li>
            <li
              data-target="#carouselExampleIndicatorsRec"
              data-slide-to="1"
            ></li>
            <li
              data-target="#carouselExampleIndicatorsRec"
              data-slide-to="2"
            ></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item  pd active">
              <div class="card-deck">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/img/mon_bg.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/img/mon_bg.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/img/mon_bg.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item pd">
              <div class="card-deck">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/img/mon_bg.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/img/mon_bg.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/img/mon_bg.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item pd">
              <div class="card-deck">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/img/mon_bg.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/img/mon_bg.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../assets/img/mon_bg.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicatorsRec"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicatorsRec"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
const Navbar = () => import("@/components/Nav.vue");
const Footer = () => import("@/components/Footer");
export default {
  name: "ProductDetail",
  props: ["pname", "price", "type", "detail", "img1", "img2", "img3", "pid"],
  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      proname: "",
      prodetail: "",
      proprice: "",
      protype: "",
      proimg1: "",
      proimg2: "",
      proimg3: "",
      proid: ""
    };
  },

  mounted() {
    if( this.pname){
    this.proname = this.pname;
    this.prodetail = this.detail;
    this.proprice = this.price;
    this.protype = this.type;
    this.proimg1 = this.img1;
    this.proimg2 = this.img2;
    this.proimg3 = this.img3;
    this.proid = this.pid;
    }else{
      this.$router.push( '/Product' );
    }
  },

  methods: {
    Scrimg_add(img) {
      return `/images/${img}`;
    }
  }
};
</script>

<style scoped>
.input-search{
  max-width: 150px;
}

.card-footer {
  border: 0;
  background-color: transparent;
}
h5 {
  font-size: 28px;
}
.btn-cart {
  color: black;
  font-size: 27px;
  padding: 0px 15px;
}

hr {
  background-color: black;
}
.btn_cart .btn {
  width: 100%;
  margin: auto;
  border-radius: 8px;
}
.btn_cart .btn-buy {
  border: 1px solid black;
  color: black;
  margin: 5px 10px;
}
.btn_cart .btn-customize {
  width: 100%;
  border: 1px solid black;
  background-color: black;
  color: white;
  margin: 5px 10px;
}

.cm_product .carousel-inner {
  overflow: auto;
}

.pd {
  padding: 20px;
}
.col-md-8,
.col-md-4 {
  padding: unset;
}

.blog_product {
  height: auto;
  display: block;
}

.col-md-4 .card {
  height: 100%;
}

.card {
  height: 100%;
  border-radius: 0px;
  border: 0cm;
  box-shadow: 0px 0px 6px 0px;
}
.btn-add {
  color: black;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
}

.btn-add:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  border: 1px solid black;
}

.carousel-item img {
  height: auto;
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  margin: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.mr {
  margin: 20px 0px;
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

.mr a {
  width: 100%;
  display: block;
}

.card .card-body {
  text-align: left;
  color: black;
}

.card .card-footer {
  text-align: left;
}
.carousel-inner {
  max-width: 100%;
}

.content .ing,
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
</style>
