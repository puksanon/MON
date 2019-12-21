import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("@/views/Home.vue");
const NotFound = () => import("@/views/NotFound.vue");
const Product = () => import("@/views/Product.vue");
const ProductDetail = () => import("@/views/ProductDetail.vue");
const Customize = () => import("@/views/Customize.vue");
const Cart = () => import("@/views/Cart.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: NotFound
  },
  {
    path: "*",
    redirect: "/404"
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/Product",
    name: "Product",
    component: Product
  },
  {
    path: "/ProductDetail",
    name: "ProductDetail",
    component: ProductDetail,
    props: true
  },
  {
    path: "/Product/Customize",
    name: "Customize",
    component: Customize
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
