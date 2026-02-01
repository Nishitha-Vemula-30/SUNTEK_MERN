//Assignment 1
// =======================================
// Hands-On 1: Date Creation & Extraction
// =======================================

let now = new Date();

// Extract values
let year = now.getFullYear();
let month = now.getMonth() + 1; // 0-11 Months
let date = now.getDate();

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dayName = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", dayName);
console.log(`Time: ${hours}:${minutes}:${seconds}`);

// Format: DD-MM-YYYY HH:mm:ss
let formattedDate =
  `${String(date).padStart(2,"0")}-${String(month).padStart(2,"0")}-${year} ` +
  `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

console.log("Formatted:", formattedDate);

// =========================================
// Hands-On 2: Date Comparison & Validation
// ==========================================

let enrollDeadline = new Date("2026-01-20");
let today = new Date();

if (today < enrollDeadline) {
  console.log("Enrollment Open");
} else {
  console.log("Enrollment Closed");
}

// Date validation function
function validateDate(year, month, day) {
  let d = new Date(year, month - 1, day);

  // Check if JS auto-corrected the date
  if (
    d.getFullYear() === year &&
    d.getMonth() === month - 1 &&
    d.getDate() === day
  ) {
    console.log("Valid Date");
  } else {
    console.log("Invalid Date");
  }
}

validateDate(2026, 2, 30); // Feb 30 => becomes March 1

// ===============================
// Hands-On 2: Age Calculator
// ===============================

let dob = new Date("2000-05-15");
let todayDate = new Date();

let age = todayDate.getFullYear() - dob.getFullYear();

// If birthday has not happened this year => subtract 1
let hasBirthdayPassed =
  todayDate.getMonth() > dob.getMonth() ||
  (todayDate.getMonth() === dob.getMonth() && todayDate.getDate() >= dob.getDate());

if (!hasBirthdayPassed) {
  age--;
}

console.log("Exact Age:", age);
