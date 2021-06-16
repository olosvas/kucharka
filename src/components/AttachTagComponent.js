import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTags } from '../reducers/tagReducer'
import tagService from '../services/tagService'
import { setTagsForRecipe } from '../reducers/tagsForRecipeReducer'

const AttachTagComponent = () => {
  const dispatch = useDispatch()
  const [tagArr, setTagArr] = useState([])
  /*
  useEffect(()=>{
    tagService.getAllCategories().then(allCategoriesArr =>
      dispatch(setTags(allCategoriesArr))
      )
  })
  */
  const modifyState = (tag) => {
    if(tagArr.includes(tag)){
      const newTagArr = tagArr.filter(x => {return x !== tag})
      console.log("tagArr IF is", tagArr)
      setTagArr(newTagArr)
      dispatch(setTagsForRecipe(newTagArr))
    }else{
      const arr = [...tagArr, tag]
      setTagArr(arr)
      dispatch(setTagsForRecipe(arr))
    }

  }

  const allTags = useSelector(state => state.tags)
  console.log("allTags are", allTags)

  return(
    <div>
      <div>
        <ul>
          {
            allTags.map(tag=>{
              return <li><button onClick={()=>{modifyState(tag)}}>{tag}</button></li>
            })
          }
        </ul>
      </div>
      <div>
        <ul>
          {tagArr.map(tag=>
          <li>{tag}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default AttachTagComponent
