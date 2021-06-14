import recipeService from '../services/recipeService';

/*
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
*/




const recipeReducer = (state = [], action) => {
  console.log("action is:" ,action)
  switch (action.type) {
  case 'INITIALIZE_RECIPES':
    return action.data
  default: return state
  }

}//end of store

export const initializeRecipes = (recipes) => {
  return {
    type: 'INITIALIZE_RECIPES',
    data: recipes,
  }
}

export default recipeReducer
