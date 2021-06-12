const initialMaterials = [
    {
      "_id": "609d75a0937e9653008187ca",
      "name": "Zeler",
      "__v": 0
    },
    {
      "_id": "609d7620937e9653008187cb",
      "name": "Mrkva",
      "__v": 0
    },
    {
      "_id": "609d7703a251b4521ccb20eb",
      "name": "Zemiak",
      "__v": 0
    },
    {
      "_id": "60a109cfcf30865be86ae3f4",
      "name": "miska",
      "__v": 0
    },
    {
      "_id": "60a10a4205675a5e9cf6de4e",
      "name": "kon",
      "__v": 0
    },
    {
      "_id": "60a1194da63c0b57fc886750",
      "name": "sda",
      "__v": 0
    },
    {
      "_id": "60a11a7a2f4495270c82c79e",
      "name": "macky a kosky",
      "__v": 0
    },
    {
      "_id": "60a39f077311cc39d8ee72d0",
      "name": "Zemiak",
      "__v": 0
    },
    {
      "_id": "60a39f117311cc39d8ee72d1",
      "name": "bandurka",
      "__v": 0
    },
    {
      "_id": "60a3da0d10396342549459a8",
      "name": "voda",
      "__v": 0
    },
    {
      "_id": "60a3e8fae359f3235c32f661",
      "name": "kacakk",
      "__v": 0
    },
    {
      "_id": "60a3f9e5b791521a2403eaa8",
      "name": "macka",
      "__v": 0
    },
    {
      "_id": "60ac0f424c65245c9cf290ed",
      "name": "borvoicka",
      "__v": 0
    },
    {
      "_id": "60ac10874c65245c9cf290ee",
      "name": "kravu",
      "__v": 0
    }
  ]


  const materialsReducer = (state = initialMaterials, action) => {
    //console.log("Action z reduceru is" ,action)
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

}

export default materialsReducer