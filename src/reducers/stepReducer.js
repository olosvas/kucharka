const initialSteps = []

const stepReducer = (state = initialSteps, action) => {
  switch (action.type) {
  case 'ADD_STEP':
    const newArray = state.concat(action.data)
    return newArray
  default: return state
  }
}

export const addStep = (step) => {
  return {
    type: 'ADD_STEP',
    data: step,
  }
}

export default stepReducer
