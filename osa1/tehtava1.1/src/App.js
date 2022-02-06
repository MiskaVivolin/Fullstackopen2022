import React from 'react'

const Header = (props) => {
return(
  <div>
    <p>
      {props.course}
    </p>
  </div>
)
}

const Content = (props) => {
  return(
    <div>
      <p>
        {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const otsikko = 'Half Stack application development'
  const tehtavat = "Fundamentals of React 10, Using props to pass data 7, State of a component 14"
  const kokonaismaara = "Number of exercises 31"


  return (
    <div>
      <Header course={otsikko} />
      <Content exercises={tehtavat} />
      <Total total={kokonaismaara} />
    </div>
  )
}

export default App
