import React from 'react'
import { useHistory } from 'react-router-dom'
/*
const handleLogin = async (event) => {
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

const Login = () => {
  const history = useHistory()

  const onSubmit = (event) => {
    console.log('event from Login is - ', event)
    event.preventDefault()
    //props.onLogin('mluukkai')
    history.push('/')
  }

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input />
        </div>
        <div>
          password: <input type='password' />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login
