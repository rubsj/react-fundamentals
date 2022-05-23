// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

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
  const handleSubmit = event => {
    event.preventDefault()

    console.log('event elements', event)
    //  onSubmitUsername(event.target.form[0].value); can be used if submitted via button's onclick event
    onSubmitUsername(event.target.elements.userName.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" />
      </div>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

//extra creadit 1 - using ref
function UserNameForm1({onSubmitUsername}){
  const inputRef= React.useRef();
  const handleSubmit = (event) =>{
    event.preventDefault();
    onSubmitUsername(inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" ref={inputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App1() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UserNameForm1 onSubmitUsername={onSubmitUsername} />
}

//extra creadit 2 - validate lower caase
function UserNameForm2({onSubmitUsername}){
  const [errorMsg , setErrorMsg] = React.useState('');
  const inputRef= React.useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    onSubmitUsername(inputRef.current.value);
  };

  const onInputChange = (event) =>{
    console.log(event.target.value);
    const inputVal = event.target.value;
    if(inputVal.match(/[A-Z]/g)){
      setErrorMsg('Only small letters allowed')
    }else{
      setErrorMsg('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" ref={inputRef} onChange={onInputChange} />
        {!!errorMsg && <span style={{color: 'red'}}>{errorMsg}</span>}
      </div>
      <button type="submit" disabled={!!errorMsg}>Submit</button>
    </form>
  )
}

function App2() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UserNameForm2 onSubmitUsername={onSubmitUsername} />
}


//extra credit 3
function UserNameForm3({onSubmitUsername}){
  const [inputVal , setInputVal] = React.useState('');
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    onSubmitUsername(inputVal);
  };

  const onInputChange = (event) =>{
    const val = event.target.value;
    setInputVal(val.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" onChange={onInputChange} value={inputVal}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App3() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UserNameForm3 onSubmitUsername={onSubmitUsername} />
}

export default App2
