<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'
import Todo from '@/components/Todo.vue'

const error = ref<string>('')

onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>

<template>
  <h1>TODO</h1>
  <template v-if="error">Error: {{ error }}</template>
  <Suspense v-else>
    <template #default>
      <Todo></Todo>
    </template>
    <template #fallback>Loading...</template>
  </Suspense>
</template>
