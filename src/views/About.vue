<template>
  <div class="about" id="about">
    <Navbar></Navbar>
      <div class="content">
        <div class="about-content text-left">
          <h4>ABOUT</h4>
          <hr>
          <p>This is a wider card with supporting text below as a natural </p>
          <p>Last updated 3 mins ago</p>
        </div>
      </div>
        <div class="card">
          <div class="text-left">
            <div class="row">
                <div class="col-md-6">
                  <h4>Address</h4>
                  <div class="card-body">
                    <p>This is a wider card with supporting text below as a natural </p>
                    <p>Last updated 3 mins ago</p>
                    <p>Last updated 3 mins ago</p>
                  </div>
                </div>
                <div class="col-md-6">
                    <h4>CONTACT</h4>
                  <div class="card-body">
                    <p>This is a wider card with supporting text below as a natural</p>
                    <p>Last updated 3 mins ago</p>
                    <p>Last updated 3 mins ago</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
    <Footer></Footer>
  </div>
</template>

<script>
const Navbar = () => import("@/components/Navbar.vue");
const Footer = () => import("@/components/Footer");
export default {
  name: "About",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.content{
    position: absolute;
    top: 24%;
    display: block;
    left: 10%;
    color: rgb(255, 255, 255);
}
#about {
  background-image: url("../assets/img/mon_bg.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 220px;
    padding: 20px;
    background-color: white;
    border: 0ch;
    border-radius: 0%;
    color:black;
}
</style>
