<script setup lang="ts">
import type {Repository} from '~/types/repository';

const {t} = useI18n();
defineProps<{
  repository: Repository;
}>();
</script>

<template>
  <UContainer class="w-full h-128">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Left Side: Photo with Neutral Background -->
      <div class="flex items-center justify-center bg-neutral-100 dark:bg-neutral-700">
        <img
            src="https://www.imagenumerique.fr/wp-content/uploads/2018/07/meilleures-applis-photo-1-768x427.jpg"
            alt="Yasmine AZIB"
            class="object-cover p-2 rounded-2xl"
        />
      </div>

      <!-- Right Side: Description -->
      <div
          class="flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-neutral-800 border-none">
        <div class="flex flex-row items-center justify-between w-full max-w-xl p-2">

          <div>
            <h2 class="text-xl text-pink-700 dark:text-white font-bold p-2 inline">{{ repository.name }}</h2>
            <UTooltip :text="t('tooltips.source-code')">
              <a href="{{repository.githubLink}}" class="flex">
                <Icon name="iconoir:link"/>
              </a>
            </UTooltip>
          </div>

          <UTooltip v-if="repository.deployLink"
                    :text="t('tooltips.deployed')">
            <UBadge color="yellow">
              <a href="{{repository.deployLink}}"> {{ t('repository.deployed') }} </a>
            </UBadge>
          </UTooltip>
        </div>

        <div class="m-3">

          <p class="text-md text-gray-900 dark:text-gray-100">{{ repository.description }}</p>
          <UDivider label="Technologies" size="md" class="my-2 dark:text-white font-bold"/>

          <p> {{ repository.technologies }}</p>
        </div>
      </div>

    </div>
  </UContainer>
</template>

