import './Cartitems.css'
import {useContext} from 'react'
import Products from './Products'
import App,{cartContext}from './App'

const Cartitems = () => {
  
  const {cartitem,setCartItem,items} = useContext(cartContext)

  return (
    <div className='maincart'>
        {items.map((item)=>( 
            <div className='cartitem' key={item.id}>
               <Products
               item={item}
               />
            </div>
           ))}
          
    </div>
    
    )
}

export default Cartitems
