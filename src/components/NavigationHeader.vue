<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-5">
          <div class="w-10 h-10 overflow-hidden rounded-full">
            <img
              class="w-full h auto object-cover"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User Profile"
              sizes="sm"
            />
          </div>
          <h1 class="text-xl font-bold text-slate-950 ml-2">Hey, There</h1>
        </div>
        <div class="flex">
          <ul>
            <li><i class="t2ico t2ico-notification text-2xl"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavigationHeaderComponent",
};
</script>
