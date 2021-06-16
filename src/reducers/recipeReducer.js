
const recipeReducer = (state = [], action) => {
  console.log("action is:" ,action)
  switch (action.type) {
  case 'SET_RECIPES':
    return action.data
  case 'ADD_RECIPE':
    if(state.map()){
      return state
    }
    return state.concat(action.data)
  default: return state
  }

}//end of store

export const setRecipes = (recipes) => {
  return {
    type: 'SET_RECIPES',
    data: recipes,
  }
}

export const addRecipe = (recipeObj) => {
  return {
    type: 'ADD_RECIPE',
    data: recipeObj,
  }
}

export default recipeReducer
