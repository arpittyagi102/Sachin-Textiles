import Carousel from "@/components/Home/Carousel";
import { CAROUSEL_IMAGES } from "@/constants/static";
import Hero from "@/components/Home/Hero";
import { HERO_CONTENT } from "@/constants/static";
import Products from "@/components/Products";
import { PRODUCTS } from "@/constants";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-7">
      <Carousel items={CAROUSEL_IMAGES}/>
      <Hero items={HERO_CONTENT}/>
      <Products items={PRODUCTS}/>
    </div>
  );
}
