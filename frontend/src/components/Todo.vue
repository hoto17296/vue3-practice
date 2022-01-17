<script setup lang="ts">
import { reactive } from 'vue'
import TodoItem from './TodoItem.vue'

const todo = reactive({
  list: [{ title: 'foo' }, { title: 'bar' }],
})
</script>

<template>
  <ul>
    <li v-for="item in todo.list">
      <TodoItem v-bind="item"></TodoItem>
    </li>
  </ul>
</template>

<style scoped></style>
