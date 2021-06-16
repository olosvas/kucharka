import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTag, removeTag } from '../reducers/tagFilterReducer'
import { addMaterial, removeMaterial} from '../reducers/addRecipeMaterialReducer'

const IndividualMaterialButton = ({materialName}) => {
  const dispatch = useDispatch()

  const pressAdd = () => {
    dispatch(addMaterial(materialName))
  }

  const pressRemove = () => {
    dispatch(removeMaterial(materialName))
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
