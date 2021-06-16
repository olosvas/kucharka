const initialTags = []

const tagsForRecipeReducer = (state = initialTags, action) => {
  switch (action.type) {
  case 'SET_TAGS':
    return action.data
  default: return state
  }
}

export const setTags = (tags) => {
  return {
    type: 'SET_TAGS',
    data: tags,
  }
}

export default tagsForRecipeReducer
