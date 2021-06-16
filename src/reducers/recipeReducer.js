
const recipeReducer = (state = [], action) => {
  console.log("action is:" ,action)
  switch (action.type) {
  case 'GET_RECIPES':
    return action.data
  default: return state
  }

}//end of store

export const getRecipes = (recipes) => {
  return {
    type: 'GET_RECIPES',
    data: recipes,
  }
}

export default recipeReducer
