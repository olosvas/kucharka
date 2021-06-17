import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import recipeService from '../services/recipeService'



const RecipeFull = ({ recipeProp }) => {
  console.log("reipe prop is: ", recipeProp)
  const [recipe, setRecipe] = useState({name: "loading", author: "loading", steps: [{0:"loading"}]})

  console.log('recipe state from RecipeFull - ', recipe)
  let match = useRouteMatch()

  useEffect(()=>{
    recipeService
      .getOne(match.url.split('/')[2])
      .then(recipe => {
        setRecipe(recipe)
        console.log('recipe from hook is - ', recipe)
      })
  },[])




const removeRecipe = (recipeToRemove) => {
 console.log("recipe to remove is: ", recipeToRemove)
 recipeService.deleteRecipe(recipeToRemove.name.toLowerCase())

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
