<template>
  <h1>{{ isPending ? "Loading..." : "Logout" }}</h1>
</template>

<script>
import { useRouter } from "vue-router";
import { useLogout } from "@/composables/useLogout";
export default {
  name: "LogoutView",
  setup() {
    const router = useRouter();
    const { error, isPending, logout } = useLogout();
    async function onLogout() {
      await logout();
      if (!error.value) router.push({ name: "Login", params: {} });
    }
    onLogout();
    return { error, isPending };
  },
};
</script>
