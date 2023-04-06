<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="(nav, index) in navItems" :key="index">
          <router-link :to="{ name: nav.name, params: {} }">
            <i class="t2ico text-3xl" :class="nav.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "NavigationBottomComponent",
  setup() {
    const navItems = reactive([
      {
        icon: "t2ico-category",
        text: "Home",
        name: "Home",
      },
      {
        icon: "t2ico-chart",
        text: "Report",
        name: "Home",
      },
      {
        icon: "t2ico-presentation",
        text: "Budget",
        name: "Home",
      },
      {
        icon: "t2ico-profile",
        text: "Profile",
        name: "Profile",
      },
    ]);
    return { navItems };
  },
};
</script>

<style lang="css" scoped>
footer#footer::before {
  @apply absolute;
  @apply bg-dark-light;
  content: "";
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
footer#footer::after {
  @apply absolute -top-6 flex justify-center items-center text-white;
  @apply w-12 h-12 bg-primary rounded-full;

  content: "\e921";
  font-family: "t2ico";

  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
</style>
