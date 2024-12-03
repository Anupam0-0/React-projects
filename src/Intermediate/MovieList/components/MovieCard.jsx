import React from 'react'

function MovieCard({props}) {

    function onFavouriteClick(){
        console.log('clicked');
    }

  return (
    <div className='h-52 w-44 p-4 shadow-md rounded-2xl flex flex-col justify-between border-[1.2px] border-blue-900 shadow-blue-900/60 hover:scale-105 duration-700  ease-in-out'>
        <div className=''>
            <img src={props.url} alt={props.title} className='w-full h-full rounded' />
            <button className='relative bottom-14 left-28  text-xl z-10 hover:scale-105' onClick={onFavouriteClick}>
                🩷
            </button>
        </div>

        <div className='mt-4 flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>{props.title}</h3>
            <p className='text-gray-500'>{props.release_date}</p>

        </div>
    </div>
  )
}

export default MovieCard
