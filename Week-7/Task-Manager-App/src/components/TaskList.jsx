import TaskItem from './TaskItem'
function TaskList({ tasks, deleteTask, taskComplete }) {

  return (
    <div>

      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          taskComplete={taskComplete}
        />
      ))}

    </div>
  )
}

export default TaskList
