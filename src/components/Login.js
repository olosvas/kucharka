import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useFormik} from 'formik';
import * as Yup from 'yup';

/*
const handleSubmit = async (event) => {
  event.preventDefault()
  console.log('logging in with', username, password)

  try {
    const user = await loginService.login({
      username, password,
    })

    window.localStorage.setItem(
      'loggedNoteappUser', JSON.stringify(user)
    )
    noteService.setToken(user.token)
    setUser(user)
    setUsername('')
    setPassword('')
  } catch (exception) {
    console.error('Wrong credentials')
    setTimeout(() => {
      console.error('timeout')
    }, 5000)
  }

}
*/

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      password: Yup.string().max(20, 'Must be 20 characters or less').required('Required')
    }),
    onSubmit: async (values) => {
      //values = { username: "as", password: "as" }
      console.log(values)
    }
  });


  const user = useSelector(state => state.user)
  const history = useHistory()


  const loginForm = () => {
    return (<div>
      <div >
        <div>
          <h2>Login</h2>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input id="username" name="username" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}/> {
                formik.touched.username && formik.errors.username
                  ? (<div>{formik.errors.username}</div>)
                  : null
              }
            </div>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}/> {
              formik.touched.password && formik.errors.password
                ? (<div>{formik.errors.password}</div>)
                : null
            }
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>)
  }//end of loginForm function

  return (<div>
    {
      user === null
        ? loginForm()
        : <div>
            <p>{user.name}
              logged-in</p>
            <div>login options</div>
          </div>
    }
    < /div>
  )
}

export default LoginForm
