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
            <span class="font-semibold">Email</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 focus:border-rose-500"
              type="email"
              placeholder="example@gmail.com"
              autocomplete="email"
              v-model="email"
            />
          </label>
        </div>
        <div class="row relative">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password..."
              autocomplete="password"
              v-model="password"
              @input="onCheckShowButton()"
              @focusout="showButton = false"
              @focusin="onCheckShowButton()"
            />
          </label>
          <button
            @click="onShowPassword()"
            v-show="showButton"
            type="button"
            class="absolute flex z-100 top-8 px-4 py-3 right-1 text-sm"
          >
            {{ !showPassword ? "show" : "hide" }}
          </button>
        </div>
        <div class="row">
          <button
            :disabled="isPending"
            class="py-3 disabled:cursor-progress disabled:opacity-50 w-full text-center bg-primary text-white font-bold rounded-lg"
            type="submit"
          >
            <span v-if="!isPending">Sign In</span>
            <span v-if="isPending">Loading...</span>
          </button>
        </div>
      </form>
      <!-- Start:Error -->
      <div
        v-if="error"
        class="text-rose-600 text-left font-semibold mt-4 text-sm"
      >
        {{ error }}
      </div>
      <!-- Start:Success -->
      <div
        v-if="!error && !isPending"
        class="text-lime-700 text-left font-semibold mt-4 text-sm"
      >
        Đăng nhập thành công!
      </div>
      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-semibold"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignIn } from "@/composables/useSignIn";
export default {
  name: "LoginView",
  setup() {
    const router = useRouter();
    const { error, isPending, signin } = useSignIn();
    const showButton = ref(false);
    const showPassword = ref(false);
    const email = ref("");
    const password = ref("");
    function onShowPassword() {
      showPassword.value = !showPassword.value;
    }
    function onCheckShowButton() {
      if (password.value.length > 0) {
        showButton.value = true;
      } else {
        showButton.value = false;
      }
    }
    async function onSubmit() {
      await signin(email.value, password.value);
      await error.value;
      if (!error.value) router.push({ name: "Home", params: {} });
    }
    return {
      onSubmit,
      email,
      password,
      error,
      isPending,
      showPassword,
      showButton,
      onShowPassword,
      onCheckShowButton,
    };
  },
};
</script>
