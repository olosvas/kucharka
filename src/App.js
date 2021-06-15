import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import RecipeGrid from './components/RecipeGrid'
import { Provider, useSelector, useDispatch } from 'react-redux'
import RecipeFull from './components/RecipeFull'
import AddRecipePage from './components/AddRecipePage'
import Login from './components/Login'
import recipeService from './services/recipeService';
import Menu from './components/Menu'
import Footer from './components/Footer'


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



const App = () => {

    const recipes = useSelector(state => state.recipes)

    const match = useRouteMatch('/recipes/:id')
    const recipe = match
        ? recipes.find(recipe => recipe.id === Number(match.params.id))
        : null




    return (
      
    <div className = "container is-max-desktop">
    
        <Menu/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/AddRecipe">
            <AddRecipePage />
          </Route>
          <Route path="/recipes/:id">
            <RecipeFull recipe={recipe} />
          </Route>
          <Route path="/">
            <RecipeGrid />
          </Route>
        </Switch>
        <Footer />

    </div>
       

    )
}


export default App