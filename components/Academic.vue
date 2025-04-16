<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <UContainer class="text-center">
    <div class="text-lg text-gray-900 dark:text-gray-200 max-w-3xl mx-auto">
      <i18n-t keypath="academic">
        <template #Sorbonne>
          <strong class="font-extrabold text-xl">Sorbonne</strong>
        </template>
       <template #first-degree>
          <strong class="font-extrabold text-xl">{{t('first-degree')}}</strong>
        </template>
        <template #EFREI>
          <strong class="font-extrabold text-xl">EFREI</strong>
        </template>
          <template #second-degree>
            <strong class="font-extrabold text-xl">{{t('second-degree')}}</strong>
        </template>

      </i18n-t>
    </div>

    <!-- Logos Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
      <!-- Sorbonne Université Logo -->
      <div class="flex justify-center hover:scale-105 transition-transform duration-300">
        <img src="https://www.wikimer.org/wp-content/uploads/2020/12/Sorbonne_Universite.png" alt="Sorbonne Université" class="h-20" />
      </div>

      <!-- EFREI Logo -->
      <div class="flex justify-center hover:scale-105 transition-transform duration-300">
        <img src="https://etudestech.com/wp-content/uploads/2022/01/logo_efrei_web_bleu-1024x334.png" alt="EFREI" class="h-16" />
      </div>
    </div>

  </UContainer>


</template>

<style scoped>

</style>