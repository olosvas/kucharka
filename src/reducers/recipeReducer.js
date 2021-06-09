const initialRecipes = [
  {
    id: 1,
    name: 'jeden',
    author:'author1',
    steps: [
      {
        id:1,
        title:'step1title',
        image:'www.link.com',
        text:'postup'
      },
      {
        id:2,
        title:'step2title',
        image:'www.link.com',
        text:'postup'
      }
    ]
  },
  {
    id: 2,
    name: 'dva',
    author:'author2',
    steps: [
      {
        id:1,
        title:'step1title',
        image:'www.link.com',
        text:'postup'
      },
      {
        id:2,
        title:'step2title',
        image:'www.link.com',
        text:'postup'
      }
    ]
  },
  {
    id: 3,
    name: 'tri',
    author:'author3',
    steps: [
      {
        id:1,
        title:'step1title',
        image:'www.link.com',
        text:'postup'
      },
      {
        id:2,
        title:'step2title',
        image:'www.link.com',
        text:'postup'
      }
    ]
  },
  {
    id: 4,
    name: 'styri',
    author:'author4',
    steps: [
      {
        id:1,
        title:'step1title',
        image:'www.link.com',
        text:'postup'
      },
      {
        id:2,
        title:'step2title',
        image:'www.link.com',
        text:'postup'
      }
    ]
  }
]





const recipeReducer = (state = initialRecipes, action) => {
  //console.log(action)
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
