import { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {
    const[tasks, setTasks] = useState([]);
    // localStorage.setItem("tasks", JSON.stringify([]));
    useEffect(()=> {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    });

    const addTask = (task) => {
        setTasks([...tasks,task]);
    }

    const updateTask = (updatedTask, index) => {
        const newtask = [...tasks];
        newtask[index] = updatedTask;
        setTasks(newtask);
    }

    const deleteTask = () => {

    }
    return (
        <div> 
            <header>
                <h1>TaskMan</h1>
                <p><i>Your friendly Task Manager</i></p>
            </header>
            <Taskform addTask = {addTask}/>
            <TaskList tasks = {tasks} 
            updateTask = {updateTask} 
            deleteTask = {deleteTask}/>
            <ProgressTracker />
            <button>Clear All Tasks</button>
        </div>
    )
}