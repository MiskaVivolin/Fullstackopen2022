import React from 'react'

const App = () => {
  const course = ['Half Stack application development', 'Fundamentals of React', 'State of a component']
  const exercises = [10, 7, 14]
  const total = exercises[0] + exercises[1] + exercises[3]


  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total total={total} />
    </div>
  )
}

export default App