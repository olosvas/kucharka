const initialUser = 'adam'

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
  case 'SET_USER':
    return {  user:action.data }
  default: return state
  }
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    data: user,
  }
}

export default userReducer
