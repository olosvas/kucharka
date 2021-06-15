const tagFilterReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAG':
      const stateWithNewTag = state.concat(action.data)
      console.log("stateWithNewTag from reducer is - ", stateWithNewTag)
      return stateWithNewTag
    case 'REMOVE_TAG':
      const newState = state.filter(tag => tag !== action.data);
      return newState
  default:
    return state
  }
}


export const addTag = (tag) => {
  return {
    type: 'ADD_TAG',
    data: tag,
  }
}

export const removeTag = (tag) => {
  return {
    type: 'REMOVE_TAG',
    data: tag,
  }
}

export default tagFilterReducer
