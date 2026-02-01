//Assignment 5
import {addTask,getAllTasks,completeTask} from "./task.js"

console.log(addTask("Learn React","high","2026-4-1"))
console.log(getAllTasks())
console.log(addTask("Dentist Appointment","high","2026-1-30"))
console.log(completeTask(1))
console.log(completeTask(3))
console.log(getAllTasks())