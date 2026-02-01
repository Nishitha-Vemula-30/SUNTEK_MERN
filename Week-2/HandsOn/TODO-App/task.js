import {validateTitle,validatePriority,validateDueDate} from "./validator.js" //ctrl+space for auto

const tasks=[]
let count=1
export function addTask(title, priority, dueDate) {
    if(validateTitle(title)&&validatePriority(priority)&&validateDueDate(dueDate)){
        tasks.push({taskId:count++,title,priority,dueDate,completed:false})
        return "Successfully Task has Added"
    }
    else{
        return "Task is not added"
    }
}    
export function getAllTasks() {
       return tasks
}    
export function completeTask(taskId) {
      const task=tasks.find(t=>t.taskId===taskId)
      if(task){
        task.completed=true
        return "Task completed"
      }
      return "task not found"
}    