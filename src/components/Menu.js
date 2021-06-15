import React from 'react'
import {Link} from 'react-router-dom'

function Menu() {
    const padding = {
        padding: 5
      }

      
    return (
        <div>
            <div>
            <Link style={padding} to="/">Recepies</Link>
          </div>
          <div>
            <Link style={padding} to="/login">login</Link>
          </div>
        </div>
    )
}

export default Menu
