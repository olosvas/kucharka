const addRecipeMaterialReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MATERIAL':
      const stateWithNewMaterial = state.concat(action.data)
      console.log("stateWithNewMaterial from reducer is - ", stateWithNewMaterial)
      return stateWithNewMaterial
    case 'REMOVE_MATERIAL':
      const newState = state.filter(materialObj => {
        console.log("materialObj is ",materialObj)
        console.log("materialObj is ",materialObj)
        return materialObj.name.toLowerCase() !== action.data.name.toLowerCase()
      });
      return newState
  default:
    return state
  }
}

export const addMaterial = materialObj => {
  return {
    type: 'ADD_MATERIAL',
    data: materialObj,
  }
}

export const removeMaterial = materialObj => {
  return {
    type: 'REMOVE_MATERIAL',
    data: materialObj,
  }
}

export default addRecipeMaterialReducer
