import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Cube from '../Cube'
import FilterComponent from '../FilterComponent'
import TagButtons from '../TagButtons'
import recipeService from '../../services/recipeService';
import tagService from '../../services/tagService';
import {setRecipes} from '../../reducers/recipeReducer';
import {setTags} from '../../reducers/tagReducer'

const RecipeGrid = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    recipeService
      .getAll()
      .then(initialRecipes => {
        console.log('useEffect in grid runs')
        dispatch(setRecipes(initialRecipes))
      })
    tagService.getAllCategories().then(allCategoriesArr =>
      dispatch(setTags(allCategoriesArr))
      )
  }, [])

  const recipes = useSelector(state => state.recipes)
  const filter = useSelector(state => state.filter)
  const tagFilter = useSelector(state => state.tagFilter)

  console.log("tagFilter from RecipeGrid is - ", tagFilter)
  console.log('recipes from RecipeGrid is - ', recipes)


  const filteredRecepies = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(filter.toLowerCase())
  )

  const afterTagFilter = filteredRecepies.filter(recipe =>
    recipe.tags.filter(tag => tagFilter.includes(tag)).length > 0 ? true : false
  )

  let recipesToShow = afterTagFilter

  if(afterTagFilter.length === 0){
    recipesToShow = filteredRecepies
  }


  return (
    <div>
      <h2>Recipes</h2>
      <div><FilterComponent/></div>
      <div>
        <TagButtons />
      </div>
      <ul>
        {recipesToShow.map(recipe =>
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
