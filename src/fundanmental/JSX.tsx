import React from "react"


/*
data type in javascript
primitive: boolean, number, string, null, undefiend, Symbol ...
non-primitive: object, array, function ...

{} = {} // false
*/

function JSX() {
  const myStyle = {
    backgroundColor: '#ff0'
  }

  const myElement = (
    <div>this is jsxabc</div>
  )

  // react fragment
  // <> </>,  React.Fragment
  return (
    <React.Fragment key="xx">
      <h1>JSX</h1>

      <div
        style={myStyle}
      >this is dynamic style</div>

      Variable: {myElement}
    </React.Fragment>
  )
}

export default JSX