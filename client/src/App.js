import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState([])

  // useEffect(() => {
  //   // fetch('https://enigmatic-shore-92552.herokuapp.com/generate')
  //   fetch(`http://localhost:5000/generate`)
  //     .then((res) => res.json())
  //     .then((nme) => setName([nme]))
  // }, [])

  useEffect(() => {
    fetch('https://starter-name-generator.onrender.com/api/generate') // Change this URL to the one that you just deployed
      .then((res) => res.json())
      .then((name) => setName([name]))
  }, [])

  return (
    <h1>{name}</h1>
  )
}

export default App
