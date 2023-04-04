<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 focus:border-rose-500"
              type="email"
              placeholder="example@gmail.com"
              autocomplete="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="password"
              placeholder="Password..."
            />
          </label>
        </div>
        <div class="row">
          <button
            class="py-3 w-full text-center bg-primary text-white font-bold rounded-lg"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-semibold"
            >Sign up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginView",
  setup() {
    function onSubmit() {}
    return { onSubmit };
  },
};
</script>
