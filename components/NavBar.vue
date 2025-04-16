<script setup lang="ts">
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import {useDark} from "@vueuse/core";

const {t} = useI18n();

const isDark = useDark();
console.log(isDark.value);


const links = computed(() => [
  {
    label: t("navbar.home"),
    icon: 'i-heroicons-home',
    to: '/',
    iconClass: "w-7 h-7 text-gray-900 dark:text-white",
    labelClass: 'font-bold text-gray-900 dark:text-white'
  },
  {
    label: t("navbar.about"),
    avatar: {
      src: './profile_pic_pro.jpg',
      size: "sm",
      color: "gray",
      class: "w-7 h-7 rounded-full object-cover"

    },
    labelClass: 'font-bold text-gray-900 dark:text-white',
    to: '/about',
  }
])
</script>

<template>
  <div class="w-full flex items-center justify-between py-5">
    <!-- left -->
    <h1 class="text-2xl font-bold text-fuchsia-950 dark:text-fuchsia-200">
      {{t('home.title')}}
    </h1>

    <!-- Right -->
    <div class="flex items-center gap-10">
      <UHorizontalNavigation class="nav justify-end" :links="links" :ui="
      {active: 'bg-fuchsia-50 dark:bg-gray-900'}"/>
      <div class="flex">
        <LanguageSwitcher/>
        <ThemeSwitcher/>
      </div>
    </div>
  </div>


</template>
