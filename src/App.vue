<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Barlow", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cecece;
}

body,
html {
  height: 100%;
}

.content {
  display: block;
  position: relative;
  margin: auto;
}

.h100 {
  height: 100%;
}
</style>
