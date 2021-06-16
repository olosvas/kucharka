import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import IndividualMaterialButton from './IndividualMaterialButton'
import { useDispatch } from 'react-redux'
import { removeMaterial} from '../reducers/addRecipeMaterialReducer'

const MaterialSelection = () => {
  const dispatch = useDispatch()
  const materialsToFilter = useSelector(state => state.materials)
  const currentMaterials = useSelector(state => state.addRecipeMaterials)

  console.log("materialsToFilter is ",materialsToFilter)
  console.log("currentMaterials is ",currentMaterials)

  const pressRemove = (materialObj) => {
    dispatch(removeMaterial(materialObj))
  }

  //key prop needs to be added
  return(
    <div>
      <div>
        <ul>
          {materialsToFilter.map(materialObj =>
            <li> <IndividualMaterialButton materialObj={materialObj}/></li>
            )
          }
        </ul>
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
