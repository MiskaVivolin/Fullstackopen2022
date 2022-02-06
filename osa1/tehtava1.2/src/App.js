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

const Part1 = (props) => {
  return(
    <div>
      <p>
        {props.tehtava1}
      </p>
    </div>
  )
  }

const Part2 = (props) => {
  return(
    <div>
      <p>
        {props.tehtava2}
      </p>
    </div>
  )
  }

const Part3 = (props) => {
  return(
    <div>
      <p>
        {props.tehtava3}
      </p>
    </div>
  )
  }

const Content = () => {

  const sisalto1 = "Fundamentals of React 10"
  const sisalto2 = "Using props to pass data 7"
  const sisalto3 = "State of a component 14"

  return(
    <div>
      <p>
        <Part1 tehtava1={sisalto1}/>
        <Part2 tehtava2={sisalto2}/>
        <Part3 tehtava3={sisalto3}/>
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
  const kokonaismaara = "Number of exercises 31"


  return (
    <div>
      <Header course={otsikko} />
      <Content />
      <Total total={kokonaismaara} />
    </div>
  )
}

export default App
