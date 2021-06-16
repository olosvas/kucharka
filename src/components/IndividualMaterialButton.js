import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTag, removeTag } from '../reducers/tagFilterReducer'
import { addMaterial, removeMaterial} from '../reducers/addRecipeMaterialReducer'
import {useFormik} from 'formik';
import * as Yup from 'yup';

const IndividualMaterialButton = ({materialObj}) => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      quantity: ''
    },
    validationSchema: Yup.object({
      quantity: Yup.number().required().positive().integer(),
    }),
    onSubmit: async (values) => {
      //values = { username: "as", password: "as" }
      console.log("values from submit", values)
      const materialNameObj = {
        name: materialObj.name,
        quantity: values.quantity,
        unit: materialObj.unit
      }
      dispatch(addMaterial(materialNameObj))
    }
  });



  const pressRemove = () => {
    dispatch(removeMaterial(materialObj))
  }


  return(
    <div>
      <div>
          <label htmlFor="quantity">{materialObj.name}</label>
          <form onSubmit={formik.handleSubmit}>
          <input id="quantity" name="quantity" type="number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.quantity}/>
          {
            formik.touched.quantity && formik.errors.quantity
              ? <em>{formik.errors.quantity} </em>
              : null
            }
          {materialObj.unit}
          <button type="submit">Add</button>
          </form>
      </div>
    </div>
  )
}

export default IndividualMaterialButton
