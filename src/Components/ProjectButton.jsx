import React from 'react'

const ProjectButton = (props) => {
    return (
        <div>
            <div className=''>
                <div className='w-52 px-7 py-2.5 border-2 border-slate-300 rounded text-xl flex justify-center
            hover:scale-105  transition-all duration-300 shadow-lg shadow-cyan-500/50 ' >
                    {/* hover:border-slate-200 hover:text-slate-200 */}
                    <h1 className='text-lg font-semibold tracking-wide' > {props.title} </h1>
                </div>
            </div>
        </div>
    )
}

export default ProjectButton