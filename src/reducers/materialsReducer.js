const initialMaterials = [
    {
      id: "609d75a0937e9653008187ca",
      name: "Zeler",
      unit: 'kg'
    },
    {
      id: "609d7620937e9653008187cb",
      name: "Mrkva",
      unit: 'ks'
    },
    {
      id: "609d7703a251b4521ccb20eb",
      name: "Zemiak",
      unit: 'kg'
    },
    {
      id: "60a109cfcf30865be86ae3f4",
      name: "miska",
      unit: 'ks'
    },
    {
      id: "60a109cfcf30865be86af5r8",
      name: "mlieko",
      unit: 'l'
    },
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
