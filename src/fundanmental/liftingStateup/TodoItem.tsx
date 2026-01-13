import Button from "../../components/atoms/Button"
import type { Todo } from "../LiftingStateUp"

interface TodoItemProps {
  todo: Todo,
  deleteTodo: (id: number) => void
}

function TodoItem({ todo, deleteTodo }: TodoItemProps) {

  return (
    <div>
      {todo.title}
      <Button 
        buttonText="Delete" 
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  )
}

export default TodoItem