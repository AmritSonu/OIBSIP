// Custom function to calculate subtotal and total
export const calculateTotals = (cartItems, additionalFees) => {
  const subtotal = cartItems.reduce((acc, pizza) => acc + pizza.totalPrice, 0);
  const total = subtotal + additionalFees;
  return { subtotal, total };
};
