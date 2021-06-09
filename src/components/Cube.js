import React from 'react'

const Cube = ({ recipe1 }) => {
  //const recipe = recipe1

  console.log('recipe passed into Cube is - ', recipe1)

  return(
    <div>
      <div>{recipe1.name}</div>
      <div>{recipe1.author}</div>
    </div>
  )
}

export default Cube
