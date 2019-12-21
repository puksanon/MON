<template>
  <div class="home" id="home">
    <Navbar></Navbar>
    <div class="container">
      <div class="content"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
const Navbar = () => import("@/components/Navbar.vue");
const Footer = () => import("@/components/Footer");
export default {
  name: "home",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
#home {
  background-image: url("../assets/img/mon_bg.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
