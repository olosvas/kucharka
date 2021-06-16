import { useDispatch, useSelector } from 'react-redux'
import React, {useState} from 'react'
import { filterChange } from '../reducers/filterReducer'
import IndividualMaterialButton from './IndividualMaterialButton'
import CreateNewMaterialComponent from './CreateNewMaterialComponent'

const MaterialFilterComponent = () => {
  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()
  const materialsToFilter = useSelector(state => state.materials)


  const filteredMaterials = materialsToFilter.filter(material =>
    material.name.toLowerCase().includes(filter.toLowerCase())
  )

  const handleChange = (event) => {
    event.preventDefault()
    const filterValue = event.target.value
    setFilter(filterValue)
  }

  const materialList = () => {
    return(
      <div>
        <ul>
          {filteredMaterials.map(materialObj =>
            <li> <IndividualMaterialButton materialObj={materialObj}/></li>
            )
          }
        </ul>
      </div>
    )
  }


 const renderCreateNewMaterialComponent = () => {
   return(
     <div>
       {filteredMaterials.length === 0 ?
         <CreateNewMaterialComponent/>
         : materialList()
       }
     </div>
   )
 }

  return (
    <div>
      <div>
        <input onChange={handleChange}/>
      </div>
      <div>
      {
        filter === '' ?
        <div> napis daco</div>
        : renderCreateNewMaterialComponent()
      }
      </div>
    </div>
  )
}

export default MaterialFilterComponent
