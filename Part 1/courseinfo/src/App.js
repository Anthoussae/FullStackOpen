/*
homework 1.4
*/


const App = () => {
  
  const course = 'Half Stack application development'

  const Header = () => {
      return (
        <h1>{course}</h1>
      )
  }

  const Part = (props) => {
      return (<p> {props.text}   {props.number}</p>);
  }

  const parts = [

    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Content = () => {
        return (

          <div>
            <Part text={parts[0].name} number={parts[0].exercises}></Part>
            <Part text={parts[1].name} number={parts[1].exercises}></Part>
            <Part text={parts[2].name} number={parts[2].exercises}></Part>
          </div>

        )
  }

    const Total = () => {
        return (
        <p name='Total'>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
        )
      }

return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App

