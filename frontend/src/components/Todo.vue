<script setup lang="ts">
import useTodo from '../composable/todo'
import TodoItem from './TodoItem.vue'

const { todo, addTodo, deleteTodo } = useTodo()
</script>

<template>
  <ul>
    <li v-for="item in todo.list">
      <TodoItem v-bind="item"></TodoItem>
    </li>
  </ul>
</template>

<style scoped></style>
