import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import Material from './Material'


const AddRecipe = () => {
    const [recipe, setRecipes] = useState([])
    const [selectedMaterial, setSelectedMaterial] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm({})

    const materials = useSelector(state => state.materials)

    //console.log("matrs z reduceru je: ", materials)

    const onSubmit = data => {
        setRecipes([...recipe, data])

    }

    const selectMaterial = matr => {
        setSelectedMaterial([...selectedMaterial, matr])
        console.log(selectedMaterial)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeHolder="Recipes name"
                    {...register('name')}
                />
                <textarea
                    type="text"
                    placeHolder="Steps"
                    {...register('steps')} />

                <ul>
                    {materials.map(material =>
                        <div key={material.id} >
                            <li>
                                <Material recipe1={material} />
                            </li>
                        </div>
                    )}
                </ul>

                <input type="submit" />
            </form>


        </div>
    )

}
export default AddRecipe