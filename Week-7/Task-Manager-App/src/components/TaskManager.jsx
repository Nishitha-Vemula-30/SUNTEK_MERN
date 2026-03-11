import React, { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'

function TaskManager() {

  const [tasks,setTasks] = useState([])

  // add task
  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  // delete task
  const deleteTask = (taskId)=>{
    const deleteFilter = tasks.filter(task => task.id !== taskId)
    setTasks(deleteFilter)
  }

  // toggle complete
  const taskComplete = (taskId)=>{
    const toggleTask = tasks.map(task =>
      task.id === taskId
        ? {...task, completed: !task.completed}
        : task
    )
    setTasks(toggleTask)
  }

  const completedCount = tasks.filter((t)=>t.completed).length

  return (
    <div className='text-center'>
      <h1 className='text-4xl'>My Task Manager</h1>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completedCount}</p>

      <AddTaskForm addTask={addTask}/>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        taskComplete={taskComplete}
      />

    </div>
  )
}

export default TaskManager
