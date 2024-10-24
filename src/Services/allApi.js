import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";

export const addToDoApi = async (todoTask) => {
    return await commonAPI("POST", `${SERVER_URL}/toDoList`, todoTask)
}

export const getAllToDoApi = async () => {
    return await commonAPI("GET", `${SERVER_URL}/toDoList`, "")
}

export const removeTodoApi = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/toDoList/${id}`, {})
}

export const updateTodoApi = async (id, updatedTask) => {
    return await commonAPI("PUT", `${SERVER_URL}/todoList/${id}`, updatedTask)
}