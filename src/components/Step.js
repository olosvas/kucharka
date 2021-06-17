import React, { useState } from 'react'
import {useFormik, resetForm} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { editStep } from '../reducers/stepReducer'

const Step = ({id}) => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      content: Yup.string().max(20, 'Must be 20 characters or less').required('Required')
    }),
    onSubmit: (values) => {
      //values = { username: "as", password: "as" }
      const submitObj = {
        ...values,
        id: id
      }
      //resetForm()
      dispatch(editStep(submitObj))
    }
  });


    return (
        <div>
          <div>Step no.{id + 1}</div>
          <div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title}/> {
                formik.touched.title && formik.errors.title
                  ? (<div>{formik.errors.title}</div>)
                  : null
              }
            </div>
            <div>
              <label htmlFor="content">Content</label>
              <input id="content" name="content" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.content}/> {
                formik.touched.content && formik.errors.content
                  ? (<div>{formik.errors.content}</div>)
                  : null
              }
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          </div>

        </div>
    )

}
export default Step
