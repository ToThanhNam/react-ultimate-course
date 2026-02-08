import React from "react"
import { getRandomColor } from "../utils/randomColor"

const Card = () => {
  console.log('Card sub component')
  return (
    <div>Card sub component</div>
  )
}

const Box = ({ ref }) => {
  const [bgColor, setBgColor] = React.useState('#f00');

  React.useImperativeHandle(ref, () => {
    return {
      getColor: () => {
        return bgColor
      },
      changeBgColor: () => {
        setBgColor(getRandomColor())
      }
    }
  })
 
  return (
    <div
      style={{
        width: 100,
        height: 100,
        border: '1px solid #f00',
        cursor: 'pointer',
        backgroundColor: bgColor
      }}
    >
      Box
    </div>
  )
}

const Input = ({ ref }) => {
  const [text, setText] = React.useState('');

  React.useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        return text
      }
    }
  })
 
  return (
    <input type="text" value={text} onChange={e => setText(e.target.value)} />
  )
}


function UseImperativeHandle() {
  const boxRef = React.useRef<any>(null);
  const firstNameRef = React.useRef<any>(null);

  console.log('UseImperativeHandle component')
  function updateBgColor() {
    boxRef.current.changeBgColor()
    console.log('updateBgColor: ', firstNameRef.current.getValue())
  }

  return (
    <div>
      <h1>UseImperativeHandle</h1>

      <Card />

      <Box ref={boxRef} />
      <Input ref={firstNameRef} />

      <button type="button" onClick={updateBgColor}>Change Background</button>
    </div>
  )
}

export default UseImperativeHandle