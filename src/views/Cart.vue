<template>
  <div class="home" id="home">
    <Navbar></Navbar>
    <div class="content">
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
          </form>
        </nav>
      </div>

      <div class="blog_content blog_nav ">
        <nav class="navbar bg-manu">
          <span class="navbar-brand mb-0 h1">CUSTOMIZE</span>
        </nav>
      </div>

      <div class="cart_main">
        <div class="row">
          <div class="col-md-6">
            <div class="main_cus_img">
              <div class="card text-left  h100">
                <div class="header-title">
                  <h4>LIST</h4>
                  <hr />
                </div>
                <figure class="fir-image-figure">
                  <img
                    class="fir-author-image fir-clickcircle"
                    src="../assets/img/3.png"
                  />
                  <figcaption>
                    <div class="fig-author-figure-title">
                      David East
                    </div>
                    <div class="fig-author-figure-title">
                      Engineer at Google on Firebase.
                    </div>
                    <div class="fig-author-figure-title">
                      Jan. 16th, 2017 &#8212; 5m read
                    </div>
                  </figcaption>
                </figure>

                <figure class="fir-image-figure">
                  <img
                    class="fir-author-image fir-clickcircle"
                    src="../assets/img/3.png"
                  />
                  <figcaption>
                    <div class="fig-author-figure-title">
                      David East
                    </div>
                    <div class="fig-author-figure-title">
                      Engineer at Google on Firebase.
                    </div>
                    <div class="fig-author-figure-title">
                      Jan. 16th, 2017 &#8212; 5m read
                    </div>
                  </figcaption>
                </figure>

                <div class="total-price">
                  <div class="total-detail">
                    <h2>TOTAL : BATH.</h2>
                    <h5>VET : 7%</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="payment">
              <div class="card">
                <h4>PAYMENT</h4>
                <hr />
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label for="Username">Username</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Username"
                        aria-describedby="Username"
                        placeholder="Username"
                      />
                    </div>
                    <div class="form-group">
                      <label for="Address">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Address"
                        placeholder="Address"
                      />
                    </div>
                    <div class="form-group">
                      <label for="CardNumber">Card Number</label>
                      <input
                        type="text"
                        class="form-control"
                        id="CardNumber"
                        aria-describedby="CardNumber"
                        placeholder="Card Number"
                      />
                    </div>
                    <div class="form-group">
                      <label for="NameonCard">Name on Card</label>
                      <input
                        type="email"
                        class="form-control"
                        id="NameonCard"
                        aria-describedby="NameonCard"
                        placeholder="Name on Card"
                      />
                    </div>

                    <div class="form-row">
                      <div class="form-group col-md-5">
                        <label for="ExpiryDate">Expiry Date</label>
                        <input
                          type="text"
                          class="form-control"
                          id="ExpiryDate"
                          placeholder="Expiry Date"
                        />
                      </div>

                      <div class="form-group col-md-5">
                        <label for="SecurityCode">Security Code</label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Security Code"
                        />
                      </div>
                    </div>

                    <button type="submit" class="btn btn-confirm">
                      CONFIRM
                    </button>
                  </form>
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
export default {
  name: "Cart",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.payment input {
  border: 1px solid black;
  border-radius: 8px;
}

.btn-confirm {
  color: white;
  background-color: black;
  border: 1px solid black;
  width: 100%;
  margin: auto;
  border-radius: 8px;
}

.btn-confirm:hover {
  color: black;
  background-color: white;
}
.col-md-2,
.col-md-4,
.col-md-6 {
  padding-left: 0%;
  padding-right: 0%;
}
.main_cus_img {
  height: 100%;
}
.h100 {
  height: inherit;
}
.card {
  border-radius: 0%;
  padding: 50px 90px;
  color: black;
  border: none;
}

.bg-manu {
  background-color: white;
  color: black;
  border: 0.5px solid #f8f9fa;
}

.bg-manu span {
  color: green;
  font-size: 20px;
  font-weight: bolder;
}

.col-md-6 .payment .card {
  text-align: left;
}

/* card */

.fir-clickcircle {
  max-height: 150px;
  max-width: 150px;
  width: auto;
  height: 100%;
  cursor: pointer;
}

.fir-image-figure {
  margin: 0;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
  text-decoration: none;
}

.fir-image-figure .caption,
.fir-image-figure figcaption {
  padding-left: 50px;
}

html.wf-active .fir-image-figure .fig-author-figure-title {
  font-size: 20px;
}

.fir-image-figure .fig-author-figure-title {
  font-weight: 400;
  font-size: 18px;
  margin-top: 2px;
}
</style>
