import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import IndividualButton from './IndividualButton'

const TagButtons = () => {
  const tags = useSelector(state => state.tags)

  //key prop needs to be added
  return(

      <div className = "columns is-mobile">
          {tags.map(tag =>
            <div  className = "column"> <IndividualButton tag={tag}/></div>
            )
          }
      </div>

  )
}

export default TagButtons
