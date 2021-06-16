const materialsReducer = (state = [], action) => {
    //console.log("Action z reduceru is" ,action)
  switch (action.type) {
    case 'SET_MATERIALS':
      return action.data
    default: return state
    }
}

export const setMaterials = (materialsArr) => {
  return {
    type: 'SET_MATERIALS',
    data: materialsArr,
  }
}

export default materialsReducer
