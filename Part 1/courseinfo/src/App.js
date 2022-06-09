/*
homework 1.5
*/


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

const Header = () => {
    return (
      <h1>{course.name}</h1>
    )
}

const Part = (props) => {
    return (<p> {props.text}   {props.number}</p>);
}
const Content = () => {
        return (

          <div>
            <Part text={course.parts[0].name} number={course.parts[0].exercises}></Part>
            <Part text={course.parts[1].name} number={course.parts[1].exercises}></Part>
            <Part text={course.parts[2].name} number={course.parts[2].exercises}></Part>
          </div>

        )
  }

const Total = () => {
        return (
        <p name='Total'>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
        )
      }

return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App

