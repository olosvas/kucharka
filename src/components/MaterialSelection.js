import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import IndividualMaterialButton from './IndividualMaterialButton'


const MaterialSelection = () => {
  const materialsToSelect = useSelector(state => state.materials)
  const currentMaterials = useSelector(state => state.addRecipeMaterials)

  console.log("materialNames is ",materialsToSelect)
  console.log("currentMaterials is ",currentMaterials)
/*
<ul>
  {tags.map(tag =>
    <li> <IndividualButton tag={tag}/></li>
    )
  }
</ul>
*/

  //key prop needs to be added
  return(
    <div>
      <div>
        <ul>
          {materialsToSelect.map(materialObj =>
            <li> <IndividualMaterialButton materialObj={materialObj}/></li>
            )
          }
        </ul>
      </div>
      <div>
        <ul>
        {currentMaterials.map(currentMaterial =>
          <li>{currentMaterial}</li>
        )
        }
        </ul>
      </div>
    </div>
  )
}

export default MaterialSelection
