<script setup lang="ts">
import useTodo from '@/composable/todo'
import TodoItem from './TodoItem.vue'

const { todo, addTodo, deleteTodo } = useTodo()

function onSubmit(event) {
  const title = event.target.title.value.trim()
  event.target.title.value = ''
  if (title) addTodo(title)
}

function onComplete(item) {
  deleteTodo(item)
}
</script>

<template>
  <ul>
    <li v-for="item in todo.list">
      <TodoItem v-bind="item" @complete="onComplete(item)"></TodoItem>
    </li>
  </ul>
  <form @submit.prevent="onSubmit">
    <input type="text" name="title" placeholder="New Task" />
  </form>
</template>

<style scoped></style>
