<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ title: string }>()
</script>

<template>
  <span>{{ title }}</span>
</template>

<style scoped></style>
