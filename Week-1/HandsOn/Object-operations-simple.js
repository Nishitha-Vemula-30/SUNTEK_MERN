// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.


const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
    // 1. Read and print the user’s name and email
   console.log(user.name,user.email)

    // 2. Add a new property lastLogin: "2026-01-01"
   user.lastLogin= "2026-01-01"
    // 3. Update role from "student" to "admin"
   user.role="admin"
    // 4. Delete the isActive property
    delete user.isActive

    // 5. Use Object.keys() to list all remaining fields
    console.log(Object.keys(user))
    console.log(user)

// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.


const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
    // 1. Calculate total marks
    const total=Object.values(marks).reduce((s,m)=>s+m,0)
    console.log("Total Marks:",total)
    // 2. Calculate average marks
    console.log("Average:",total/Object.keys(marks).length)
    // 3. Find the highest scoring subject
    const highValue=Object.values(marks)
    .reduce((max,h)=>h>max?h:max)
    const highKey=Object.keys(marks).find(h=>marks[h]===highValue)
    console.log("Highest Scoring Subject:",highKey,highValue)
    // 4. Add a new subject computer: 90
    marks.computer=90

// Assignment 3: Application Settings Controller
// ---------------------------------------------
// Scenario : A web app stores user preferences as settings.

const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
    // 1.Toggle theme between "light" and "dark"
    settings.theme=settings.theme==="light"?"dark":"light"
    // 2. Turn autoSave to true
    settings.autoSave=true
    // 3. Remove the notifications setting
    delete settings.notifications
    // 4. Freeze the settings object so it cannot be modified
    Object.freeze(settings)
    console.log(settings)