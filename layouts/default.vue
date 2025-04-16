<script setup lang="ts">

useHead({
  title: 'Yasmine AZIB' ,
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'yasmine.png'
    }
  ]
})
</script>

<template>
  <div>
    <header>
      <UContainer>
        <NavBar />
      </UContainer>
    </header>
    <main class = "flex">
      <NuxtPage />
    </main>

    <footer class="dark:bg-primary mt-7 border-t border-gray-300">
      <div class="container mx-auto py-2 text-center">
        Yasmine Blog. All rights reserved.
      </div>
    </footer>
  </div>

</template>

<style scoped>

</style>