import React, { useState } from 'react'
import { addToDoApi } from '../Services/allApi'

const Add = ({ getAllToDo }) => {
    const [isToggle, setIsToggle] = useState(false)
    const [inputData, setInputData] = useState({
        task: "",
        complete: false
    })
    // console.log(inputData)
    const toggleDiv = () => {
        setIsToggle(!isToggle)
    }

    const handleAddTodo = async () => {
        const { task, complete } = inputData
        if (task) {
            try {
                const response = await addToDoApi(inputData)
                console.log(response.data);
                if (response.status >= 200 && response.status < 300) {
                    setIsToggle(!isToggle)
                    getAllToDo()
                    alert("Task Added")

                }
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log();
            
        }
    }


    return (
        <div className='d-flex flex-column align-items-start'>
            <button onClick={toggleDiv} className='btn btn-add fw-bolder fs-5 px-3 py-1'>Add Task</button>
            {
                isToggle &&
                <div className='mt-2 d-flex'>
                    <input type="text" placeholder='Enter Your Task' className='form-control' onChange={e => setInputData({ ...inputData, task: e.target.value })} />
                    <button onClick={handleAddTodo} className='btn btn-plus'><i className="fa-solid fa-plus text-white"></i></button>
                </div>
            }
        </div>
    )
}

export default Add