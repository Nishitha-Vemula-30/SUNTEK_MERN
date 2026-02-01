import { getProductById,checkStock } from "./product.js";
let cartItems=[]

export function addToCart(productId, quantity) {
      // 1. Get product details
      const product = getProductById(productId);
      if (!product) 
            return 'Product not found';
      // 2. Check stock availability
      if (!checkStock(productId, quantity)) 
            return 'Insufficient stock'
      // 3. Check if product already in cart
      //    - If yes, update quantity
      //    - If no, add new item
      // 4. Return success/error message
      const item = cartItems.find(i => i.productId === productId);

      if (item) {
           item.quantity += quantity;
     } else {
           cartItems.push({ productId, quantity });
     }
      return 'Item added to cart';
}
    

export function removeFromCart(productId) {
            // Remove product from cart
           cartItems = cartItems.filter(i => i.productId !== productId);
              return 'Item removed';
    }
export function updateQuantity(productId, newQuantity) {
        // Update quantity of product in cart
        // Check stock before updating
        if (!checkStock(productId, newQuantity))
             return 'Insufficient stock';

        const item = cartItems.find(i => i.productId === productId);
        if (!item) 
            return 'Item not in cart';

        item.quantity = newQuantity;
        return 'Quantity updated';
}
export function getCartItems() {
         // Return all cart items with product details
        return cartItems.map(i => {
          const product = getProductById(i.productId)
            return { ...product, quantity: i.quantity }
  });
}
export function getCartTotal() {
      // Calculate total price of all items in cart
      // Return total
      return getCartItems()
        .reduce((sum, item) => sum + item.price * item.quantity, 0);
}
                          
export function clearCart() {
          // Empty the cart
          cartItems = []
 }

















