import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTag, removeTag } from '../reducers/tagFilterReducer'

const IndividualMaterialButton = ({materialName}) => {
  const dispatch = useDispatch()

  const pressAdd = () => {

  }

  const pressRemove = () => {
    
  }

/*
  useEffect(() => {
    if(pressed){
      dispatch(addTag(tag))
    } else (dispatch(removeTag(tag)))
  }, [pressed])
  */


  return(
    <div>
      <div>
        {materialName}
        <button onClick={pressAdd}>add</button>
        <button onClick={pressRemove}>remove</button>
      </div>
    </div>
  )
}

export default IndividualMaterialButton
