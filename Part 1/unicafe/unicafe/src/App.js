import { useState } from 'react'
import './index.css';


const Button = (props) => (
  <button onClick={props.handleClick}>
  {props.buttonName}  
  </button>
)
const Display = (props) => <div className='Display'>{props.name} {props.value}</div>

const Header = (props) => (
 <div className='Header'>
   <p> 
     {props.name}
   </p>
 </div>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodReport = () => {
    console.log('good');
    setGood(good+1);
   }
   
  const neutralReport = () => {
     console.log('neutral');
     setNeutral(neutral+1);
   }  
   
  const badReport = () => {
     console.log('bad');
     setBad(bad+1);
   }

  return (
    <div>
      <Header name='Give Feedback'></Header>
      <Button buttonName='good' handleClick={goodReport}></Button>
      <Button buttonName='neutral' handleClick={neutralReport}></Button>
      <Button buttonName='bad' handleClick={badReport}></Button>
      <Header name='Statistics'></Header>
      <Display name='good' value={good}></Display>
      <Display name='neutral' value={neutral}></Display>
      <Display name='bad' value={bad}></Display>
    </div>
  )
}

export default App