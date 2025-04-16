<template>
  <div class="relative w-full min-h-screen overflow-y-auto snap-y snap-mandatory">
    <section
        v-for="(section, index) in sections"
        :key="index"
        class="h-screen snap-start flex flex-col items-center justify-center px-4 text-center space-y-6 transition duration-500 ease-in-out">

      <h1 class="text-4xl font-bold text-fuchsia-950 dark:text-fuchsia-200">
        {{ section.title }}
      </h1>
      <component
          :is="section.content"
          class="text-lg max-w-7xl h-auto text-gray-800 dark:text-gray-200 py-10"/>
    </section>

    <!-- Pagination dots on the right -->
    <div class="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
      <button
          v-for="(section, index) in sections"
          :key="index"
          @click="scrollToSection(index)"
          :class="[
          'w-3 h-3 rounded-full transition-all duration-300',
          currentIndex === index ? 'bg-fuchsia-950 dark:bg-fuchsia-200 scale-125' : 'bg-gray-400'
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import Me from "~/components/Me.vue";
import Skills from "~/components/Skills.vue";
import Academic from "~/components/Academic.vue";
import Work from "~/components/Work.vue";
import FunFacts from "~/components/FunFacts.vue";

const {t} = useI18n()

const sections = computed(() => [
  {
    title: t('about.me'),
    content: Me
  },
  {
    title: t('about.skills'),
    content: Skills
  },
  {
    title: t('about.academic'),
    content: Academic
  },
  {
    title: t('about.professional-experience'),
    content: Work
  },
  {
    title: t('about.fun-facts'),
    content: FunFacts
  }
])

const currentIndex = ref(0)

const scrollToSection = (index) => {
  const section = document.querySelectorAll('section')[index]
  section?.scrollIntoView({behavior: 'smooth'})
}

const updateCurrentIndex = () => {
  const sectionsList = document.querySelectorAll('section')
  const scrollY = window.scrollY
  sectionsList.forEach((section, index) => {
    const offsetTop = section.offsetTop
    if (scrollY >= offsetTop - window.innerHeight / 2) {
      currentIndex.value = index
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateCurrentIndex)
})
</script>
