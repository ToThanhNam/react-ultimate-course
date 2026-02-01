import React from "react";
import type { ITodo } from "../types/todoTypes";

interface TodoContextProps {
  todos: ITodo[],
  deleteTodo: (todoId: number) => void
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  deleteTodo: () => {}
});

/*
Wrapper Component -> props children
*/
export const TodoProvider = ({ children }: React.PropsWithChildren) => {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'react' },
    { id: 2, title: 'javascript' }
  ]);

  function deleteTodo(todoId: number) {
    setTodos(prevState => {
      const newTodos = prevState.filter(todo => todo.id !== todoId)
      return newTodos
    })
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        deleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

// get data from context
export const useTodoContext = () => React.useContext(TodoContext)