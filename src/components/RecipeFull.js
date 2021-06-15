import { keys } from '@material-ui/core/styles/createBreakpoints'
import React, { useState, useEffect } from 'react'
const RecipeFull = ({ recipe }) => {
    console.log('recipe props from RecipeFull - ', recipe)



    return (
        <div className="content">
            <h1>{recipe.name}</h1>
            <h6>{recipe.author}</h6>
            {/*<ul>
                {materials.map(material => {
                    <li key={material._id}>{material.name}</li>
                })}
            </ul>*/}
            <ul>
                <h5>Steps</h5>
                {recipe.steps.map(step =>
                    <li key={step.id}>
                        <div>{step.title}</div>
                        <div>{step.text}</div>
                        <figure>
                            <img src={step.image}></img>
                        </figure>

                    </li>
                )}
            </ul>
        </div>
    )
}

export default RecipeFull
