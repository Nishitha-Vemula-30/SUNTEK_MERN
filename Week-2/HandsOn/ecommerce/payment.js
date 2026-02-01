import { reduceStock } from "./product.js";
import { getCartItems,getCartTotal,clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

/**
 * Validate payment method
 * Allowed methods: card, upi, cod
 */
export function validatePaymentMethod(method) {
  const validMethods = ['card', 'upi', 'cod'];
  return validMethods.includes(method);
}

/**
 * Process payment and place order
 */
export function processPayment(paymentMethod, couponCode = null) {

  // 1. Validate payment method
  if (!validatePaymentMethod(paymentMethod)) {
    return {
      status: 'failed',
      message: 'Invalid payment method'
    };
  }

  // 2. Get cart items and subtotal
  const cartItems = getCartItems();
  const subtotal = getCartTotal();

  // If cart is empty
  if (cartItems.length === 0) {
    return {
      status: 'failed',
      message: 'Cart is empty'
    };
  }

  // 3. Apply discount if coupon is provided
  let discount = 0;
  let total = subtotal;
  let discountMessage = 'No discount applied';

  if (couponCode) {
    const discountResult = applyDiscount(subtotal, couponCode, cartItems);
    discount = discountResult.discount;
    total = discountResult.finalTotal;
    discountMessage = discountResult.message;
  }

  // 4. Simulate payment processing
  const paymentSuccess = true;

  if (!paymentSuccess) {
    return {
      status: 'failed',
      message: 'Payment failed'
    };
  }

  // 5. Reduce stock for each purchased item
  cartItems.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  // 6. Clear cart after successful payment
  clearCart();

  // 7. Generate order summary
  return {
    orderId: generateOrderId(),
    items: cartItems,
    subtotal: subtotal,
    discount: discount,
    total: total,
    paymentMethod: paymentMethod,
    status: 'success',
    message: discountMessage
  };
}

/**
 * Generate unique order ID
 */
function generateOrderId() {
  return 'ORD' + Date.now();
}

