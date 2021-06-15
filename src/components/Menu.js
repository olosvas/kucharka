import React from 'react'
import {Link} from 'react-router-dom'

function Menu() {
    const padding = {
        padding: 5
      }

      
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        <div id="navbarBasicExample" className = "navbar-menu">
            <div className="navbar-start">
            <Link className = "navbar-item" style={padding} to="/">Recepies</Link>
          </div>
          <hr className="navbar-divider"></hr>
        <div className="navbar-end">
              <div className="bckgrnd" >
            <Link className="navbar-item" style={padding} to="/login">Log in</Link>
          </div>
          
        </div>
        </div>
        
        </nav>
    )
}

export default Menu

{/*<nav class="navbar" role="navigation" aria-label="main navigation">

<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>


<div id="navbarBasicExample" class="navbar-menu">
<div class="navbar-start">
  <a class="navbar-item">
    Recipes
  </a>
  
      <hr class="navbar-divider">
    </div>
  </div>

<div class="navbar-end">
  <div class="navbar-item">
    <div class="buttons">
      <a class="button is-primary">
        <strong>Sign up</strong>
      </a>
      <a class="button is-light">
        Log in
      </a>
    </div>
  </div>
</div>
</nav>*/}