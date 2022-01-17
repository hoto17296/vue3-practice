import { computed, reactive } from 'vue'
import type { TodoItem } from '@/types/todo'

export default function () {
  const todo = reactive({
    list: [{ title: 'foo' }, { title: 'bar' }] as TodoItem[],
    length: computed(() => todo.list.length),
  }) as any

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
