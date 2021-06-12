import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Material from './Material'


const AddRecipe = () => {
    const [recipe, setRecipes] = useState([])
    const [selectedMaterial, setSelectedMaterial] = useState([])

    const materials = useSelector(state => state.materials)

    //console.log("matrs z reduceru je: ", materials)




    return (
        <div>
        
        </div>
    )

}
export default AddRecipe
