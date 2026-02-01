// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// HandsOn 1: You are analyzing daily temperatures recorded by a weather app.

const temperatures = [32, 35, 28, 40, 38, 30, 42];
//filter() temperatures above 35
console.log(temperatures.filter(a=>a > 35))
// map() to convert all temperatures from Celsius → Fahrenheit
console.log(temperatures.map(a=>(a*9/5)+32))
//reduce() to calculate average temperature
console.log(temperatures.reduce((avg,n)=> avg+n,0)/temperatures.length)
//find() first temperature above 40
console.log(temperatures.find(a=>a > 40))
//findIndex() of temperature 28
console.log(temperatures.findIndex(a=>a==28))


// Assignment 2: Online Course Name Processor
// ------------------------------------------
// HandsOn 2: You are preparing a course list for display on a website.

const courses = ["javascript", "react", "node", "mongodb", "express"];

//filter() courses with name length > 5
console.log(courses.filter(a=>a.length>5))

// map() to convert course names to uppercase
console.log(courses.map(a=>a.toUpperCase()))

//reduce() to generate a single string:"JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let single=courses.reduce((join,a)=>(join+"|"+a).toUpperCase())
console.log(single)
//  find() the course "react"
console.log(courses.find(f=>f=="react"))

//  findIndex() of "node"
console.log(courses.findIndex(f=>f=="node"))



// Assignment 3: Student Marks List
// --------------------------------
// HandsOn 3: You receive marks from an exam system

const marks = [78, 92, 35, 88, 40, 67];

// filter() marks ≥ 40 (pass marks)
console.log(marks.filter(n=>n>=40))
// map() to add 5 grace marks to each student
console.log(marks.map(a=>a+5))
// reduce() to find highest mark
console.log(marks.reduce((high,a)=>a > high ? a : high,marks[0]))
// find() first mark below 40
console.log(marks.find(a=>a<40))
// findIndex() of mark 92
console.log(marks.findIndex(a=>a==92))




















