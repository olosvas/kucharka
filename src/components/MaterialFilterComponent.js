import { useDispatch, useSelector } from 'react-redux'
import React, {useState, useEffect} from 'react'
import { filterChange } from '../reducers/filterReducer'
import IndividualMaterialButton from './IndividualMaterialButton'
import CreateNewMaterialComponent from './CreateNewMaterialComponent'
import { setMaterials } from '../reducers/materialsReducer'
import materialService from '../services/materialService'

const MaterialFilterComponent = () => {
  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log("useEffect from MaterialFilterComponent runs")
    materialService.getAll().then(materialsArr => {
      console.log("materialsArr is - ",materialsArr)
      dispatch(setMaterials(materialsArr))
    })

  }, [])

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
