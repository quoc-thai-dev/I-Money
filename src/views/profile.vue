<template>
  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 mx-auto rounded-full overflow-hidden">
          <img
            class="w-full h-auto object-cover cursor-pointer"
            sizes="xs"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div class="mt-4 font-semibold text-2xl text-primary">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-400">{{ user.email }}</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
        <div class="col-span-1 flex flex-col w-full gap-2">
          <router-link
            v-for="(opt, index) in profileOptions"
            :key="index"
            :to="opt.route"
            class="bg-slate-100 last:text-rose-600 py-4 px-10 rounded-xl flex text-left flex-row justify-between gap-5 items-center"
          >
            <i class="t2ico text-3xl" :class="opt.icon"></i>
            <div class="basis-full">{{ opt.name }}</div>
            <i class="t2ico t2ico-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";

export default {
  name: "ProfileView",
  setup() {
    const { getuser } = useUser();
    const { user } = getuser();
    const profileOptions = reactive(PROFILE_OPTIONS);
    return { profileOptions, user };
  },
};
</script>
