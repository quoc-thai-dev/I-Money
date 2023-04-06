<template>
  <navigation-header />
  <slot />
  <navigation-bottom />
</template>

<script>
import NavigationHeader from "@/components/NavigationHeader.vue";
import NavigationBottom from "@/components/NavigationBottom.vue";
export default {
  name: "DefaultLayout",
  components: {
    NavigationHeader,
    NavigationBottom,
  },
};
</script>
