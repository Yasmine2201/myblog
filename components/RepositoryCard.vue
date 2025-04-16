<script setup lang="ts">
import type {Repository} from '~/types/repository';

const {t} = useI18n();
defineProps<{
  repository: Repository;
}>();
</script>

<template>
  <div
      class="w-full h-80 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-auto shadow-md dark:shadow-none bg-white dark:bg-neutral-800">
    <a :href="repository.deployLink ? repository.deployLink : repository.githubLink">
    <div class="grid grid-cols-1 md:grid-cols-2 h-full">
      <!-- Left Side: Image -->
      <div class="flex items-center justify-center bg-neutral-100 dark:bg-neutral-700">
        <img
            src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Photo_Edits_Hero.width-1300.jpg"
            alt="Yasmine AZIB"
            class="object-cover h-full w-full"
        />
      </div>

      <!-- Right Side: Description -->
      <div class="flex flex-col justify-between p-4 text-center">
        <!-- Top Section: Title and Links -->
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-bold text-fuchsia-500 dark:text-fuchsia-400">
            {{ repository.name }}
          </h2>

          <div class="flex justify-center items-center space-x-3 mt-2">
            <UTooltip :text="t('tooltips.source-code')">
              <a :href="repository.githubLink" target="_blank" rel="noopener noreferrer">
                <Icon name="iconoir:link" class="w-5 h-5 text-gray-500 dark:text-gray-300" />
              </a>
            </UTooltip>

            <UTooltip v-if="repository.deployLink" :text="t('tooltips.deployed')">
              <UBadge color="yellow">
                <a :href="repository.deployLink" target="_blank" rel="noopener noreferrer">
                  {{ t('repository.deployed') }}
                </a>
              </UBadge>
            </UTooltip>
          </div>
        </div>
        <!-- Bottom Section: Description and Technologies -->
        <div class="mt-1 text-sm">
          <p class="text-gray-800 dark:text-gray-100">{{ repository.description }}</p>
        </div>
        <div>
          <UDivider label="Technologies" size="sm" class="my-2 dark:text-white" />
          <div class="flex flex-wrap gap-2 items-center justify-center text-center mt-auto">
            <UBadge
                v-for="(tech, i) in repository.technologies"
                :key="i"
                color="fuchsia"
                variant="solid"
            >
              {{ tech }}
            </UBadge>
          </div>
        </div>

      </div>
    </div>
    </a>
  </div>
</template>


