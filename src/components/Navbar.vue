<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="form-inline my-2 my-lg-0">
        <a class="navbar-brand" href="#">
          <img
            src="../assets/img/logo_mon.png"
            width="auto"
            height="150"
            alt=""
          />
        </a>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a><router-link class="nav-link" :to="'/'">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">What's New</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">News</a>
          </li>
          <li class="nav-item">
            <a
              ><router-link class="nav-link" :to="'Product'"
                >Product</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/About">About Us</a>
          </li>
        </ul>

        <div class="mt-2 mt-lg-0">
          <div class="navbar-nav row mr-auto sign_in">
            <a class="nav-link" href="#"
              >SIGN IN<span class="sr-only">(current)</span></a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
#nav {
  padding: 30px;
  background-color: transparent;
  position: absolute;
  width: 100%;
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-item .nav-link {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .sign_in .nav-link {
    min-width: 400px;
  }
}

@media (min-width: 768px) {
  .navbar .navbar-collapse {
    text-align: center;
    float: none;
  }

  .sign_in .nav-link {
    min-width: 400px;
  }
}

.nav-item .nav-link {
  color: rgb(255, 255, 255);
}

.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show > .nav-link {
  color: rgb(255, 255, 255);
  border: 0.5px solid white;
  border-radius: 8px;
}

.navbar-nav .nav-link:active {
  color: rgb(255, 255, 255);
  border: 0.5px solid white;
  border-radius: 8px;
}

.navbar-nav .nav-item .nav-link:hover {
  color: rgb(255, 255, 255);
  border: 0.5px solid white;
  border-radius: 8px;
  max-width: 400px;
  margin: auto;
}

.nav-link {
  font-size: 18px;
}

.sign_in .nav-link {
  font-size: 16px;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  min-width: 100px;
  margin: auto;
}

.sign_in .nav-link:hover {
  color: rgb(255, 0, 0);
  border: none;
}

.sign_in .nav-link:active {
  color: rgb(255, 0, 0);
  border: none;
}
</style>
