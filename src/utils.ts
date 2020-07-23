export const extend = (a: { mistakes?: number; step?: number}, b: { step?: number; mistakes?: number}) => {
  return Object.assign({}, a, b);
};
