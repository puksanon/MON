<template>
  <div class="card text-center">
    <img class="card-img-top" src="/images/m3.png" alt="Card image cap" />
    <div class="card-body">
      <input type="text" id="selectfooter" :value="selectfooter" />
      <button
        type="button"
        class="btn btn-select"
        data-toggle="modal"
        data-target="#Select3"
      >
        SELECT
      </button>
    </div>
    <div
      class="modal fade"
      id="Select3"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">SELECT</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card-deck">
              <div
                class="card pointer"
                v-for="(item, index) in footer"
                v-bind:item="item"
                v-bind:index="index"
                v-bind:key="item.id"
                @click="chooseImgfooter(item.images)"
              >
                <img
                  class="card-img-top"
                  :src="getpath(item.images)"
                  alt="Card image cap"
                />
                <div class="card-footer">
                  <small class="text-muted">{{ item.name }}</small>
                </div>
                <button
                  type="button"
                  class="btn btn-select"
                  data-dismiss="modal"
                  @click="sendid(item.id)"
                >
                  SELECT
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondery"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { footer } from "../other/data.json";
/* eslint no-console: "off" */
export default {
  name: "CustomizeSelect",
  data() {
    return {
      footer,
      selectfooter: ""
    };
  },

  methods: {
    getpath(images) {
      return `/images/${images}`;
    },

    chooseImgfooter(img) {
      this.$emit("chooseImgfooter", img);
    },

    sendid(id) {
      this.selectfooter = id;
    }
  }
};
</script>
<style scoped>
input {
  display: none;
}

.modal-footer,
.card-footer {
  border: 0;
  background-color: transparent;
  border-top: none;
}
.card img {
  width: 100%;
  height: auto;
  margin: auto;
  display: block;
  max-height: 200px;
  max-width: 150px;
}

.pointer {
  cursor: pointer;
}
.cus_select .card img {
  width: 100%;
  height: auto;
  margin: auto;
  display: block;
  max-height: 200px;
  max-width: 150px;
}

.btn-select {
  color: black;
  border: 1px solid black;
  border-radius: 8px;
}

.pointer .btn-select {
  width: 80%;
  margin: auto;
  margin-bottom: 10px;
}

.btn-select:hover {
  color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 0, 0);
  border-radius: 8px;
  background-color: rgb(0, 0, 0);
}

.cus_select .card {
  background-color: rgb(231, 231, 231);
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 700px;
    margin: 1.75rem auto;
  }
}
</style>
