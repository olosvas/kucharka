import React from 'react'
//import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cube from './Cube'

const RecipeGrid = () => {
  const recipes = useSelector(state => state)
  console.log('recipes from RecipeGrid is - ', recipes)

  /*
  const match = useRouteMatch('/notes/:id')
  const note = match
    ? notes.find(note => note.id === Number(match.params.id))
    : null
    */

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
        <Cube recipe1={recipes.recipe1}/>
      </ul>
    </div>
  )
}

export default RecipeGrid
