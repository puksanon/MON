<template>
  <div class="home" id="home">
    <Navbar></Navbar>
    <div class="content">
      <div class="blog_content blog_nav">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">Navbar</span>
        </nav>
      </div>

      <div class="blog_content blog_nav ">
        <nav class="navbar bg-manu">
          <span class="navbar-brand mb-0 h1">CUSTOMIZE</span>
          <form class="form-inline">
            <input
              type="text"
              class="input-search form-control"
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

      <div class="main">
        <div class="row">
          <div class="col-md-6">
            <div class="main_cus_img">
              <div class="card text-left  h100">
                <div class="card text-center">
                  <img
                    class="card-img-top"
                    :src="gotimg(imghead)"
                    alt="Card image cap"
                  />
                </div>

                <div class="card text-center">
                  <img
                    class="card-img-top"
                    :src="gotimg(imgcenter)"
                    alt="Card image cap"
                  />
                </div>

                <div class="card text-center">
                  <img
                    class="card-img-top"
                    :src="gotimg(imgfooter)"
                    alt="Card image cap"
                  />
                </div>

                <div class="card-footer">
                  <div class="btn_reset">
                    <button class="btn btn-res" @click="reset()">RESET</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <div class="cus_select">
              <CustomizeSelecthead @chooseImg="handlechoose" />
              <CustomizeSelectCenter @chooseImgcenter="handlechoose2" />
              <CustomizeSelectfooter @chooseImgfooter="handlechoosefooter" />
            </div>
          </div>

          <div class="col-md-4">
            <div class="detail_pro">
              <div class="card  text-left h100">
                <div class="card-body">
                  <h2 class="card-title">พวงมาลัย</h2>
                  <hr />
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div class="card-footer">
                  <div class="btn_cart">
                    <p class="card-text">
                      <small class="text-muted">TYPE : APPLIANCE</small>
                    </p>
                    <p class="card-text">
                      <small class="text-muted">PRICE : 1999 BATH.</small>
                    </p>
                    <hr />
                    <div class="row">
                      <button class="btn btn-buy " @click="ele()">CONFIRM</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
const Navbar = () => import("@/components/Nav.vue");
const Footer = () => import("@/components/Footer");
const CustomizeSelecthead = () =>
  import("@/components/CustomizeSelecthead.vue");
const CustomizeSelectCenter = () =>
  import("@/components/CustomizeSelectCenter.vue");
const CustomizeSelectfooter = () =>
  import("@/components/CustomizeSelectfooter.vue");
export default {
  name: "Customize",
  components: {
    Navbar,
    Footer,
    CustomizeSelecthead,
    CustomizeSelectCenter,
    CustomizeSelectfooter
  },
  data() {
    return {
      product: [],
      imghead: "m2.png",
      imgcenter: "6.png",
      imgfooter: "m3.png"
    };
  },
  /* eslint no-console: "off" */
  methods: {
    handlechoose(img) {
      this.imghead = img;
    },

    handlechoose2(img) {
      this.imgcenter = img;
    },

    handlechoosefooter(img) {
      this.imgfooter = img;
    },

    gotimg(img) {
      return `/images/${img}`;
    },

    reset() {
      document.getElementById("selecthead").value = "";
      document.getElementById("selectcenter").value = "";
      document.getElementById("selectfooter").value = "";
      (this.imghead = "m2.png"),
      (this.imgcenter = "6.png"),
      (this.imgfooter = "m3.png");
    },

    ele() {
      const head = document.getElementById("selecthead").value;
      const center = document.getElementById("selectcenter").value;
      const footer = document.getElementById("selectfooter").value;
      console.log(head, center, footer);
    }
  }
};
</script>

<style scoped>
.cus_select .card {
  background-color: rgb(231, 231, 231);
}

.btn-cart {
  color: black;
  font-size: 27px;
  padding: 0px 15px;
}

.input-search {
  border: 0.5px solid black;
  background-color: transparent;
  border-radius: 8px;
  color: black;
}

.main_cus_img .card img {
  width: 100%;
  height: auto;
  max-height: 200px;
  max-width: 200px;
  margin: auto;
  display: block;
}

.main_cus_img .card {
  border: 0;
}

.card-footer {
  border: 0;
  background-color: transparent;
}

.btn_reset .btn-res {
  width: 100%;
  border: 1px solid black;
  background-color: black;
  color: white;
  margin: 5px 10px;
  border-radius: 8px;
}

.btn_reset .btn-res:hover {
  width: 100%;
  border: 1px solid rgb(255, 0, 0);
  background-color: rgb(255, 0, 0);
  color: white;
  margin: 5px 10px;
}

.btn_cart .btn-buy:hover {
  width: 100%;
  border: 1px solid black;
  background-color: black;
  color: white;
  margin: 5px 10px;
}

.main {
  padding: 0px 10px;
}
.btn_cart .btn {
  width: 100%;
  margin: auto;
  border-radius: 8px;
}
.btn_cart .btn-buy {
  border: 1px solid black;
  color: black;
  background-color: white;
  margin: 5px 10px;
}

.content {
  color: black;
}

.bg-manu span {
  color: green;
  font-size: 20px;
  font-weight: bolder;
}

.col-md-2,
.col-md-4,
.col-md-6 {
  padding-left: 0%;
  padding-right: 0%;
}
.main_cus_img,
.detail_pro {
  height: 100%;
}
.h100 {
  height: inherit;
}
.card {
  border-radius: 0%;
}

.bg-manu {
  background-color: white;
  color: black;
  border: 0.5px solid #f8f9fa;
}
</style>
