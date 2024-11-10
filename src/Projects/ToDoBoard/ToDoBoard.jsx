import React, { useState } from "react";
import Input from "./Input";
import Board from "./Board";

const ToDoBoard = () => {
    const [taskList, setTaskList] = useState([]);

    return (
        <div className="px-12">
            <div className=" flex flex-col items-center justify-center py-8 gap-4">
                <h1 className="text-5xl font-semibold mb-2">Todo Board</h1>
                <Input taskList={taskList} setTaskList={setTaskList} />

                <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
                    {taskList.map((task, index) => (
                        // <div key={index} className="task">
                        //     <li>{task}</li>
                        // </div>
                        <Board key={index} index={index} task={task} taskList={taskList} setTaskList={setTaskList}/>
                        // we cant use key as our child component prop so we use index
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToDoBoard;
