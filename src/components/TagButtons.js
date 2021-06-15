import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import IndividualButton from './IndividualButton'

const TagButtons = () => {
  const tags = useSelector(state => state.tags)

  //key prop needs to be added
  return(
    <div>
      <div>
        <ul>
          {tags.map(tag =>
            <li> <IndividualButton tag={tag}/></li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default TagButtons
