import React, { useState } from 'react';
import '../To_Do_List/Task.css'
let count: number = 0;
export function CardDesign() {

    const [getTask, setTask] = useState<string>("")
    const [getindex, setIndex] = useState<number | null>()
    const [taskArray, setTaskArray] = useState<Array<string>>([])
    const [buttonText, setButtonText] = useState<string>("Add Task")


    const addEditTask: any = () => {
        if (getTask != "") {

            if (buttonText == 'Add Task') {
                console.log(getindex)

                setTaskArray([...taskArray, getTask])
                setTask('')
            }
            else {

                const updatedTasks: any = [...taskArray];
                updatedTasks.splice(getindex, 1, getTask);
                setTaskArray(updatedTasks);
                setButtonText('Add Task')
                setTask('')
            }
        }
        else {

        }
    }
    const DeleteTask: any = (index: number) => {
        const updatedTasks: any = [...taskArray];
        updatedTasks.splice(index, 1);
        setTaskArray(updatedTasks);

    };
    // const EditTask: any = (index: number) => {
    //     console.log(getEditedTask)
    //     if (getEditedTask === "t") {
    //         console.log("called", getTask, index)
    //         const updatedTasks: any = [...taskArray];
    //         updatedTasks.splice(getindex, 1, getTask);
    //         setTaskArray(updatedTasks);
    //         setButtonText("ADDTASK")
    //         setEditedTask("f")
    //         setIndex(null)
    //         setTask('')
    //     }
    //     else {

    //         console.log("called if")
    //         setButtonText("EDITTASK")
    //         setTask(taskArray[index])
    //         setIndex(index)
    //         setEditedTask('t')
    //     }


    // }
    return (
        <div className='Container'>
            <div className="Head">
                <h1>Task scheduling</h1>

            </div>
            <div className='Task'>
                <p>Press button to add TASK</p>

                <input type="text" onChange={(e: any) => {
                    setTask(e.target.value)
                }} value={getTask} />

                <button type="button" onClick={() => addEditTask()} >{buttonText} </button>

                <ul>

                    {taskArray?.map((x: String, index: number) => {
                        return <>

                            <li key={index}> {x}
                                <i className="fa-sharp fa-solid fa-trash" onClick={() => { DeleteTask(index) }}></i>
                                <i className="fa-regular fa-pen-to-square" onClick={() => {
                                    setTask(taskArray[index])
                                    setButtonText("Edit Task")
                                    setIndex(index)
                                }}></i>
                            </li>
                        </>
                    })}


                </ul>

            </div>
        </div>
    )
}

