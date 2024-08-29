import React from 'react'
import './Viewcart.css'
import {useState,useEffect,useContext} from 'react'
import App, { cartContext } from './App'

const Viewcart = () => {

  const {cartitem} = useContext(cartContext)

  
  const [total,setTotal] = useState(0)

  useEffect(()=>{
     const amount= cartitem.reduce((init,value)=>(init+parseInt(value.amt)),0)
       setTotal(amount)
      
  },[cartitem])
 
  return (
    <>
       <h2 className='carttitle'>cart products</h2>
         {cartitem.map((cart)=>(
             <div className='mainviewcart' key={cart.id}>
                 <div className="imgbox"><img src={cart.pic} alt="img" /></div> 
                   <div className='addlist'>
                     <p className='add1'>{cart.name}</p>
                     <p className='add2'>price RS:{cart.amt}</p>
                   </div> 
             </div>  
         ))}     
      <div className='total'>
          <h3 className='amt'>Total amount RS:{total}</h3>
      </div>
    </>
  )
}

export default Viewcart
