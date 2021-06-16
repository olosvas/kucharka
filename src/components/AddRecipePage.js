import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import MaterialSelection from './MaterialSelection'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Step from './Step';
import { addStep } from '../reducers/stepReducer'
import recipeService from '../services/recipeService';
import {addRecipe} from '../reducers/recipeReducer'

const AddRecipePage = () => {
  const dispatch = useDispatch()
  const steps = useSelector(state => state.steps)
  const user = useSelector(state => state.user)

  const formik = useFormik({
    initialValues: {
      mainTitle: '',
    },
    validationSchema: Yup.object({
      mainTitle: Yup.string().max(15, 'Must be 15 characters or less').required('Required')
    }),
    onSubmit: (values) => {
      //values = { username: "as", password: "as" }
      finalSubmit(values)
    }
  });

  const finalSubmit = ({mainTitle}) => {
    console.log('MainTitle from addRecipePage is - ', mainTitle)
    console.log('steps from addRecipePage is - ', steps)
    const finalObject = {
      name: mainTitle,
      author: user,
      steps: steps
    }
    console.log("finalObject is", finalObject)
    dispatch(addRecipe(finalObject))
    recipeService.create(finalObject).then(res =>
      console.log("response form finalObject submit is- ", res))
  }

  const addNewStep = () => {
    const stepObject = {
      id: steps.length
    }
    dispatch(addStep(stepObject))
  }


  return (<div>
    <div>Create new recipe</div>
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="mainTitle">Title</label>
          <input id="mainTitle" name="mainTitle" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mainTitle}/> {
            formik.touched.mainTitle && formik.errors.mainTitle
              ? (<div>{formik.errors.mainTitle}</div>)
              : null
            }
        </div>
        <div><button type='submit' >Submit</button></div>
      </form>
    </div>
    <div>
      <MaterialSelection />
    </div>
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

  </div>)
}
export default AddRecipePage
