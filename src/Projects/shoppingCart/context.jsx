import React, { createContext } from 'react'



//create the context
//provide the state to context
//wrap context provider around the app
//consume the context using useContext hook

const ShoppingCartContext = createContext();


function ShoppingCartProvider({ children }) {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  return (
    <ShoppingCartContext.Provider value={{ products, setProducts, cart, setCart, total, setTotal }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
    


export { ShoppingCartProvider }
