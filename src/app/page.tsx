import HeroSection from "@/components/HeroSection";
import SuggestedProducts from "@/components/SuggestedProducts";
import { SuggestedProduct } from "@/types";

type FetchData = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default async function Home() {
  //fetch dummy data
  const { products: data }: { products: FetchData[] | null} = await fetch("https://dummyjson.com/products/category/smartphones").then(
    (res) => res.json()
  );

  if (!data) {
    return
  }

  //select a product to display for the hero section
  const firstProduct = data[3]

  const products: SuggestedProduct[] = data.map((d) => ({
    id: d.id.toString(),
    title: d.title,
    price: d.price,
    discountPercentage: d.discountPercentage,
    rating: d.rating,
    image: d.thumbnail,
    category: d.category
  }))

  return (
    <main className="bg-white flex flex-col gap-10">
      <HeroSection {...firstProduct} intro={firstProduct.description} TotalReviews={4235} id={firstProduct.id.toString()} />
      <SuggestedProducts products={products} />
    </main>
  );
}
