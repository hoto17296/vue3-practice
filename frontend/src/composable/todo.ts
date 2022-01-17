import { computed, reactive } from 'vue'

export default function () {
  const todo = reactive({
    list: [{ title: 'foo' }, { title: 'bar' }] as { title: string }[],
    length: computed(() => todo.list.length),
  }) as any

  function addTodo(item: string) {
    todo.list.push({ title: item })
  }

  function deleteTodo(index: number) {
    todo.list.splice(index, 1)
  }

  return {
    todo,
    addTodo,
    deleteTodo,
  }
}
