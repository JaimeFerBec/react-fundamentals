// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    onSubmitUsername(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" name="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function UsernameFormExtra1({onSubmitUsername}) {
  const inputEl = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = inputEl.current.value;
    onSubmitUsername(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={inputEl} id="usernameInput" name="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function UsernameFormExtra2({onSubmitUsername}) {
  const inputEl = useRef(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = inputEl.current.value;
    onSubmitUsername(username);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lowercase');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={inputEl}
          id="usernameInput"
          name="username"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div style={{color: 'red'}} role="alert">{error}</div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function UsernameFormExtra3({onSubmitUsername}) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(username);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <>
      <h1>Basic</h1>
      <UsernameForm onSubmitUsername={onSubmitUsername} />

      <h1>Extra credit 1</h1>
      <UsernameFormExtra1 onSubmitUsername={onSubmitUsername} />

      <h1>Extra credit 2</h1>
      <UsernameFormExtra2 onSubmitUsername={onSubmitUsername} />

      <h1>Extra credit 3</h1>
      <UsernameFormExtra3 onSubmitUsername={onSubmitUsername} />
    </>
  )
}

export default App
