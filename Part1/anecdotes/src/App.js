//1.13

import { render } from '@testing-library/react'
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

  //core 
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const votesArray = Array(anecdotes.length).fill(0);

  //misc useful subfunctions
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function sum(arr) {
    let total = 0;
    arr.forEach(e => total = total+e);
    return total;
  }

  //buttons
  function anecdoteButtonClick(){
    setInteracted(true);
    console.log('random anecdote generated');
    setSelected(getRandomInt(0,(anecdotes.length-1)));
  }

  function voteButtonClick(){
    setInteracted(true);
    const votesCopy = [...votes];
    votesCopy[selected] +=   1;
    setVotes(votesCopy);
  }
  
  //states
  const [votes, setVotes] = useState(votesArray)
  const [selected, setSelected] = useState(getRandomInt(0,(anecdotes.length-1)))
  const [interacted, setInteracted] = useState(false)


  if (interacted){
    return (
      <div>
        <Display displayContent={anecdotes[selected]}></Display>
        <Display displayContent={"has " + votes[selected] + " votes"}></Display>
        <Display displayContent={"total votes: " + sum(votes)}></Display>
        <p></p>
        <Button name='Random anecdote' onclick={anecdoteButtonClick}></Button>
        <Button name='Vote' onclick={voteButtonClick}></Button>
      </div>
    )
  }
  else {
    return (
      <div>
        <Display displayContent={anecdotes[selected]}></Display>
        <Display displayContent={"has " + votes[selected] + " votes"}></Display>
        <Display displayContent={"Please submit a vote or reroll the anecdote."}></Display>
        <p></p>
        <Button name='Random anecdote' onclick={anecdoteButtonClick}></Button>
        <Button name='Vote' onclick={voteButtonClick}></Button>
      </div>
    )
  }
}


export default App