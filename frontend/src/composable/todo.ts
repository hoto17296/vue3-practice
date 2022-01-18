import { computed, reactive } from 'vue'
import type { TodoItem } from '@/types/todo'
import axios from 'axios'

export default function (data: TodoItem[] = []) {
  const todo = reactive({ list: data })

  async function addTodo(title: string) {
    const item: TodoItem = { title: title }
    const { data }: { data: TodoItem } = await axios.post('/tasks', item)
    todo.list.push(item)
  }

  async function deleteTodo(item: TodoItem) {
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
