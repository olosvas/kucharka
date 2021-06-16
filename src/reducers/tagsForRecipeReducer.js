const initialTags = []

const tagsForRecipeReducer = (state = initialTags, action) => {
  switch (action.type) {
  case 'SET_TAGS_FOR_REDUCER':
    return action.data
  default: return state
  }
}

export const setTagsForRecipe = (tags) => {
  return {
    type: 'SET_TAGS_FOR_REDUCER',
    data: tags,
  }
}

export default tagsForRecipeReducer
