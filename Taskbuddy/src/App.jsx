import React, { useState } from 'react'
import Taskform from './Components/Taskform'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {
    const[tasks, setTasks] = useState([]);
    const addTask = (task) => {
        setTasks(task);
    }
    return (
        <div>
            <header>
                <h1>TaskMan</h1>
                <p><i>Your friendly Task Manager</i></p>
            </header>
            <Taskform addTask = {addTask}/>
            <TaskList />
            <ProgressTracker />
            <button>Clear All Tasks</button>
        </div>
    )
}