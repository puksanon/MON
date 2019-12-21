<template>
  <div class="card-group">
    <div
      class="card item"
      v-for="(item, index) in products"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:key="item.id"
    >
      <img :src="Scrimg(item.images.img1)"
        class="card-img-top"
        alt="Card image cap"
      >
      <div class="card-footer">
        <div class="form-row">
          <div class="topic col-md-8">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.detail }}</p>
            <p class="card-text">
              <small class="text-muted">PRICE : {{ item.price }} BATH.</small>
            </p>
          </div>
          <div class="mr col-md-4">
            <a><router-link class="btn block-center btn-add stretched-link" :to="{ name: 'ProductDetail', params: {
            pname:item.name ,
            price:item.price,
            type:item.type,
            detail:item.detail,
            img1:item.images.img1,
            img2:item.images.img2,
            img3:item.images.img3,
            pid : item.id
            
            }}">DETAIL</router-link></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../other/data.json";

export default {
  name: "CardProduct",
  data() {
    return {
      products,
    };
  },

  methods: {
    Scrimg(img) {
      return `/images/${img}`
    },
  }
};
</script>

<style scoped>
.card .card-footer h5 {
  font-weight: bolder;
}

.mr a {
  width: 100%;
  display: block;
    color: black;
}

.mr {
  margin: 20px 0px;
}

.card-footer{
  border: none;
  background-color: transparent;

}
.item img {
  height: auto;
  width: 100%;
  max-width: 350px;
  max-height: 350px;
  margin: auto;
}

.btn-add {
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
}

.btn-add:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  border: 1px solid black;
}

.card .card-footer .topic {
  text-align: left;
  color: black;
}

.card-group>.card {
     margin-bottom: 0;
}
</style>
