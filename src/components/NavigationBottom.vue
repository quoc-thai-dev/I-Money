<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="(nav, index) in navItems" :key="index">
          <router-link
            :to="{ name: nav.name, params: {} }"
            class="cursor-pointer"
          >
            <i class="t2ico text-3xl" :class="nav.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      data-circle
      class="absolute top-0 left-1/2 transform -translate-x-1/2"
    ></div>
    <div
      data-cirle-inset
      class="absolute cursor-pointer flex justify-center items-center w-12 h-12 rounded-full text-white bg-primary left-1/2 -top-6 transform -translate-x-1/2"
      @click="goToRoute"
    >
      <i class="t2ico t2ico-plus"></i>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { NAV_BOTTOM_ITEMS } from "@/constants";
export default {
  name: "NavigationBottomComponent",
  setup() {
    const router = useRouter();
    const navItems = reactive(NAV_BOTTOM_ITEMS);
    const goToRoute = function () {
      router.push({ name: "NewTransaction", params: {} });
    };
    return { navItems, goToRoute };
  },
};
</script>

<style lang="css" scoped>
footer#footer > div[data-circle] {
  @apply bg-dark-light;
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
