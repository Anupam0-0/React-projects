import React from 'react'
import { Link } from 'react-router-dom'
import {ProjectButton} from './ProjectButton'
import { useNavigate } from "react-router-dom";


const ProjectColumn = () => {
    const navigate = useNavigate();
    return (
        <div className='' >
            <div className='ml-1 mb-1'><h1 className='text-3xl'> Mini Projects: </h1>
                <div className='h-[76vh] w-[49vw] pt-6 pl-7 flex flex-col flex-wrap gap-6  ' >

                    <Link className='w-52 ' to='./Projects/stopwatch'>
                        <ProjectButton title='StopWatch' /> 
                    </Link>

                    <Link className='w-52 ' to='./Projects/todoboard'>
                        <ProjectButton title='ToDo Board' />
                    </Link>

                    <Link className='w-52 shadow-lg ' to='/404'>
                        <ProjectButton title='Task Tracker' />
                    </Link>

                    <Link className='w-52'  to='./Projects/qrcode'>
                        <ProjectButton title='QR Generator' />
                    </Link>

                    <Link className='w-52 ' to='404'>
                        <ProjectButton title='RSS-Feed' />
                    </Link>
                    
                    <Link className='w-52 ' to='./Projects/Forms'>
                        <ProjectButton title='Forms #1' />
                    </Link>

                    <Link className='w-52 ' to='./Projects/custom-scrollbar'>
                        <ProjectButton title='Custom Scroll'/>
                    </Link>

                    <Link className='w-52' to='#'>
                        <ProjectButton title='Podcast Player'/>
                    </Link>
                    
                    <Link className='w-52' to='#'>
                        <ProjectButton title='Drag n Drop' />
                    </Link>

                    <Link className='w-52' to='#'>
                        <ProjectButton title='Log in Form' />
                    </Link>

                    <Link className='w-52' to='#'>
                        <ProjectButton title='E-Commerce' />
                    </Link>

                    <Link className='w-52' to='#'>
                        <ProjectButton title='🛒 Checkout' />
                    </Link>

                    <Link className='w-52' to='#'>
                        <ProjectButton title='WoW... nice' />
                    </Link>

                    <Link className='w-52' to='./Projects/carousel'>
                        <ProjectButton title='Carousel' />
                    </Link>

                    <Link className='w-52' to='./Projects/accordion'>
                        <ProjectButton title='Accordion' />
                    </Link>

                    <Link className='w-52' to='#'>
                        <ProjectButton title='TO BE COOKED' />
                    </Link>

                    <Link className='w-52' to='#'>
                        <ProjectButton title='TO BE COOKED' />
                    </Link>

                    <Link className='w-52' to='#'>
                        <ProjectButton title='TO BE COOKED' />
                    </Link>


                </div>
            </div>

        </div>
    )
}

export default ProjectColumn