import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import Cartitems from './Cartitems'
import {useContext} from 'react'
import App, { cartContext } from './App'

const Home = () => {

  const {cartitem,setCartItem,items} = useContext(cartContext)
  return (
    <>
    <div className="navbar">
        <div className='navbar2'>
            <h2 className='navh2'>footcart</h2>
            <div>
                <ul className='navul'>
                    <li><Link to="/Cartitems">Home</Link></li>
                    <li><Link to='/Viewcart'>View cart</Link></li>
                </ul>
            </div>
        </div>

    </div> 
    <Cartitems  
      />
   
    </>
  )
}

export default Home