import React from "react";
import Button from "../components/atoms/Button";

/*
&&
- vế trái mà là true thì nó sẽ lấy giá trị của vế phải
- vế trái mà là false thì nó sẽ lấy giá trị của vế trái

tony && nam -> nam
' ' && tony -> false
tony && ' ' -> ' '
tony && nam && thang -> thang
tony && ' ' && nam -> ' '

|| 
tony || thang || nam -> tony
' ' || tony -> tony
tony || ' ' -> tony
*/

function LoginButton() {
  return <button type="button">Login</button>
}

function LogoutButton() {
  return <button type="button">Logout</button>
}

function ConditionalRendering() {
  const [todos, setTodos] = React.useState<any>([]);
  let renderButton = null;

  if (todos.length > 0) {
    renderButton = <LogoutButton />
  } else {
    renderButton = <LoginButton />
  }

  function addTodo() {
    const item = {
      // id: Date.now(),
      title: 'Name' + Date.now()
    }
    const newTodos = [...todos, item]; // push item into todos
    setTodos(newTodos)
  }

  function getMonth(number: number) {
    // let text = '';
    // if (number === 1) {
    //   text = 'January'
    // } else if (number === 2) {
    //   text = 'February'
    // } else if (number === 3) {
    //   text = 'March'
    // } else if (number === 4) {
    //   text = 'April'
    // } else {
    //   text = ''
    // }
    const text = number === 1 ? 'January'
          : number === 2 ? 'February'
          : number === 3 ? 'March'
          : number === 4 ? 'April'
          : '';
    return text
  }

  const todosMapped = todos.map((todo: any, index: number) => {
    return {
      ...todo,
      id: Math.floor(Math.random() * 1000)
    }
  })

  console.log('todos: ', todosMapped)


  return (
    <div>
      <h1>ConditionalRendering</h1>
      <button type="button" onClick={addTodo}>Add todo</button>
      {/* {todos.length > 0 ? (
        <>
          {todos.map((todo: any) => {
            return (
              <div key={todo.id}>Title: {todo.title}</div>
            )
          })}
        </>
      ) : (
        <div>Please add todo</div>
      )} */}
      <br />

      {todos.length > 0 && todos.map((todo: any) => {
        return (
          <div key={todo.id}>Title: {todo.title}</div>
        )
      })}
      
      <br />    
      This is button: {renderButton} <br />

      <div className="input">abc</div> <br />

      <Button buttonText="Demo css module" />
    </div>
  )
}

export default ConditionalRendering