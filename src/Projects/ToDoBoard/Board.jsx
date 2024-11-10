import React from 'react'

const Board = ({task, index, taskList, setTaskList }) => {

    const handleDelete = () => {
        let removeIndex = taskList.indexOf(task)
        taskList.splice(removeIndex, 1)
        setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
    }

  return (
    <div>
        
        <div className="text-center text-lg max-w-md flex flex-col items-center justify-start border rounded-md
            px-4 pt-3 pb-4 md:px-6 md:pt-4 md:pb-5 lg:px-8 lg:pt-5 lg:pb-6 bg-gray-50 shadow-md
        ">
            <p>{task}</p>
            <button
                className='bg-red-500 text-white rounded-lg py-1 px-2 mt-4'
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>


    </div>
  )
}

export default Board