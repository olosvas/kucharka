import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cube from './Cube'

const RecipeGrid = () => {
  const recipes = useSelector(state => state.recipes)
  console.log('recipes from RecipeGrid is - ', recipes)


  /*
  {recipes.map(note =>
    <li key={note.id}>
      <Link to={`/notes/${note.id}`}>{note.content}</Link>
    </li>
  )}
  */

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {recipes.map(recipe =>
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
