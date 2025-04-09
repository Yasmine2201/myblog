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
    iconClass: "w-7 h-7 ",
    textClass: 'font-bold'
  },
  {
    label: t("navbar.about"),
    avatar: {
      src: './profile_pic_pro.jpg',
      size: "sm",
      color: "gray",

    },
    textClass: 'font-bold text-xl',
    to: '/about',
  }
])
</script>

<template>
  <div class="w-full flex items-center justify-between py-5">
    <!-- left -->
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
      {{t('home.title')}}
    </h1>

    <!-- Right -->
    <div class="flex items-center gap-10">
      <UHorizontalNavigation
          class="nav justify-end"
          :links="links"
          :ui="{ active: 'underline decoration-2' }"
      />
      <div class="flex">
        <LanguageSwitcher/>
        <ThemeSwitcher/>
      </div>
    </div>
  </div>


</template>
