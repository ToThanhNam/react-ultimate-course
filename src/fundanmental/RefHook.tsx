import React from "react";
import { useState } from "react"

/* ref
- Refs provide a way to access DOM nodes or React elements created in the render method.
- There are a few good use cases for refs:
    - Managing focus, text selection, or media playback.
    - Triggering imperative animations.
    - Integrating with third-party DOM libraries.
- Unlike with state, updating a ref does not re-render your component.
- store information between re-renders (unlike regular variables, which reset on every render).
- initial value
  - javascript: string, number, array, object, function, null, undefined ...
*/

const LikeButton = ({ ref }) => {
  return (
    <button ref={ref} type="button">Like Button</button>
  ) 
}

function RefHook() {
  const [timestamp, setTimestamp] = useState(Date.now());
  const countRef = React.useRef(1);
  const firstNameRef = React.useRef<HTMLInputElement | null>(null);
  const skipFirstRenderRef = React.useRef(true);
  const likeButtonRef = React.useRef(null);

  function updateTimestamp() {
    countRef.current = countRef.current + 1;
    console.log('change color button: ', firstNameRef)
    firstNameRef.current?.focus();
    firstNameRef.current?.select()
    console.log('LikeButton ref: ', likeButtonRef)
    setTimestamp(Date.now())
  }

  React.useEffect(() => {
    if (skipFirstRenderRef.current) {
      skipFirstRenderRef.current = false;
      return;
    }
    console.log('call api ref use effect')
  })
  
  console.log('RefHook re-render', countRef)
  return (
    <div>
      <h1>RefHook</h1>
      Timestap: {timestamp} <br />
      Count: {countRef.current} <br /><br />
      Component Button Like: <LikeButton ref={likeButtonRef} /><br /><br />
      
      <input type="text" defaultValue="tony"  ref={firstNameRef} />
      <button type="button" onClick={updateTimestamp}>Force Update</button>

    </div>
  )
}

export default RefHook