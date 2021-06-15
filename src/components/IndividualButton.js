import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTag, removeTag } from '../reducers/tagFilterReducer'

const IndividualButton = ({tag}) => {
  const dispatch = useDispatch()

  const tags = useSelector(state => state.tags)
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if(pressed){
      dispatch(addTag(tag))
    } else (dispatch(removeTag(tag)))
  }, [pressed])

  const pressButton = () => {
    setPressed(!pressed)
  }

  return(
    <div>
      <div>
        <button onClick={pressButton}>{tag} is {pressed.toString()}</button>
      </div>
    </div>
  )
}

export default IndividualButton
