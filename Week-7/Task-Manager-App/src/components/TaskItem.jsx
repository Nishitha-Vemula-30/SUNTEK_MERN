
function TaskItem({ task, deleteTask, taskComplete }) {

  return (
    <div style={{border:"1px solid black",padding:"10px",margin:"10px"}}>

      <h3>{task.title}</h3>

      <p>Priority: {task.priority}</p>

      <p>
        Status: {task.completed ? "Completed" : "Pending"}
      </p>

      <button onClick={()=>taskComplete(task.id)} className="border-2 bg-blue-400 px-3 py-2 mx-2 rounded-2xl">
         Complete Toggle
      </button>

      <button onClick={()=>deleteTask(task.id)} className="border-2 bg-blue-400 px-5 py-2 rounded-2xl">
        Delete
      </button>

    </div>
  )
}

export default TaskItem
