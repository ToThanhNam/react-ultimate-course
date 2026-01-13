import React from "react"
import TodoList from "./liftingStateup/TodoList"

export interface Todo {
  id: number,
  title: string
}

function LiftingStateUp() {
  const [todos, setTodos] = React.useState<Todo[]>([
    { id: 1, title: 'react' },
    { id: 2, title: 'javascript' }
  ])

  function deleteTodo(id: number) {
    const newTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>LiftingStateUp</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default LiftingStateUp