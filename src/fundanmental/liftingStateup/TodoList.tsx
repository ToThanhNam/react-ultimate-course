import { useTodoContext } from '../../contexts/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
  const { todos } = useTodoContext();

  console.log('todos context: ', todos)

  return (
    <div>
      <ul>
        {todos.map(todo => {
          return (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
              />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList