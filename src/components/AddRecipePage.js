import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Material from './Material'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Step from './Step';
import { addStep } from '../reducers/stepReducer'

const finalSubmit = () => {

}


const AddRecipePage = () => {
  const dispatch = useDispatch()
  const steps = useSelector(state => state.steps)
  console.log("steps from addrecipePage is - ", steps)

  const addNewStep = () => {
    const stepObject = {
      id: steps.length
    }
    dispatch(addStep(stepObject))
  }




  return (<div>
    <div>Create new recipe</div>
    <div>
      <ul>
        {steps.map(step =>
          <div key={step.id}>
            <li key={step.id}>
              <Step id={step.id}/>
            </li>
          </div>
        )}
      </ul>
    </div>

    <div><button onClick={addNewStep}>New Step</button></div>
    <div><button onClick={finalSubmit}>Submit</button></div>
  </div>)
}
export default AddRecipePage
