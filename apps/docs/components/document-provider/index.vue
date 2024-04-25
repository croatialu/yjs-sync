<script setup lang="ts">
import { DocumentProvider } from '@croatialu/y-vue'
</script>

<template>
  <DocumentProvider>
    <div>
      <slot />
    </div>
  </DocumentProvider>
</template>
