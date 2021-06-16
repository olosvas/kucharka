import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import IndividualMaterialButton from './IndividualMaterialButton'

const MaterialSelection = () => {
  const materialsToSelect = useSelector(state => state.materials)
  const materialNames = materialsToSelect.map(materialObj => materialObj.name)

  console.log("materialNames is ",materialNames)
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
          {materialNames.map(materialName =>
            <li> <IndividualMaterialButton materialName={materialName}/></li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default MaterialSelection
