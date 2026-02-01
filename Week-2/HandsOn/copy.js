//Assignment 2
//=======================================================
// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
//=======================================================
const user = {
        id: 101,
        name: "Ravi",
        preferences: {
               theme: "dark",
               language: "en"
            }
    };
let user1={...user}
user1.name="Nishitha"
user1.preferences.theme="light"
console.log(user,user1)
// output:::{
//   id: 101,
//   name: 'Ravi',
//   preferences: { theme: 'light', language: 'en' }
// } {
//   id: 101,
//   name: 'Nishitha',
//   preferences: { theme: 'light', language: 'en' }
// }

//In Shallow copy we can change top-level values but can't change nested object values 

//====================================================
// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
//===================================================

 const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
let order1=structuredClone(order)
order1.customer.address.city="Moulali"
order1.items[0].price=100000
console.log(order,order1)

// {
//   orderId: 'ORD1001',
//   customer: { name: 'Anita', address: { city: 'Hyderabad', pincode: 500085 } },
//   items: [ { product: 'Laptop', price: 70000 } ]
// } {
//   orderId: 'ORD1001',
//   customer: { name: 'Anita', address: { city: 'Moulali', pincode: 500085 } },
//   items: [ { product: 'Laptop', price: 100000 } ]
// }

//in Deep copy if we change any value or nested value it will not effect the original one



