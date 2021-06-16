const addRecipeMaterialReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MATERIAL':
      const stateWithNewMaterial = state.concat(action.data)
      console.log("stateWithNewMaterial from reducer is - ", stateWithNewMaterial)
      return stateWithNewMaterial
    case 'REMOVE_MATERIAL':
      const newState = state.filter(material => material !== action.data);
      return newState
  default:
    return state
  }
}

export const addMaterial = material => {
  return {
    type: 'ADD_MATERIAL',
    data: material,
  }
}

export const removeMaterial = material => {
  return {
    type: 'REMOVE_MATERIAL',
    data: material,
  }
}

export default addRecipeMaterialReducer
