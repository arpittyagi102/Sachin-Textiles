import Header from "@/components/Header";
import Header2 from "@/components/Header2";
import Carousel from "@/components/Home/Carousel";
import { CAROUSEL_IMAGES } from "@/constants/static";
import Hero from "@/components/Home/Hero";
import { HERO_CONTENT } from "@/constants/static";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-7">
      <Header />
      <Header2 />
      <Carousel items={CAROUSEL_IMAGES}/>
      <Hero items={HERO_CONTENT}/>
    </div>
  );
}
