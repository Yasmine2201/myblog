<template>
  <UContainer>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-">
      <div
          v-for="(skill, index) in skills"
          :key="index"
          class="flex flex-col justify-between items-center gap-y-4 m-1 rounded-2xl text-center shadow-lg hover:scale-105 transition-transform duration-300
           dark:shadow-lg dark:bg-neutral-900 h-full p-4"
      >
        <!-- Title -->
        <h3 class="h-4 font-extrabold text-xl text-fuchsia-500 dark:text-fuchsia-400 mb-10">{{ skill.name }}</h3>

        <!-- Description -->
        <p class="text-gray-700 dark:text-gray-100 mb-4">{{ skill.description }}</p>

        <!-- Tech Badges -->
        <div class="flex flex-wrap gap-2 items-center justify-center text-center mt-auto">
          <UBadge
              v-for="(tech, i) in skill.technologies"
              :key="i"
              color="fuchsia"
              variant="solid"
          >
            {{ tech }}
          </UBadge>
        </div>
      </div>
    </div>
  </UContainer>

</template>

<script setup>
const { t } = useI18n()
const skills = [
  {
    name: t('skill-1.title'),
    description: t('skill-1.description'),
    technologies: ['Python', 'Java', 'C#', 'JavaScript/TypeScript', "HTML/CSS", 'Django', 'Flask', 'SpringBoot', 'JEE', 'Vue', 'BootStrap', 'Pytest', 'JUnit', 'Playwright']
  },
  {
    name: t('skill-2.title'),
    description: t('skill-2.description'),
    technologies: ['Docker', 'Docker Compose', 'GitLab CI/CD','GitHub Actions', 'Terraform', 'Kubeneretes', 'AWS', 'Prometheus', 'Grafana']
  },
  {
    name: t('skill-3.title'),
    description: t('skill-3.description'),
    technologies: ['Linux', 'CAN', 'Wireshark', 'UDS', 'PfSense', 'PostgreSQL', 'MongoDB', 'Nginx']
  }
]
</script>
