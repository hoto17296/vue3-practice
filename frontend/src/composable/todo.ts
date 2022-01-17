import { computed, reactive } from 'vue'
import type { TodoItem } from '@/types/todo'

export default function (data: TodoItem[] = []) {
  const todo = reactive({ list: data })

  function addTodo(item: string) {
    todo.list.push({ title: item })
  }

  function deleteTodo(item: TodoItem) {
    const index = todo.list.indexOf(item)
    if (index < 0) throw new Error('Unkown item')
    todo.list.splice(index, 1)
  }

  return {
    todo,
    addTodo,
    deleteTodo,
  }
}
