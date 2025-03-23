import Carousel from "@/components/Home/Carousel";
import { CAROUSEL_IMAGES } from "@/constants";
import Hero from "@/components/Home/Hero";
import { HERO_CONTENT } from "@/constants";
import HomeCategories from "@/components/Home/HomeCategories";
import { HOME_CATEGORIES } from "@/constants";
import Products from "@/components/Products/Products";
import { PRODUCTS } from "@/constants";

export default function Home() {
    return (
        <div className="mx-auto">
            <Carousel items={CAROUSEL_IMAGES} />
            <Hero items={HERO_CONTENT} />
            <HomeCategories items={HOME_CATEGORIES} />
            <Products items={PRODUCTS.slice(0, 8)} />

            <div className="Quality flex flex-col md:flex-row items-center m-8 md:m-20">
                <Quality icon="/images/About/Quality/ap.png" name="Affordable Pricing" description="Lorem ipsum is a dummy or placeholder text commonly used in graphic design and publishing." className="md:border-r-4 border-neutral-300 " />
                <Quality icon="/images/About/Quality/tq.png" name="Top Quality" description="Lorem ipsum is a dummy or placeholder text commonly used in graphic design and publishing." className="md:border-r-4 border-neutral-300 " />
                <Quality icon="/images/About/Quality/ef.png" name="Eco Friendly" description="Lorem ipsum is a dummy or placeholder text commonly used in graphic design and publishing." />
            </div>
        </div>
    );
}

function Quality({icon, name, description, className} : {icon: string, name: string, description: string, className?: string}) {
    return (
        <div className={`flex flex-col items-center ${className} my-4`}>
            <img src={icon} alt="icon" className="w-20 h-20 bg-cyan-300 p-2 rounded-lg" />
            <h2 className="text-2xl md:text-3xl font-bold my-2 md:my-5">{name}</h2>
            <p className="text-lg md:text-xl md:max-w-3/4 text-center text-neutral-500">{description}</p>
        </div>
    )
}
