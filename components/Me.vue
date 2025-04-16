<template>
  <UContainer class="text-center">
      <div class="text-lg text-gray-900 dark:text-gray-200 max-w-3xl mx-auto">
        <p>{{ t('me') }} </p>

    <p class="font-bold">
      {{ t('me-end') }}
    </p>
        <p>
      {{ t('me-fun-facts') }}
    </p>

      </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
      <div v-for="(img, i) in images" :key="i" class="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        <img :src="img" alt="Yasmine photo" class="w-full h-64 object-cover"/>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
import meDev from '@/assets/me-dev.png'
import meBenev from '@/assets/me-benev.jpg'
import meVolley from '@/assets/me-volley.jpg'


const images = [
  meBenev,
  meDev,
  meVolley


];
const { t } = useI18n();
</script>
