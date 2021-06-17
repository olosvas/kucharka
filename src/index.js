import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import RecipeGrid from './components/RecipeGrid'
import { Provider, useSelector, useDispatch } from 'react-redux'
import RecipeFull from './components/RecipeFull'
import AddRecipePage from './components/AddRecipePage'
import Login from './components/Login'
import recipeService from './services/recipeService';
import Menu from './components/Menu'


//cototjeje
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useRouteMatch
} from 'react-router-dom'

import { createStore, combineReducers } from 'redux'
import recipeReducer, {setRecipes} from './reducers/recipeReducer'
import filterReducer from './reducers/filterReducer'
import materialsReducer from './reducers/materialsReducer'
import userReducer from './reducers/userReducer'
import stepReducer from './reducers/stepReducer'
import tagReducer, {getTags} from './reducers/tagReducer'
import tagFilterReducer from './reducers/tagFilterReducer'
import addRecipeMaterialReducer from './reducers/addRecipeMaterialReducer'
import tagsForRecipeReducer from './reducers/tagsForRecipeReducer'

const reducer = combineReducers({
    recipes: recipeReducer,
    filter: filterReducer,
    materials: materialsReducer,
    user: userReducer,
    steps: stepReducer,
    tags: tagReducer,
    tagFilter: tagFilterReducer,
    addRecipeMaterials: addRecipeMaterialReducer,
    tagsForRecipe:tagsForRecipeReducer
})

const store = createStore(reducer)


const App = () => {
  const dispatch = useDispatch()

/* generates tags from recipes
  useEffect(() => {
    recipeService
      .getAll()
      .then(initialRecipes => {
        console.log('useEffect runs')
        const allTagsUnique = initialRecipes.map(
          recipeObj => recipeObj.tags
        )
        const oneArray = Array.prototype.concat(...allTagsUnique)
        const uniqueTags = [...new Set(oneArray)]
        dispatch(getTags(uniqueTags))
      })
  }, [])
*/



/*
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])
  */

  const recipes = useSelector(state => state.recipes)

  const match = useRouteMatch('/recipe/:id')
  const recipe = match
    ? recipes.find(recipe => recipe.id === match.params.id)
    : null


  const padding = {
    padding: 5
  }

  return (
    <div className ="container is-max-desktop">
      <Menu/>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/AddRecipe">
          <AddRecipePage />
        </Route>
        <Route path="/recipe/:id">
          <RecipeFull recipeProp={recipe} />
        </Route>
        <Route path="/">
          <RecipeGrid />
        </Route>
      </Switch>


      <div>
        <br />
        <em>CookBook, BCAA 019</em>
      </div>
    </div>
  )
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
