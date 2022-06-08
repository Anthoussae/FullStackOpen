/*
homework 1.3
*/


const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = () => {
      return (
        <h1>{course}</h1>
      )
  }

  const Part = (props) => {
      return (<p> {props.text}   {props.number}</p>);
  }

  const Content = () => {
        return (

          <div>
            <Part text={part1.name} number={part1.exercises}></Part>
            <Part text={part2.name} number={part2.exercises}></Part>
            <Part text={part3.name} number={part3.exercises}></Part>
          </div>

        )
  }

    const Total = () => {
        return (
        <p name='Total'>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
        )
      }

return (
    <div>
      <Header></Header>
      <Content></Content>
      <Total></Total>
    </div>
  )
}

export default App