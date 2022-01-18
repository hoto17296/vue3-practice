<script setup lang="ts">
import type { TodoItem } from '@/types/todo'

interface Emits {
  (e: 'complete'): void
}

defineProps<{
  item: TodoItem
}>()
const emit = defineEmits<Emits>()
</script>

<template>
  <span>{{ item.title }}</span>
  <button type="button" @click="emit('complete')">Complete</button>
</template>

<style scoped>
button {
  margin-left: 1em;
}
</style>
