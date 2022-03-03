import React from 'react'
import Generator from './Generator'

const App = () => {
  return (
    <>
      <div id="main-app-container">
        <h1>The Boredem Buster</h1>
        <p>Are you bored and can't think of anything to do? Try out the random activity generator below!</p>
        <Generator />
      </div>
    </>
  )
}

export default App