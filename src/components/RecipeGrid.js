import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import FilterComponent from './FilterComponent'
import recipeReducer, { initializeRecipes } from '../reducers/recipeReducer'
import recipeService from '../services/recipeService';
import NewCard from './NewCard'



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
            {/*<h2 className="subtitle">Recipes</h2>*/}
            <div><FilterComponent /></div>
            <div className="main">
                <div className="cards">
                    {filteredRecepies.map(recipe =>
                        <div key={recipe.id} className="cards_item">
                            <Link to={`/recipes/${recipe.id}`}>
                                <NewCard recipe1={recipe} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default RecipeGrid
