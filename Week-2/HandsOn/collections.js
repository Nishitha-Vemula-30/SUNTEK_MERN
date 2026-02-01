//Assignment 3

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

/********************************
 Hands-On 1: USER PROCESSING ENGINE
********************************/

// Get only active users
const activeUsers = users.filter(u => u.active);

// Extract names of active users
const activeUserNames = users.filter(u => u.active).map(u => u.name);

// Check if any admin exists
const hasAdmin = users.some(u => u.role === "admin");
//const hasAdmin = users.find(u => u.role === "admin");

// Find user by id
const userById = users.find(u => u.id === 1);

// Deactivate a user immutably
const updatedUsers = users.map(u =>
  u.id === 1 ? { ...u, active: false } : u
);

console.log("Active Users:", activeUsers);
console.log("Active User Names:", activeUserNames);
console.log("Admin Exists:", hasAdmin);
console.log("User By ID:", userById);
console.log("Users After Deactivation:", updatedUsers);

/*******************************
 Hands-On 2: COURSE CATALOG ENGINE
*******************************/

// Get published courses
const publishedCourses = courses.filter(c => c.published);

// Sort courses by price (high → low)
const sortedCourses = [...courses].sort((a, b) => b.price - a.price);

// Extract only title & price
const courseSummary = courses.map(c => ({
  title: c.title,
  price: c.price
}));

// Calculate total value of published courses
const totalPublishedValue = courses
  .filter(c => c.published)
  .reduce((sum, c) => sum + c.price, 0);

// Add new course immutably
const newCourses = [...courses, {
  id: 104,
  title: "MongoDB",
  price: 555,
  published: true
}];

console.log("Published Courses:", publishedCourses);
console.log("Sorted Courses:", sortedCourses);
console.log("Course Summary:", courseSummary);
console.log("Total Published Value:", totalPublishedValue);
console.log("Courses After Adding New:", newCourses);

/******************************
 Hands-On 3: SHOPPING CART ENGINE 
******************************/

// Merge cart with course details
const cartDetails = cart.map(item => {
  const course = courses.find(c => c.id === item.courseId);
  return { ...course, qty: item.qty };
});

// Calculate total cart amount
const cartTotal = cartDetails.reduce(
  (sum, item) => sum + item.price * item.qty, 0
);

// Increase quantity immutably
const updatedCart = cart.map(item =>
  item.courseId === 101 ? { ...item, qty: item.qty + 1 } : item
);

// Remove a course from cart
const cartAfterRemoval = cart.filter(item => item.courseId !== 101);

// Check if all cart items are paid courses
const allPaidCourses = cartDetails.every(item => item.price > 0);

console.log("Cart Details:", cartDetails);
console.log("Cart Total:", cartTotal);
console.log("Updated Cart:", updatedCart);
console.log("Cart After Removal:", cartAfterRemoval);
console.log("All Paid Courses:", allPaidCourses);

/**********************************
 Hands-On 4: ROLE & PERMISSION ENGINE
**********************************/

// Get all role names
const roleNames = Object.keys(roles);

// Check if student can delete
const studentCanDelete = roles.student.includes("delete");

// Create flat list of all unique permissions
const allPermissions = [
  ...new Set(Object.values(roles).flat())
];

// Add new role immutably
const updatedRoles = {
  ...roles,
  moderator: ["view", "update"]
};

console.log("Role Names:", roleNames);
console.log("Student Can Delete:", studentCanDelete);
console.log("All Permissions:", allPermissions);
console.log("Updated Roles:", updatedRoles);
