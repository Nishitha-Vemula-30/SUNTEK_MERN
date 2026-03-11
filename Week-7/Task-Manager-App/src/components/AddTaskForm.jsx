import React from 'react'
import { useForm } from 'react-hook-form'

function AddTaskForm({ addTask }) {

  const { register, handleSubmit, reset, formState:{errors} } = useForm()

  const submitForm = (data)=>{
    
    const task = {
      id: Date.now(),
      title: data.title,
      priority: data.priority,
      completed:false
    }

    addTask(task)

    reset()
  }

  return (
    <div>

      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-3 w-80 mx-auto">

        <input
          type="text"
          className='border-2 rounded-2 text-center'
          placeholder="Add Task"
          {...register("title",{required:true,minLength:3})}
        />

        {errors.title?.type === "required" && (
          <p className='text-red-600'>Title required</p>
        )}

        {errors.title?.type === "minLength" && (
          <p className='text-red-600'>Title length should be min 3</p>
        )}

        <select {...register("priority")} className='text-center'>

          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>

        </select>

        <button className="border-2 bg-blue-200 px-3 py-2 mx-2 rounded-2xl">Add Task</button>

      </form>

    </div>
  )
}

export default AddTaskForm
