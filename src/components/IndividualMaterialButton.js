import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTag, removeTag } from '../reducers/tagFilterReducer'
import { addMaterial, removeMaterial} from '../reducers/addRecipeMaterialReducer'
import {useFormik} from 'formik';
import * as Yup from 'yup';

const IndividualMaterialButton = ({materialName}) => {
  const dispatch = useDispatch()

  const pressAdd = () => {

    dispatch(addMaterial(materialName))
  }

  const pressRemove = () => {
    dispatch(removeMaterial(materialName))
  }


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
