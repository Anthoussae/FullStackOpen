/*

INSTRUCTIONS (Copypasted from course site):

Refactor the code so that it consists of three new components: 
Header, Content, and Total. 
All data still resides in the App component, 
which passes the necessary data to each component using props. 
Header takes care of rendering the name of the course,
 Content renders the parts and their number of exercises and Total 
 renders the total number of exercises.

 adjusting comment line 14 for git testing purposes. 
 
 ( -- updating Git protocol in Terminal --)
    a) git add .
    b) git commit -m "message about commitment"
    c) git push

The App component's body will approximately be as follows:

const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}

*/


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

const Header = () => {
    return (
      <p>{course}</p>
    )
  }
const Content = () => {
    return (
      <div>
        <p>{part1} {exercises1}</p>
        <p>{part2} {exercises2}</p>
        <p>{part3} {exercises3}</p>
      </div>
    )
  }

const Total = () => {
    return (
    <p name='Total'>Number of exercises {exercises1 + exercises2 + exercises3}</p>
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