//ex 1.10

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

const StatisticsLine = (props) => (

  <tr className='Display'>
    <td>
    {props.text} 
    </td>
    <td>
    {props.value}
    </td>
  </tr>
)

const Statistics = (props) => {
return (
  
  <div>
    <div className='Header'>
      <p> 
        {props.topLabel}
      </p>
    </div>
    <div>
      <table>
        <tbody>
        <StatisticsLine text='good' value={props.goodValue}></StatisticsLine>
        <StatisticsLine text='neutral' value={props.neutralValue}></StatisticsLine>
        <StatisticsLine text='good' value={props.badValue}></StatisticsLine>
        <StatisticsLine text='average' value={props.averageValue}></StatisticsLine>
        <StatisticsLine text='positive' value={props.positiveValue}></StatisticsLine>
        </tbody>
       </table>
    </div>
 </div>
)
  }

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [interacted, setInteracted] = useState(false)

  const goodReport = () => {
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
      <Statistics 
        topLabel='Statistics'
        goodValue={good}
        neutralValue={neutral}
        badValue={bad}
        averageValue={average}
        positiveValue={positive}
      ></Statistics>

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