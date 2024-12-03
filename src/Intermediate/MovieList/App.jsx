import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import MoviesFavourites from './pages/Favourites'
import { use } from 'framer-motion/client'

const App = () => {


  useEffect(() => {
    document.title = 'Movies App'

  }, [])


  return (
    <div>
      
      <Home />
      
    </div>
  )
}

export default App