const initialUser = null

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
  case 'GOOD':
    return {  ...state,
      good: state.good + 1 }
  default: return state
  }
}

export default userReducer
