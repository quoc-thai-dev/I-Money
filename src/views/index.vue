<template>
  <div class="home">
    <h1>Home</h1>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <i class="t2 t2ico-camera text-9xl"></i>
    <span> DisplayName: {{ user }}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import { useUser } from "@/composables/useUser";
export default {
  name: "HomeView",
  setup() {
    const { getuser } = useUser();
    const { user } = getuser();
    return { user };
  },
};
</script>
