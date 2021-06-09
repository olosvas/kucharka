import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import RecipeGrid from './components/RecipeGrid'
import { Provider } from 'react-redux'

//comment from Adam branch

//cototjeje
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from 'react-router-dom'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)


/*
const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div><strong>{note.important ? 'tärkeä' : ''}</strong></div>
    </div>
  )
}
*/


const Users = () => (
  <div>
    <h2>TKTL notes app</h2>
    <ul>
      <li>Matti Luukkainen</li>
      <li>Juha Tauriainen</li>
      <li>Arto Hellas</li>
    </ul>
  </div>
)

const Login = (props) => {
  const history = useHistory()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
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

/*
<Route path="/notes/:id">
  <Note note={note} />
</Route>
*/

const App = () => {
  const [user, setUser] = useState(null)



  const login = (user) => {
    setUser(user)
  }

  const padding = {
    padding: 5
  }



  return (
    <div>
      <div>
        <Link style={padding} to="/">Recepies</Link>
        <Link style={padding} to="/users">users</Link>
        {user
          ? <em>{user} logged in</em>
          : <Link style={padding} to="/login">login</Link>
        }
      </div>

      <Switch>
        <Route path="/users">
          {user ? <Users /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login onLogin={login} />
        </Route>
        <Route path="/">
          <RecipeGrid />
        </Route>
      </Switch>
      <div>
        <br />
        <em>Note app, Department of Computer Science 2021</em>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
