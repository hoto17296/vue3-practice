<script setup lang="ts">
import type { TodoItem } from '@/types/todo'

defineProps<TodoItem>()
</script>

<template>
  <span>{{ title }}</span>
</template>

<style scoped></style>
