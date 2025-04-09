<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import profilePic from '@/assets/profile_pic_pro.jpg'
import type {Repository} from "~/types/repository";

const { t, locale } = useI18n();

const repositories : Repository[] = [
  {
    name: "Trip Planner",
    picture: profilePic,
    description:  t(`repository.trip-planner.description`),
    deployLink: null,
    githubLink: "https://github.com/Yasmine2201/Trip-Planner",
    technologies: "Vue Nuxt 3 + Django Rest Framework + PostgreSQL + Git + CI/CD + Supabase"
  },
  {
    name: "Teach Finder",
    picture: profilePic,
    description:  t(`repository.teach-finder.description`),
    deployLink: null,
    githubLink: "https://github.com/Yasmine2201",
    technologies: "Vue Nuxt 3 + Django Rest Framework + PostgreSQL + Git + CI/CD + Supabase"

  },
  {
    name: "Share Kind Words",
    picture: profilePic,
    description: t(`repository.share-kind-words.description`),
    deployLink: "https://www.words.yasmine-azib.cloud",
    githubLink: "https://github.com/Yasmine2201/Share-Kind-Words",
    technologies: "Vue Nuxt 3 + Django Rest Framework + PostgreSQL + Git + CI/CD + Supabase"
  },
  {
    name: "LLM Detector",
    picture: profilePic,
    description: t(`repository.llm-detector.description`),
    deployLink: null,
    githubLink: "https://github.com/Yasmine2201/EFREI-LLM-Detector-Google",
    technologies: "Vue Nuxt 3 + Django Rest Framework + PostgreSQL + Git + CI/CD + Supabase"
  },
  {
    name: "Native modern JS Projects",
    picture: profilePic,
    description: t(`repository.mini-native-js-projects.description`),
    deployLink: null,
    githubLink: "https://github.com/Yasmine2201/Mini-Projects-with-modern-JS",
    technologies: "Vue Nuxt 3 + Django Rest Framework + PostgreSQL + Git + CI/CD + Supabase"
  }

]

// Watch for changes in the locale and trigger reactivity
watch(locale, () => {
  // This ensures the template updates when the language changes
});
</script>

<template>
  <UContainer class="w-screen py-5">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <!-- Left Side: Profile -->
      <div class="flex flex-col items-center justify-center text-center bg-neutral-100 dark:bg-neutral-900 h-full">
        <img
            :src="profilePic"
            alt="Your Name"
            class="mx-auto w-96 h-96 object-cover mb-4"
        />

        <div class="mb-6">
          <h1 class="text-4xl font-bold">Yasmine AZIB</h1>
          <h3 class="text-2xl text-gray-700 dark:text-gray-200">{{ t('home.job') }}</h3>
          <div class="space-x-3 mt-4">
            <Badges />
          </div>
        </div>
        <p class="text-xl text-gray-900 dark:text-gray-100 mt-1 p-5">{{ t('home.description') }}</p>
      </div>

      <!-- Right Side: Repositories -->
      <div class="max-h-[calc(100vh-10rem)] overflow-y-auto">
        <div class="flex items-center justify-between px-10 pb-2">
          <p class="text-md font-bold dark:text-white">{{t('home.my-repos')}}</p>
          <UTooltip :text="t('tooltips.see-github')">
            <a href="https://github.com/Yasmine2201" class="flex">
             <p class="pr-1"> {{ t('tooltips.see') }} </p>
              <Icon name="i-simple-icons-github" class="w-6 h-6 text-gray-500 dark:text-gray-400"/>
            </a>
          </UTooltip>

        </div>

         <div class="px-1">
          <ul class="space-y-2">
            <li v-for="repo in repositories" :key="repo.name">
              <RepositoryCard :repository="repo" />
            </li>
          </ul>
         </div>
        </div>

    </div>
  </UContainer>
</template>


<style scoped>

</style>