import React from 'react';

function Form() {
  const [lastName, setLastName] = React.useState('');
  const firstNameRef = React.useRef<HTMLInputElement>(null);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log('onSubmit', {
      firstName: firstNameRef.current?.value,
      lastName
    })
  }

  function onChangeLastName(event: React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value)
  }

  function onSearch(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('search: ', event.target.value)
  }

  console.log('Form re-render', firstNameRef)

  return (
    <div>
      <h1>Form</h1>

      <h4>Uncontroller component/input/form</h4>

      <form onSubmit={onSubmit}>
        First Name: <input type="text" id="first_name" name="first_name" ref={firstNameRef} /> <br />
        Last Name: <input type="text" id="last_name" name="last_name" onChange={onChangeLastName} />
        Search: <input type="text" id="search" name="search" onChange={onSearch} />

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form