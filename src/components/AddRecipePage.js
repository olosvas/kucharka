import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import MaterialSelection from './MaterialSelection'
import AttachTagComponent from './AttachTagComponent'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Step from './Step';
import { addStep } from '../reducers/stepReducer'
import recipeService from '../services/recipeService';
import {addRecipe} from '../reducers/recipeReducer'
import {useHistory} from 'react-router-dom'


const AddRecipePage = () => {
  const dispatch = useDispatch()
  const steps = useSelector(state => state.steps)
  const user = useSelector(state => state.user)
  const recipeMaterials = useSelector(state => state.addRecipeMaterials)
  const tagsForRecipe = useSelector(state => state.tagsForRecipe)
  const history = useHistory()

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
      steps: steps,
      materials:recipeMaterials,
      tags:tagsForRecipe
    }
    console.log("finalObject is", finalObject)
    recipeService.create(finalObject).then(res =>
      {history.push("/")
      console.log("response form finalObject submit is- ", res)})

  }

  const addNewStep = () => {
    const stepObject = {
      id: steps.length
    }
    dispatch(addStep(stepObject))
  }


  return (<div>
    <div className = "mt-6 title is-5">Create new recipe</div>
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className = " title is-6" htmlFor="mainTitle">Title</label>
          <input className = "input is-rounded" placeholder = "Add title to your recipe" id="mainTitle" name="mainTitle" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mainTitle}/> {
            formik.touched.mainTitle && formik.errors.mainTitle
              ? (<div>{formik.errors.mainTitle}</div>)
              : null
            }
        </div>
        <div className = "button_dole"><button className = "button is-medium is-fullwidth is-danger is-ligh mb-6" type='submit' >Submit</button></div>
      </form>
      <div>
        <AttachTagComponent/>
      </div>
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
