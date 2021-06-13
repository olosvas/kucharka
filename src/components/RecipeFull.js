import React from 'react'
const RecipeFull = ({ recipe }) => {
  console.log('recipe props from RecipeFull - ', recipe)

  return (
    <div>
      <div>{recipe.name}</div>
      <div>{recipe.author}</div>
      <ul>
        {recipe.steps.map(step =>
          <li key={step.id}>
            <div>{step.title}</div>
            <div>{step.image}</div>
            <div>{step.text}</div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default RecipeFull
