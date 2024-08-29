import Home from "./Home"
import Cartitems from "./Cartitems"
import Viewcart from "./Viewcart"
import {useState,createContext} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export const cartContext = createContext()



function App() {

  
const [items] = useState([
    {"id":89,
     "name":"Farmers pick",
     "amt":"299",
     "shop":"pizza hut",
     "ftype":"pizza",
     "pic":"https://www.app.tutorjoes.in/img/food/89.jpg",
     "latest":"No"
    },
    {"id":124,
     "name":"paper roast dosa",
     "amt":"65",
     "shop":"sri saivihar",
     "ftype":"veg",
     "pic":"https://www.app.tutorjoes.in/img/food/124.jpg",
     "latest":"No"
    },
    {"id":26,
     "name":"Alfredo pasta",
     "amt":"185",
     "shop":"Lakshmi food",
     "ftype":"veg",
     "pic":"https://www.app.tutorjoes.in/img/food/26.jpg",
     "latest":"yes"
    },
    {"id":9,
     "name":"chicken 65",
     "amt":"220",
     "shop":"salem RR briyani",
     "ftype":"non-veg",
     "pic":"https://www.app.tutorjoes.in/img/food/9.jpg",
     "latest":"No"
    },
    {"id":80,
     "name":"momo mia meal",
     "amt":"299",
     "shop":"pizza hut",
     "ftype":"pizza",
     "pic":"https://www.app.tutorjoes.in/img/food/80.jpg",
     "latest":"No"
    },
    {"id":28,
     "name":"Orange juice",
     "amt":"78",
     "shop":"JUICE mall",
     "ftype":"Juice",
     "pic":"https://www.app.tutorjoes.in/img/food/28.jpg",
     "latest":"No"
    },
    {"id":67,
     "name":"Milk halwa",
     "amt":"77",
     "shop":"Shri gupta Sweets",
     "ftype":"sweet",
     "pic":"https://www.app.tutorjoes.in/img/food/67.jpg",
     "latest":"No"
    },
    {"id":120,
     "name":"Veggatable Soup",
     "amt":"120",
     "shop":"Shri saibav",
     "ftype":"Veg",
     "pic":"https://www.app.tutorjoes.in/img/food/120.jpg",
     "latest":"No"
    },
    {"id":20,
     "name":"Hydrabad chicken",
     "amt":"235",
     "shop":"Lakshmi food",
     "ftype":"non-veg",
     "pic":"https://www.app.tutorjoes.in/img/food/20.jpg",
     "latest":"No"
    },
    {"id":133,
     "name":"spicy chicken",
     "amt":"300",
     "shop":"Tandori wala",
     "ftype":"non-veg",
     "pic":"https://www.app.tutorjoes.in/img/food/133.jpg",
     "latest":"No"
    },
    {"id":130,
     "name":"veg seekh kabab",
     "amt":"230",
     "shop":"tandori wala",
     "ftype":"veg",
     "pic":"https://www.app.tutorjoes.in/img/food/130.jpg",
     "latest":"No"
    },
    {"id":71,
     "name":"malai doda",
     "amt":"35",
     "shop":"sri gupta sweets",
     "ftype":"Sweets",
     "pic":"https://www.app.tutorjoes.in/img/food/71.jpg",
     "latest":"No"
    },
    {"id":58,
     "name":"jam roll cake",
     "amt":"101",
     "shop":"hendry & wolsey",
     "ftype":"cake",
     "pic":"https://www.app.tutorjoes.in/img/food/58.jpg",
     "latest":"No"
    },
    {"id":113,
     "name":"curd vadai",
     "amt":"20",
     "shop":"Aavin",
     "ftype":"veg",
     "pic":"https://www.app.tutorjoes.in/img/food/113.jpg",
     "latest":"No"
    },
    {"id":82,
     "name":"sundal meal",
     "amt":"319",
     "shop":"pizza hut",
     "ftype":"pizza",
     "pic":"https://www.app.tutorjoes.in/img/food/82.jpg",
     "latest":"No"
    },
    {"id":64,
     "name":"Walnut brownie",
     "amt":"157",
     "shop":"shree cake zone",
     "ftype":"cake",
     "pic":"https://www.app.tutorjoes.in/img/food/64.jpg",
     "latest":"No"
    },
    {"id":39,
     "name":"Cotton candy Scoop",
     "amt":"99",
     "shop":"crean & fudge",
     "ftype":"ice-cream",
     "pic":"https://www.app.tutorjoes.in/img/food/39.jpg",
     "latest":"yes"
    },
    {"id":12,
     "name":"veg pizza",
     "amt":"219",
     "shop":"Lakshmi food",
     "ftype":"pizza",
     "pic":"https://www.app.tutorjoes.in/img/food/12.jpg",
     "latest":"No"
    },
    {"id":137,
     "name":"cream of Chicken soup",
     "amt":"290",
     "shop":"tandori Wala",
     "ftype":"non-veg",
     "pic":"https://www.app.tutorjoes.in/img/food/137.jpg",
     "latest":"No"
    },
    {"id":105,
     "name":"parrotta",
     "amt":"20",
     "shop":"sugana diffen center",
     "ftype":"veg",
     "pic":"https://www.app.tutorjoes.in/img/food/105.jpg",
     "latest":"No"
    }
    ])

    const [cartitem,setCartItem] = useState([])
 
 
  return (
    <>
      <cartContext.Provider value={{cartitem,setCartItem,items}}>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home 
          />}></Route>
           <Route path='/Cartitems' element={<Cartitems />}>
           </Route>
           <Route path="Viewcart" element={ <Viewcart/>}></Route>
        </Routes>
    </BrowserRouter>
  </cartContext.Provider>

    </>
  )
}

export default App
