import React from 'react'
import { Link } from 'react-router-dom'
import ProjectButton from './ProjectButton'
import { useNavigate } from "react-router-dom";


const ProjectColumn = (props) => {
    // const [title,] = props;
    const navigate = useNavigate();
    return (
        <div className='' >
            <div className='ml-1 mb-1'><h1 className='text-3xl'> {props.title}: </h1>
                <div className='h-[76vh] w-[49vw] pt-6 pl-7 flex flex-col flex-wrap gap-6  ' >
                    {/* border-2 border-pink-500 */}
                    {/* pt-5 pl-8 -pr-8 */}
                    {/* <ProjectButton title='StopWatch' ><Link to='./Projects/stopwatch' /></ProjectButton>
                    <button onClick={() => navigate("./Projects/Stopwatch")}>button</button>
                    <ProjectButton title='StopWatch' onClick={() => navigate("./Projects/Stopwatch")} ></ProjectButton> */}


                    <Link className='w-52 ' to='./Projects/stopwatch'>
                        <ProjectButton title='StopWatch' /> 
                    </Link>

                    <Link className='w-52 ' to='./Projects/todoboard'>
                        <ProjectButton title='ToDo Board' />
                    </Link>

                    <Link className='w-52 shadow-lg ' to='/404'>
                        <ProjectButton title='Task Tracker' />
                    </Link>

                    <Link className='w-52'  to='/x'>
                        <ProjectButton title='X-X-X-X' />
                    </Link>

                    <Link className='w-52 ' to='404'>
                        <ProjectButton title='RSS-Feed' />
                    </Link>
                    
                    <Link className='w-52 ' to='./Projects/Forms'>
                        <ProjectButton title='Forms #1' />
                    </Link>

                    <Link className='w-52 ' to='#'>
                        <ProjectButton title='Y-Y-Y-Y' />
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
                        <ProjectButton title='Navbar' />
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