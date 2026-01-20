import React from "react"

function initialNumber() {
  console.log('initialNumber')
  return 10
}

function MultipleButton({ number, handleMultiple }) {
  // const [number, setNumber] = React.useState(2);

  // function handleMultiple() {
  //   setNumber(prevState => prevState * 2)
  // }

  return (
    <div>
      NUmber multiple: {number}
      <button 
        type="button" 
        onClick={handleMultiple}
      >
        Multiple Number
      </button>
    </div>
  )
}

function StateHook() {
  // array destructuring
  const [count, setCount] = React.useState(initialNumber);
  const [number, setNumber] = React.useState(2);

  function handleMultiple() {
    setNumber(prevState => prevState * 2)
  }

  React.useLayoutEffect(() => {
  })

  React.useEffect(() => {})
  
  /*
    1. first render: render -> useEffect -> call api -> set state -> component re-render with new state
    2. next render: render -> function clean up  useLayoutEffect -> useLayoutEffect -> function clean up  useEffect -> useEffect
    3. unmount -> function clean up  useLayoutEffect -> function clean up  useEffect
  */

  function increment() {
    // batching state update
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(prevState => prevState + 1)
    // setCount(prevState => prevState + 1)
    setCount(prevState => {
      // code logic
      return prevState + 1
    })
  }

  // render JSX
  console.log('State Hook: ', count)
  return (
    <div>
      <h1>StateHook</h1>
      Count: {count} <br />
      <button type="button" onClick={increment}>Increment</button>

      <MultipleButton number={number} handleMultiple={handleMultiple} />
      <MultipleButton number={number} handleMultiple={handleMultiple} />
    </div>
  )
}

export default StateHook