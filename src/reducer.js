const initialRecipes = {
  recipe1: {
    id: 1,
    name: 'recipe1Name',
    author:'author1',
    steps: {
      step1: {
        title:'step1title',
        image:'www.link.com',
        text:'postup'
      },
      step2:{
        title:'step2title',
        image:'www.link.com',
        text:'postup'
      }
    }
  },
  recipe2: {
    id: 2,
    name: 'recipe2Name',
    author:'author2',
    steps: {
      step1: {
        title:'step1title',
        image:'www.link.com',
        text:'postup'
      },
      step2:{
        title:'step2title',
        image:'www.link.com',
        text:'postup'
      }
    }
  }
}





const recipeReducer = (state = initialRecipes, action) => {
  console.log(action)
  switch (action.type) {
  case 'GOOD':
    return {  ...state,
      good: state.good + 1 }
  case 'OK':
    return {  ...state,
      ok: state.ok + 1 }
  case 'BAD':
    return {  ...state,
      bad: state.bad + 1 }
  case 'ZERO':
    return {
      good: 0,
      ok: 0,
      bad: 0
    }
  default: return state
  }

}//end of store

/*
const good = () => {
  store.dispatch({
    type: 'GOOD'
  })
}

const ok = () => {
  store.dispatch({
    type: 'OK'
  })
}

const bad = () => {
  store.dispatch({
    type: 'BAD'
  })
}

const reset = () => {
  store.dispatch({
    type: 'ZERO'
  })
}
*/
export default recipeReducer
