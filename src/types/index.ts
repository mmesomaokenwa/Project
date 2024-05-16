export type SuggestedProduct = {
  id: string;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  image: string;
  category: string;
};

export type HeroProduct = {
  id: string;
  title: string;
  price: number;
  intro: string;
  discountPercentage: number;
  description: string;
  thumbnail: string;
  images: string[];
  rating: number;
  TotalReviews: number;
};

export type CartProduct = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  rating: number;
};
