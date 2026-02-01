import Button from "../../components/atoms/Button"
import { useTodoContext } from "../../contexts/TodoContext"
import type { ITodo } from "../../types/todoTypes";
interface TodoItemProps {
  todo: ITodo,
}

function TodoItem({ todo }: TodoItemProps) {
  const { deleteTodo } = useTodoContext();

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