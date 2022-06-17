import React from 'react'
import { useState } from 'react'

const Button = (props) => (
  <div>
    <button onClick={props.onclick}>{props.name}</button>
  </div>
)

const Display = (props) => (
  <div>
   {props.displayContent}
  </div>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function anecdoteButtonClick(){
    setInteracted(true);
    console.log('pressed');
    setSelected(getRandomInt(0,(anecdotes.length-1)));
  }
   
  const [selected, setSelected] = useState(0)
  const [interacted, setInteracted] = useState(false)

  if (interacted){
    return (
      <div>
        <Button name='Random anecdote' onclick={anecdoteButtonClick}></Button>
        <p></p>
        <Display displayContent={anecdotes[selected]}></Display>
      </div>
    )
  }
  else {
    return (
      <div>
        <Button name='Random anecdote' onclick={anecdoteButtonClick}></Button>
        <p></p>
        <Display displayContent='Press the button for an aphorism'></Display>
      </div>
    )
  }
}

export default App