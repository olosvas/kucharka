import React from 'react'
import {Link} from 'react-router-dom'


function Menu() {
    const padding = {
        padding: 5
      }


    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">

        <div className = "navbar-menu">
            <div className="navbar-start">
            <Link className = "navbar-item title is-4"  to="/">Recepies</Link>
          </div>

        <div className="navbar-end">
              <div className="bckgrnd" >
            <Link className="navbar-item title is-5"  to="/login">Log in</Link>
          </div>

        </div>
        </div>

        </nav>
    )
}

export default Menu
