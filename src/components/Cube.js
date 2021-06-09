import React from 'react'

const Cube = ({ recipe1 }) => {
  const recipe = recipe1

  console.log('recipe passed into Cube is - ', recipe)

  return(
    <div>
      <div>{recipe.name}</div>
      <div>{recipe.author}</div>
    </div>
  )
}

export default Cube
