import React from 'react'
import { useContext } from 'react'
import App, { cartContext } from './App'

const Products = ({item}) => {


 const {cartitem,setCartItem} = useContext(cartContext)
 function addCart(){
    setCartItem([...cartitem,item])
 }
 function removeCart(id){
    const filters = cartitem.filter(cart=>cart.id!==id)
    setCartItem(filters)
 }
  return (
    <div className='foodcart'>
         <div className='img'><img src={item.pic} alt="image" /></div>
                 <div className='listdiv'>
                  <p className='p1'>{item.name}</p>
                  <p className='p2'>{`price RS: ${item.amt}`}</p>
                 {cartitem.includes(item)?
                  ( <button className='removecart' onClick={()=>{removeCart(item.id)}}>Remove from cart</button>):
                 (<button  className='button'
                 onClick={addCart}>Add to Cart</button>)}
               </div>
    </div >
  )
}

export default Products