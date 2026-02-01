import React from "react"
import { useTodoContext } from "../contexts/TodoContext";

function State() {
  const [count, setCount] = React.useState(1);
  const [message, setMessage] = React.useState({
    name: 'tony',
    city: {
      ward: 10,
      address: 'tphcm'
    }
  });

  function increment() {
    setCount(count) // 1 pending next state
  }

  function descrement() {
    setCount(count - 1)
  }
  
  function updateAddress() {
    // const newMessage = {
    //   ...message, // copy message
    //   city: {
    //     ...message.city, // copy message.city
    //     address: 'tphcm'
    //   }
    // }; // create new reference
    // setMessage(newMessage)

    // javascript: callback function, syntax code: arrow function
    // react: updater function
    setMessage((prevState) => {
      console.log('prevState: ', prevState)
      return {
        ...prevState,
        city: {
          ...prevState.city, // copy message.city
          address: 'Tony' + Date.now()
        }
      }
    })
  }

  console.log('State: ', message);
  return (
    <div>
      <h1>State</h1>

      Count: {count} <br />
      Address: {message.city.address} <br />

      <button onClick={increment}>Increment</button>
      <button onClick={descrement}>Descrement</button>
      <button onClick={updateAddress}>Update Address</button>
    </div>
  )
}

export default State