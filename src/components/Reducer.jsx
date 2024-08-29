import React from 'react'
import {useReducer} from 'react'


const initialState=[]
function reducer(state,action){
    switch(action.type){
        case "ADD_ITEM":
           return [...state,{id:state.length+1,name:action.load}]
        case "DELETE_ITEM":
            return state.filter((item)=>item.id!==action.load)
        case "UPDATE_ITEM":
            return state.map((sta)=>((sta.id===action.load.id)?{...sta,name:action.load.newname}:sta))
    }

}

const Reducer = () => {
 
   const [todo,dispatch] = useReducer(reducer,initialState)
   
   function handleSubmit(e){
       e.preventDefault()
   }

   function handleChange(e){
    if(e.key==="Enter"){
        const value = e.target.value
        dispatch({type:"ADD_ITEM",load:value})
        
    }
   }
    return (
   <>
      <form action="" style={{margin:"10px"}} onSubmit={(e)=>{handleSubmit(e)}}>
          <label htmlFor="data">Add Data: </label>
          <input type="text" id="data" onKeyDown={(e)=>handleChange(e)} />
      </form>
      <div>
         <ul>
            {todo.map((to)=>(<li key={to.id}>{to.name}
            <button onClick={()=>{dispatch({type:"UPDATE_ITEM",load:{id:to.id,newname:prompt("Enter a name")}})}}>update</button>
            <button onClick={()=>{ dispatch({type:"DELETE_ITEM",load:to.id})}}>delete</button></li>)
            )}
         </ul>
      </div>
   </>
  )
}

export default Reducer
