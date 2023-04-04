<template>
  <div>
    <navigation-brand />
    <slot />
  </div>
</template>
<script>
import NavigationBrand from "@/components/NavigationBrand.vue";
export default {
  name: "AuthLayout",
  components: {
    NavigationBrand,
  },
};
</script>
