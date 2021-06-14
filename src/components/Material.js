import React from 'react'
const Material = ({ recipe1 }) => {
  const recipe = recipe1

  //console.log('recipe passed into Cube is - ', recipe)

  return(
    <div>
      <div>{recipe.name}</div>
    </div>
  )
}

export default Material
