import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import ProjectsColumn from './Components/ProjectColumn.jsx'


const App = () => {
    return (
        <div className='h-[105vh] w-full flex flex-col p-16 pt-7 bg-black text-slate-300 font-mono '>
            <h1 className='text-7xl font-semibold mb-5 uppercase'>Projects</h1>
            <div >
                <ProjectsColumn title='Mini Projects' />
                {/* <ProjectsColumn title='Little Projects' /> */}
            </div>
        </div>
    )
}

export default App