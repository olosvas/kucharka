import { useDispatch } from 'react-redux'
import React from 'react'
import { filterChange } from '../reducers/filterReducer'

const FilterComponent = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    const filterValue = event.target.value
    dispatch(filterChange(filterValue))
  }


  return (
    <div>
      <input className="input is-medium" onChange={handleChange} placeholder="Find your recipe"/>
    </div>
  )
}
export default FilterComponent

