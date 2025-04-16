<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import profilePic from '@/assets/profile_pic_pro.jpg'
import type {Repository} from "~/types/repository";

const {t, locale} = useI18n();

const repositories = computed((): Repository[] => [
  {
    name: "Trip Planner",
    picture: profilePic,
    description: t(`repository.trip-planner.description`),
    deployLink: null,
    githubLink: "https://github.com/Yasmine2201/Trip-Planner",
    technologies: ["Vue Nuxt 3", "Django Rest Framework", "PostgreSQL", "Git", "CI/CD", "Supabase"]
  },
  {
    name: "Teach Finder",
    picture: profilePic,
    description: t(`repository.teach-finder.description`),
    deployLink: null,
    githubLink: "https://github.com/Yasmine2201",
    technologies: ["JEE", "BootStrap", "JPA", "MySQL", "MVC Architecture", "Git", "CI/CD"]
  },
  {
    name: "Share Kind Words",
    picture: profilePic,
    description: t(`repository.share-kind-words.description`),
    deployLink: "https://www.words.yasmine-azib.cloud",
    githubLink: "https://github.com/Yasmine2201/cloud-integration",
    technologies: ["Django", "DB SQLite", "BoosStrap", "MVT Architecture ", "Git", "CI/CD", "Docker"]
  },
  {
    name: "LLM Detector",
    picture: profilePic,
    description: t(`repository.llm-detector.description`),
    deployLink: null,
    githubLink: "https://github.com/Yasmine2201/EFREI-LLM-Detector-Google",
    technologies: ["Machine Learning", "Python", "JupyterNotebook", "TensorFlow"]
  },
  {
    name: "Native modern JS Projects",
    picture: profilePic,
    description: t(`repository.mini-native-js-projects.description`),
    deployLink: null,
    githubLink: "https://github.com/Yasmine2201/Mini-Projects-with-modern-JS",
    technologies: ["JavaScript", "HTML", "CSS"]
  }
]);

// Watch for changes in the locale and trigger reactivity
watch(locale, () => {
  // This ensures the template updates when the language changes
});
</script>

<template>
  <UContainer class="w-full py-10">
    <!-- Hero Section -->
    <section class="flex flex-col items-center text-center mb-12 shadow-md dark:shadow-none dark:bg-neutral-900">
      <img
          :src="profilePic"
          alt="Yasmine Azib"
          class="rounded-full w-64 h-64 object-cover shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
      />
      <h1 class="text-5xl font-extrabold text-gray-900 dark:text-white">Yasmine AZIB</h1>
      <h2 class="text-2xl text-gray-600 dark:text-gray-300 mt-2">{{ t('home.job') }}</h2>
      <p class="font-semibold"> {{ t('home.resume') }} </p>

      <div class="mt-4 space-x-3">
        <Badges/>
      </div>

      <p class="max-w-4xl text-lg text-gray-800 dark:text-gray-200 mt-6 px-4">
        {{ t('home.description') }}
      </p>

    </section>

    <!-- Repositories Section -->
    <UDivider :label="t('home.some-works')" size="md" class="my-2 dark:text-fuchsia-500 font-bold mb-3"/>
    <section>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 mt-10">
        <li
            v-for="repo in repositories"
            :key="repo.name"
            class="w-full max-w-xl mx-auto"
        >
          <RepositoryCard :repository="repo"/>
        </li>
      </ul>

    </section>
  </UContainer>

</template>


<style scoped>

</style>