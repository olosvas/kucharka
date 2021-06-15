const initialTags = []

const tagReducer = (state = initialTags, action) => {
  switch (action.type) {
  case 'GET_TAGS':
    return {  user:action.data }
  default: return state
  }
}

export const getTags = (tags) => {
  return {
    type: 'GET_TAGS',
    data: tags,
  }
}

export default tagReducer
