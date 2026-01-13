import type { Todo } from '../LiftingStateUp'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: Todo[],
  deleteTodo: (id: number) => void
}

function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <div>
      <ul>
        {todos.map(todo => {
          return (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                deleteTodo={deleteTodo}
              />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList