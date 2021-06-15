import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux'

import App from './App'

//cototjeje
import {
    BrowserRouter as Router,

} from 'react-router-dom'

import { createStore, combineReducers } from 'redux'
import recipeReducer, {initializeRecipes} from './reducers/recipeReducer'
import filterReducer from './reducers/filterReducer'
import materialsReducer from './reducers/materialsReducer'
import userReducer from './reducers/userReducer'
import stepReducer from './reducers/stepReducer'

const reducer = combineReducers({
    recipes: recipeReducer,
    filter: filterReducer,
    materials: materialsReducer,
    user: userReducer,
    steps: stepReducer
})

const store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
