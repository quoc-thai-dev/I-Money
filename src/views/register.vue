<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullname">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullname"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="Fullname..."
              v-model="fullname"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="example@gmail.com"
              v-model="email"
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
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            :disabled="isPending"
            class="py-3 w-full disabled:cursor-not-allowed text-center disabled:opacity-50 bg-primary text-white font-bold rounded-lg"
            type="submit"
          >
            <span v-if="!isPending">Sign Up</span>
            <span v-if="isPending">Processing...</span>
          </button>
        </div>
      </form>
      <!-- Start: Error -->
      <!-- <div v-if="error"> -->
      <div
        v-if="error"
        class="text-rose-600 text-left font-semibold mt-4 text-sm"
      >
        {{ error }}
      </div>
      <!-- </div> -->
      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Login', params: {} }"
            class="text-primary font-semibold"
            >Sign In</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignUp } from "@/composables/useSignUp";
export default {
  name: "RegisterView",
  setup() {
    const { error, isPending, signup } = useSignUp();
    const router = useRouter();
    const fullname = ref("");
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signup(email.value, password.value, fullname.value);
      if (!error.value) router.push({ name: "Profile", params: {} });
    }
    return { onSubmit, fullname, email, error, isPending, password };
  },
};
</script>
