//ex 1.9

import { useState } from 'react'
import './index.css';

const Button = (props) => (
  <button onClick={props.handleClick} id={props.id}>
  {props.buttonName}  
  </button>
)

const Header = (props) => (
 <div className='Header'>
   <p> 
     {props.name}
   </p>
 </div>
)

const Statistics = (props) => (
  
  <div>
<div className='Header'>
  <p> 
     {props.topLabel}
  </p>
 </div>
   <div className='Display'>{props.firstSubLabel} {props.firstValue}</div>
   <div className='Display'>{props.secondSubLabel} {props.secondValue}</div>
   <div className='Display'>{props.thirdSubLabel} {props.thirdValue}</div>
   <div className='Display'>{props.fourthSubLabel} {props.fourthValue}</div>
   <div className='Header'>
  <p> 
     {props.bottomLabel}
  </p>
 </div>
   <div className='Display'>{props.fifthSubLabel} {props.fifthValue}</div>
   <div className='Display'>{props.sixthSubLabel} {props.sixthValue}</div>
 </div>
  
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [interacted, setInteracted] = useState(false)

  const goodReport = () => {
    console.log('good', good);
    setGood(good+1);
    setAll(all+1);
    setAverage(
      (((good+1)+(bad*-1))/(all+1)).toFixed(2)
      )
    setPositive(
      (((good+1)/(all+1))*100).toFixed(2)+"%"
    )
    setInteracted(true)
   }
   
  const neutralReport = () => {
     console.log('neutral', neutral);
     setNeutral(neutral+1);
     setAll(all+1);
     setAverage(
      (((good)+(bad*-1))/(all+1)).toFixed(2)
      )
    setPositive(
      (((good)/(all+1))*100).toFixed(2)+"%"
    ) 
    setInteracted(true) 
   }  
   
  const badReport = () => {
     console.log('bad', bad);
     setBad(bad+1);
     setAll(all+1);
     setAverage(
      (((good)+((bad+1)*-1))/(all+1)).toFixed(2)
      )
     setPositive(
      (((good)/(all+1))*100).toFixed(2)+"%"
    ) 
    setInteracted(true)
   }


if (interacted){
    return (
    <div>
      
      <Header name='Submit Feedback'></Header>
      <Button buttonName='good' handleClick={goodReport} id='goodButton'></Button>
      <Button buttonName='neutral' handleClick={neutralReport} id='neutralButton'></Button>
      <Button buttonName='bad' handleClick={badReport} id='badButton'></Button>
    
      <Statistics topLabel='Basic Statistics' 

        firstSubLabel='good'
        secondSubLabel='neutral'
        thirdSubLabel='bad'
        fourthSubLabel='all'
        firstValue={good}
        secondValue={neutral}
        thirdValue={bad}
        fourthValue={all}

        bottomLabel='Advanced Statistics'

        fifthSubLabel='average' 
        sixthSubLabel='positive' 
        fifthValue={average} 
        sixthValue={positive}

        >

      </Statistics>

    </div>
  )
    }
    else {
      return (
        <div>
      
      <Header name='Submit Feedback'></Header>
      <Button buttonName='good' handleClick={goodReport} id='goodButton'></Button>
      <Button buttonName='neutral' handleClick={neutralReport} id='neutralButton'></Button>
      <Button buttonName='bad' handleClick={badReport} id='badButton'></Button>
      <Header name='No Feedback Submitted Yet'></Header>
      

    </div>
      )
    }
}

export default App