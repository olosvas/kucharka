import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeMaterial} from '../reducers/addRecipeMaterialReducer'
import MaterialFilterComponent from './MaterialFilterComponent'

const MaterialSelection = () => {
  const dispatch = useDispatch()
  const currentMaterials = useSelector(state => state.addRecipeMaterials)

  console.log("currentMaterials is ",currentMaterials)

  const pressRemove = (materialObj) => {
    dispatch(removeMaterial(materialObj))
  }

  //key prop needs to be added
  return(
    <div>
      <div>
        <MaterialFilterComponent />
      </div>
      <div>
        <ul>
        {currentMaterials.map(currentMaterial =>
          <li>
            {currentMaterial.name}
            {currentMaterial.quantity}
            {currentMaterial.unit}
            <button onClick={() => pressRemove(currentMaterial)}>Remove</button>
          </li>
          )
        }
        </ul>
      </div>
    </div>
  )
}

export default MaterialSelection
