import React from 'react'

const ProjectButton = (props) => {
    return (
        <div>
            <div className=''>
                <div className='w-64 lg:w-52 px-10 py-3 md:px-7 md:py-2.5 border-2 border-slate-300 rounded text-xl flex justify-center
            hover:scale-105  transition-all duration-300 shadow-lg shadow-cyan-500/50 ' >
                    {/* hover:border-slate-200 hover:text-slate-200 */}
                    <h1 className='text-lg font-semibold tracking-wide text-center' > {props.title} </h1>
                </div>
            </div>
        </div>
    )
}

const IntermediateButton = (props) => {
    return (
        <div>
            <div className=''>
                <div className='w-72 px-1 py-1 pb-2 border-2 border-slate-300 rounded text-xl flex flex-col justify-center
            hover:scale-105  transition-all duration-300 shadow-lg shadow-cyan-500/50 ' >
                    {/* hover:border-slate-200 hover:text-slate-200 */}
                    <img className='cover  ' src="https://wallpaperaccess.com/full/6923230.jpg" alt="alt" />
                    <h1 className='text-lg font-semibold tracking-wide text-center' > {props.title} </h1>
                </div>
            </div>
        </div>
    )
}

export { ProjectButton, IntermediateButton }

