import React from "react"

/*
clean up function effect hook
- only run when component next render (not run when component first render)
- run when component re-render and un-mount
*/

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

function EffectHook() {
  const [number, setNumber] = React.useState(1);
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const [todos, setTodos] = React.useState<Todo[]>([])

  React.useEffect(() => {
    console.log('useEffect with value dependency')

    return () => {
      console.log('clean up function useEffect with value dependency')
    }
  }, [number]); // re-run when value changes

  React.useEffect(() => {
    console.log('useEffect with no dependency')

    return () => {
      console.log('clean up function useEffect with no dependency')
    }
  }); // every run each component render (include first render)

  React.useEffect(() => {
    console.log('useEffect with empty dependency')
     async function fetchData() {
      const resp = await fetch('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=3')
      const data = await resp.json();
      setTodos(data)
    }
    fetchData();

    return () => {
      console.log('clean up function useEffect with empty dependency')
    }
  }, []); // rune once time when component first render


  console.log('Effect hook component render ----------', number)
  return (
    <div>
      <h1>EffectHook</h1>
      <br />
      Number: {number} <br />
      Timestamp: {timestamp}
      <button 
        type="button" 
        onClick={() => setNumber(prevState => prevState +1)}
      >
        Update Number
      </button>
      <button 
        type="button" 
        onClick={() => setTimestamp(Date.now())}
      >
        Force Timestamp
      </button>

      {todos.map(todo => (
        <div key={todo.id}>Title: {todo.title}</div>
      ))}
    </div>
  )
}

export default EffectHook