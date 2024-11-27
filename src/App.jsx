import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import ProjectsColumn from './Components/ProjectColumn.jsx'
import Intermediate from './Components/Intermediate.jsx'


const App = () => {
    return (
        <div className='w-full flex flex-col px-6 lg:p-16 pt-7 bg-black text-slate-300 font-mono '>
            <h1 className='text-7xl font-semibold mb-5 uppercase'>Projects</h1>
            <div className='flex flex-col gap-6' >
                <Intermediate />
                <ProjectsColumn />
                
                {/* <ProjectsColumn title='Little Projects' /> */}
            </div>
        </div>
    )
}

export default App