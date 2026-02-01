// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];


// 1. Use filter() to get only inStock products
console.log(cart.filter(s=>s.inStock==true))

// 2. Use map() to create a new array with:  { name, totalPrice }
console.log(cart.map(n=>({name:n.name,totalPrice:n.price*n.quantity})))

// 3. Use reduce() to calculate grand total cart value
console.log(cart.reduce((sum,a)=>sum+a.price*a.quantity,0))
//  4. Use find() to get details of "Mouse"
console.log(cart.find(n=>n.name=="Mouse"))
//  5. Use findIndex() to find the position of "Keyboard"
console.log(cart.findIndex(n=>n.name=="Keyboard"))



// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//     1. filter() students who passed (marks ≥ 40)
console.log("Passed Students:",students.filter(m=>m.marks>=40))
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
let grade=students.map(g=>({...g,
    grade:
    g.marks>=90?'A':
    g.marks>=75?'B':
    g.marks>=60?'C':
    'D'
})
)
console.log(grade)
//    3. reduce() to calculate average marks
console.log(students.reduce((avg,n)=>avg+n.marks,0)/students.length)
//    4. find() the student who scored 92
console.log(students.find(s=>s.marks==92))
//    5. findIndex() of student "Kiran"
console.log(students.findIndex(s=>s.name=="Kiran"))



// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
console.log(employees.filter(e=>e.department==="IT"))
// 2. map() to add:
//         netSalary = salary + 10% bonus
let sal=employees.map(e=>({...e,
    netSalary:
    e.salary+(0.1*e.salary)})
)
console.log(sal)
// 3. reduce() to calculate total salary payout
console.log(employees.reduce((sal,e)=>sal+e.salary,0))
// 4. find() employee with salary 30000
console.log(employees.find(e=>e.salary==30000))
// 5. findIndex() of employee "Neha"
console.log(employees.findIndex(e=>e.name=='Neha'))



// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.


const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//     1. filter() only "Sci-Fi" movies
console.log(movies.filter(m=>m.genre=="Sci-Fi"))
//     2. map() to return:
//             "Inception (8.8)"
console.log(movies.map(m=>`${m.title},${m.rating}`))

//     3. reduce() to find average movie rating
console.log(movies.reduce((avg,m)=>avg+m.rating,0)/movies.length)
//     4. find() movie "Joker"
console.log(movies.find(m=>m.title=="Joker"))
//     5. findIndex() of "Avengers"
console.log(movies.findIndex(m=>m.title=="Avengers"))




// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.


const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

    // 1. filter() all credit transactions
    console.log(transactions.filter(c=>c.type==="credit"))
    // 2. map() to extract only transaction amounts
    console.log(transactions.map(a=>a.amount))
    // 3. reduce() to calculate final account balance
   let balance=transactions.reduce((fin,c)=>
       c.type=="credit"?fin+c.amount:fin-c.amount,0) 
   console.log(balance)
    // 4. find() the first debit transaction
    console.log(transactions.find(d=>d.type=="debit"))
    // 5. findIndex() of transaction with amount 10000
    console.log(transactions.findIndex(n=>n.amount==10000))