import React from 'react'
import { Link } from 'react-router-dom'
import recipeService from '../services/recipeService'



const RecipeFull = ({ recipe }) => {
  console.log('recipe props from RecipeFull - ', recipe)

const removeRecipe = (recipeToRemove) => {
 console.log("recipe to remove is: ", recipeToRemove)
 recipeService.deleteRecipe(recipeToRemove.id)

}

  return (
    <div>
    <div>
      <button onClick={() => removeRecipe(recipe)}>Remove</button>
    </div>
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
