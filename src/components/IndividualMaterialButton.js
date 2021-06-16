import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTag, removeTag } from '../reducers/tagFilterReducer'
import { addMaterial, removeMaterial} from '../reducers/addRecipeMaterialReducer'
import {useFormik} from 'formik';
import * as Yup from 'yup';

const IndividualMaterialButton = ({materialObj}) => {
  const dispatch = useDispatch()
  console.log("materialName - ", materialObj)

  const formik = useFormik({
    initialValues: {
      quantity: ''
    },
    validationSchema: Yup.object({
      quantity: Yup.string().max(15, 'Must be 15 characters or less').required('Required')
    }),
    onSubmit: async (values) => {
      //values = { username: "as", password: "as" }
      console.log(values)
      pressAdd(values)
    }
  });

  const pressAdd = ({quantity}) => {
    const materialNameObj = {
      name: materialObj.materialName,
      quantitiy: quantity,

    }
    dispatch(addMaterial(materialNameObj))
  }

  const pressRemove = () => {
    dispatch(removeMaterial(materialObj.materialName))
  }


  return(
    <div>
      <div>
          <label htmlFor="quantity">{materialObj.name}</label>
          <form onSubmit={formik.handleSubmit}>
          <input id="quantity" name="quantity" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.quantity}/>
          {
            formik.touched.quantity && formik.errors.quantity
              ? <em>{formik.errors.quantity} </em>
              : null
            }
          {materialObj.unit}
          <button type="submit">Add</button>
          <button onClick={pressRemove}>remove</button>
          </form>
      </div>
    </div>
  )
}

export default IndividualMaterialButton
