export const calculateDiscountPrice = (price: number, percentage: number): number => {
  return (price * (100 - percentage)) / 100;
};

export const formatNumber = (number: number): string => {
  // format with commas
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
