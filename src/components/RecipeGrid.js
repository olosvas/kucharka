import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Cube from './Cube'
import FilterComponent from './FilterComponent'
import recipeReducer, { initializeRecipes } from '../reducers/recipeReducer'
import recipeService from '../services/recipeService';



const RecipeGrid = () => {
  const recipes = useSelector(state => state.recipes)
  const filter = useSelector(state => state.filter)

  console.log('recipes from RecipeGrid is - ', recipes)
//  console.log('filter value from FlterComponent is - ', filter)



const dispatch = useDispatch()

useEffect(() => {
    recipeService
        .getAll()
        .then(initialRecipes => {
            dispatch(initializeRecipes(initialRecipes))
            console.log("initialRecipes from index is - ", initialRecipes)
        })
}, [])

  const filteredRecepies = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(filter.toLowerCase())
  )

//  console.log('filteredRecepies is - ',filteredRecepies)

  return (
    <div>
      <h2>Recipes</h2>
      <div><FilterComponent/></div>
      <ul>
        {filteredRecepies.map(recipe =>
          <div key={recipe.id}>
            <li>
              <Link to={`/recipes/${recipe.id}`}>
                <Cube recipe1={recipe}/>
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  )
}

export default RecipeGrid
