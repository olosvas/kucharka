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
import { GlobalStyles } from './components/GlobalStyles.style'

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


import  styled  from 'styled-components'

const StyledLogin = styled(Login)`
    display: inline-block;

`


const App = () => {

    const recipes = useSelector(state => state.recipes)

    const match = useRouteMatch('/recipes/:id')
    const recipe = match
        ? recipes.find(recipe => recipe.id === Number(match.params.id))
        : null




    return (
      
    <div>
    <GlobalStyles />
        <Menu/>
        <Switch>
          <Route path="/login">
            <StyledLogin />
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