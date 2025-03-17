import Carousel from "@/components/Home/Carousel";
import { CAROUSEL_IMAGES } from "@/constants";
import Hero from "@/components/Home/Hero";
import { HERO_CONTENT } from "@/constants";
import Products from "@/components/Products/Products";
import { PRODUCTS } from "@/constants";

export default function Home() {
  return (
    <div className="mx-auto">
      <Carousel items={CAROUSEL_IMAGES}/>
      <Hero items={HERO_CONTENT}/>
      <Products items={PRODUCTS}/>
    </div>
  );
}
