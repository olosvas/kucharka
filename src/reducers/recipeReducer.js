
const recipeReducer = (state = [], action) => {
  console.log("action is:" ,action)
  switch (action.type) {
  case 'SET_RECIPES':
    return action.data
  default: return state
  }

}//end of store

export const setRecipes = (recipes) => {
  return {
    type: 'SET_RECIPES',
    data: recipes,
  }
}

export default recipeReducer
