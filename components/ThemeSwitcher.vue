<script setup lang="ts">
const { t } = useI18n();
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
});
</script>

<template>
  <UTooltip :text="t('navbar.theme')">
  <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      size="md"
      variant="ghost"
      aria-label="Theme"
      square
      @click="isDark = !isDark"
  />
  </UTooltip>
</template>

<style scoped>

</style>