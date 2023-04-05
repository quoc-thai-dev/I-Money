<template>
  <div class="row">
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
        <div class="mt-4 font-semibold text-2xl text-primary">Quốc Thái</div>
        <p class="font-semibold text-gray-400">quocthai0099@gmail.com</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
        <div class="col-span-1 flex flex-col w-full gap-5">
          <router-link
            :to="{ name: 'Login', param: {} }"
            class="bg-slate-100 py-4 px-3 rounded-xl flex text-left flex-row justify-between gap-16 items-center"
          >
            <i class="t2ico t2ico-wallet text-3xl"></i>
            <div class="basis-full">Hello</div>
            <i class="t2ico t2ico-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
};
</script>
