const initialSteps = []

const stepReducer = (state = initialSteps, action) => {
  switch (action.type) {
    case 'ADD_STEP':
      const newArray = state.concat(action.data)
      return newArray
    case 'EDIT_STEP':
      //replaces object with new object if found
      console.log('state from edit_step is - ', state)
      console.log("action.data is - ", action.data)
      const objArray = []
      objArray.push(action.data)
      const editedState = state.map(obj =>
        objArray.find(o => o.id === obj.id) || obj
      )
      console.log('editedState from reducer - ', editedState)
      return editedState

  default: return state
  }
}

export const addStep = (step) => {
  return {
    type: 'ADD_STEP',
    data: step,
  }
}

export const editStep = (step) => {
  return {
    type: 'EDIT_STEP',
    data: step,
  }
}


export default stepReducer
