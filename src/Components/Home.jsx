import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import Add from './Add'
import { getAllToDoApi, removeTodoApi, updateTodoApi } from '../Services/allApi'

const Home = () => {

    const [allTodo, setAllTodo] = useState([])
    useEffect(() => {
        getAllTodo()
    }, [])

    const getAllTodo = async () => {
        const response = await getAllToDoApi()
        // console.log(response.data);
        setAllTodo(response.data)

    }

    const deleteTodo = async (id) => {
        await removeTodoApi(id)
        getAllTodo()
    }

    const taskComplete = async (task) => {
        const updatedTask = { ...task, complete: !task.complete };

        await updateTodoApi(updatedTask.id, updatedTask);

        getAllTodo();
    }



    return (
        <div className='w-full d-flex flex-column justify-content-center align-items-center bg-dark' style={{ height: "100vh" }}>
            <h1 className='main-head'>TODO LIST</h1>
            <div className='d-flex justify-content-between align-items-center' style={{ width: "30%" }}>
                <Add getAllToDo={getAllTodo} />
                <Dropdown >
                    <Dropdown.Toggle id="dropdown-basic" className='dropdown-btn'>
                        All
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='todo-card mt-5 shadow rounded p-3 '>
                {
                    allTodo?.length > 0 ?
                        allTodo?.map(task => (
                            <div key={task?.id} className="todo-item d-flex justify-content-between align-items-center rounded p-2 my-2">
                                <div className='d-flex align-items-center justify-content-start'>
                                    <input type="checkbox" onChange={() => taskComplete(task)} name="" id="" className='to-check' />
                                    <h6 className={`mb-0 ms-2 ${task.complete ? 'text-decoration-line-through' : ''}`}>{task?.task}</h6>
                                </div>
                                <div>
                                    <button onClick={() => deleteTodo(task?.id)} className='btn btn-action'><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        ))
                        :
                        <div className='fw-bolder text-warning'>No Task Added</div>
                }

            </div>
        </div>
    )
}

export default Home