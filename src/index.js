import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import RecipeGrid from './components/RecipeGrid'
import { Provider, useSelector } from 'react-redux'
import RecipeFull from './components/RecipeFull'
import AddRecipe from './components/AddRecipe'
/*eslint linebreak-style: ["error", "windows"]*/
//comment from Adam branch
/*eslint-disable*/

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
import recipeReducer from './reducers/recipeReducer'
import filterReducer from './reducers/filterReducer'
import materialsReducer from './reducers/materialsReducer'
//import AddRecipe from './components/AddRecipe'

const reducer = combineReducers({
    recipes: recipeReducer,
    filter: filterReducer,
    materials: materialsReducer
})

const store = createStore(reducer)


/*
const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div><strong>{note.important ? 'tärkeä' : ''}</strong></div>
    </div>
  )
}
*/


const Users = () => (
    <div>
        <h2>TKTL notes app</h2>
        <ul>
            <li>Matti Luukkainen</li>
            <li>Juha Tauriainen</li>
            <li>Arto Hellas</li>
        </ul>
    </div>
)

const Login = (props) => {
    const history = useHistory()

    const onSubmit = (event) => {
        event.preventDefault()
        props.onLogin('mluukkai')
        history.push('/')
    }

    return (
        <div>
            <h2>login</h2>
            <form onSubmit={onSubmit}>
                <div>
                    username: <input />
                </div>
                <div>
                    password: <input type='password' />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}




const App = () => {
    const [user, setUser] = useState(null)

    const recipes = useSelector(state => state.recipes)

    const match = useRouteMatch('/recipes/:id')
    const recipe = match
        ? recipes.find(recipe => recipe.id === Number(match.params.id))
        : null


    const login = (user) => {
        setUser(user)
    }

    const padding = {
        padding: 5
    }




    return (
        <div>
            <div>
                
                <Link style={padding} to="/">Recepies</Link>
                <Link style={padding} to="/addRecipe">add recipe</Link>
                <Link style={padding} to="/users">users</Link>
                {user
                    ? <em>{user} logged in</em>
                    : <Link style={padding} to="/login">login</Link>
                }
            </div>

            <Switch>
                <Route path="/users">
                    {user ? <Users /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                    <Login onLogin={login} />
                </Route>
                <Route path="/recipes/:id">
                    <RecipeFull recipe={recipe} />
                </Route>
                <Route path="/" exact>
                    <RecipeGrid/>
                </Route>
                <Route path="/addRecipe" component={AddRecipe}/>
                    
            </Switch>
            <div>
                <br />
                <em>Note app, Department of Computer Science 2021</em>
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
