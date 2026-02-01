// Available coupons
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions
export function validateCoupon(couponCode, cartTotal, cartItems) {

  // 1. Check if coupon exists
  const coupon = coupons[couponCode];
  if (!coupon)
    return { valid: false, message: 'Invalid coupon' };

  // 2. Check minimum amount requirement
  if (cartTotal < coupon.minAmount)
    return { valid: false, message: 'Minimum amount not met' };

  // 3. Check category requirement (if any)
  if (coupon.category) {
    const hasCategory = cartItems.some(
      i => i.category === coupon.category
    );
    if (!hasCategory)
      return { valid: false, message: 'Category not applicable' };
  }

  // Return valid result
  return { valid: true, message: 'Coupon applied' };
}

export function calculateDiscount(couponCode, cartTotal) {

  // Calculate discount amount based on coupon type
  const coupon = coupons[couponCode];

  if (coupon.type === 'percentage')
    return (cartTotal * coupon.value) / 100;

  // Return discount amount
  return coupon.value;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {

  // 1. Validate coupon
  const validation = validateCoupon(couponCode, cartTotal, cartItems);

  // 2. If not valid, return original total
  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }

  // 3. Calculate discount and return final amount
  const discount = calculateDiscount(couponCode, cartTotal);

  return {
    originalTotal: cartTotal,
    discount: discount,
    finalTotal: cartTotal - discount,
    message: validation.message
  };
}
