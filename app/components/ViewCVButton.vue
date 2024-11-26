<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale: current } = useI18n()
const { cvLinks } = useAppConfig()
let cvLink: string = cvLinks[current.value] ?? ''

watch(current, (newLocale) => {
  cvLink = cvLinks[newLocale] ?? ''
})
</script>

<template>
  <div class="flex gap-4 sm:gap-2">
    <SpotlightButton>
      <a
        class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"
        :href="cvLink"
        target="_blank"
      >
        {{ $t("global.view_cv") }}
        <UIcon
          name="heroicons:document-text"
          class="size-5 text-white/80"
        />
      </a>
    </SpotlightButton>
  </div>
</template>

<style scoped></style>
