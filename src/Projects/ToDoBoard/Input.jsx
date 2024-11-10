import React from 'react'
import { useState } from 'react'


const Input = ({taskList, setTaskList}) => {

    const [input, setInput] = useState("")
    const handleAddTask = (e) => {
        e.preventDefault()
        // console.log(input)
        setTaskList([...taskList, input])
        setInput("")
    }



  return (
    <div>
        
        <form className='flex flex-row items-center gap-3'>
            <input className='border rounded-lg py-1.5 px-2.5 text-lg'
                type="text" placeholder="Add a new task" value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className='bg-violet-400 text-white py-2 px-4 rounded font-semibold hover:opacity-70'
             type="submit" onClick={handleAddTask} 
            >Add</button>
        </form>
        
    </div>
  )
}

export default Input