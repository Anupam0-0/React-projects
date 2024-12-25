import React from 'react'
import { GlobalContext } from '../components/context'
import RecipeItem from '../components/RecipeItem';

const Home = () => {

  const { loading, recipes } = React.useContext(GlobalContext);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {recipes && recipes.length > 0 
        ? recipes.map(item => <RecipeItem key={item.id} item={item}/>)
        : <div className='lg:text-4xl sm:text-2xl text-xl text-center text-black font-extrabold'>Currently, no recipes found <br/> Try Searching something... </div>
        }
    </div>
  )
}

export default Home