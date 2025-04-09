import Carousel from "@/components/Home/Carousel";
import Link from "next/link";
import { CAROUSEL_IMAGES } from "@/constants";
import Hero from "@/components/Home/Hero";
import { HERO_CONTENT } from "@/constants";
import Products from "@/components/Products/Products";
import { PRODUCTS } from "@/constants";
import ExploreScroll from "@/components/Home/ExploreScroll";
import BestSellers from "@/components/Home/BestSellers";
import MapSection from "@/components/Home/MapSection"
import ClientsScroll from "@/components/Home/ClientsScroll";
import Testimonials from "@/components/Home/Testimonials";
import Footer from "@/components/Home/Footer";

export default function Home() {
    return (
        <div className="mx-auto">
            <Carousel items={CAROUSEL_IMAGES} />
            <Hero items={HERO_CONTENT} />
            <ExploreScroll />
            <Products items={PRODUCTS.slice(0, 8)} />

            <div className="flex justify-center mt-10">
                <Link href="/products" className="bg-primary text-lg text-white py-2 px-4 rounded-lg">Shop Now</Link>
            </div>

            <div className="Quality flex flex-col md:flex-row items-start m-8 md:m-10">
                <Quality icon="/images/About/Quality/ap.png" name="Affordable Pricing" description="Premium-quality fabrics at competitive prices, making excellence accessible to all." className="md:border-r-4 border-neutral-300 " />
                <Quality icon="/images/About/Quality/tq.png" name="Top Quality" description="Crafted with precision and durability to meet the highest industry standards." />
                <Quality icon="/images/About/Quality/ef.png" name="Eco Friendly" description="Sustainable materials and responsible manufacturing for a greener future." className="md:border-l-4 border-neutral-300 "/>
            </div>

            <BestSellers />

            <MapSection />

            <Ratings />

            <ClientsScroll />

            <Testimonials />

            <Footer />
        </div>
    );
}

function Quality({icon, name, description, className} : {icon: string, name: string, description: string, className?: string}) {
    return (
        <div className={`flex flex-col items-center ${className} my-4`}>
            <img src={icon} alt="icon" className="w-20 h-20 bg-cyan-300 p-2 rounded-lg" />
            <h2 className="text-2xl md:text-2xl font-bold my-1 md:my-5">{name}</h2>
            <p className="text-lg md:text-lg md:max-w-3/4 text-center text-neutral-500">{description}</p>
        </div>
    )
}

function Ratings() {
    return (
        <div className="w-full flex justify-center my-10">
            <div className="flex flex-col md:flex-row rounded-3xl text-xl bg-[#DFEEE4]">
                <div className="bg-[#6CAE82] px-8 md:px-16 py-5 md:py-10 w-full rounded-3xl text-white">
                    <p className="text-5xl md:text-8xl font-bold">4.6</p>
                    <p className="flex items-center">
                        <span className="mr-2 text-2xl">of 5</span>
                        {Array(5).fill(0).map((_, i) => (
                            <svg className="inline" width="24" key={i} height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.56434H19.5106L13.6327 10.6213L15.8779 17.1857L10 13.1287L4.12215 17.1857L6.36729 10.6213L0.489435 6.56434H7.75486L10 0Z" fill="#F9D30E"/>
                            </svg>
                        ))}
                
                    </p>
                </div>
                
                <div className="flex items-center px-8 md:px-16 py-5 md:py-10 text-[#4F959D]">
                    <svg className="h-12 w-12 md:h-24 md:w-24" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M37.638 51.5475H64.6785C64.9215 52.9785 65.1285 54.4095 65.1285 56.2905C65.1285 72.6525 54.162 84.2715 37.6335 84.2715C33.8728 84.2733 30.1486 83.5339 26.6738 82.0955C23.1991 80.6572 20.0418 78.5481 17.3826 75.8889C14.7234 73.2297 12.6143 70.0724 11.176 66.5977C9.73765 63.1229 8.99823 59.3987 9.00001 55.638C8.99764 51.8765 9.73677 48.1515 11.1751 44.6759C12.6135 41.2003 14.7228 38.0424 17.3826 35.3826C20.0424 32.7228 23.2003 30.6135 26.6759 29.1751C30.1515 27.7368 33.8765 26.9976 37.638 27C45.369 27 51.831 29.8215 56.8215 34.488L49.05 41.9715C46.9215 39.9285 43.2 37.5525 37.638 37.5525C27.8595 37.5525 19.881 45.6525 19.881 55.638C19.881 65.619 27.8595 73.719 37.638 73.719C48.969 73.719 53.2215 65.574 53.8785 61.362H37.6335L37.638 51.5475ZM99 51.5475V59.7285H90.819V67.9095H82.638V59.7285H74.4525V51.5475H82.638V43.362H90.819V51.5475H99Z" fill="#4F959D"/>
                    </svg>

                    <div className="ml-4">
                        <p className="mr-2 text-2xl md:text-5xl text-[#4F959D]">4.6/5</p>
                        <p className="text-neutral-800 text-sm md:text-md">350+ Reviews</p>
                    </div>
                </div>

                <div className="flex items-center px-8 md:px-16 py-5 md:py-10 text-[#4F959D]">
                    <svg className="h-8 w-8 md:h-24 md:w-24" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M68.04 0L3.96 0C2.90974 0 1.9025 0.370856 1.15986 1.03098C0.417213 1.69111 0 2.58644 0 3.52L0 60.48C0 61.4136 0.417213 62.3089 1.15986 62.969C1.9025 63.6291 2.90974 64 3.96 64H38.448V39.2H29.088V29.6H38.448V22.4C38.2541 20.7096 38.4786 19.002 39.1058 17.3969C39.7329 15.7918 40.7476 14.3281 42.0785 13.1085C43.4094 11.8889 45.0244 10.9429 46.8102 10.3368C48.596 9.73067 50.5093 9.47921 52.416 9.6C55.218 9.5828 58.0188 9.71102 60.804 9.984V18.624H55.08C50.544 18.624 49.68 20.544 49.68 23.328V29.504H60.48L59.076 39.104H49.68V64H68.04C68.56 64 69.075 63.909 69.5554 63.7321C70.0359 63.5552 70.4724 63.2959 70.8401 62.969C71.2079 62.6422 71.4995 62.2541 71.6986 61.827C71.8976 61.4 72 60.9423 72 60.48V3.52C72 3.05775 71.8976 2.60002 71.6986 2.17295C71.4995 1.74589 71.2079 1.35785 70.8401 1.03098C70.4724 0.704122 70.0359 0.444841 69.5554 0.267944C69.075 0.0910478 68.56 0 68.04 0Z" fill="#4F959D"/>
                    </svg>

                    <div className="ml-8">
                        <p className="mr-2 text-2xl md:text-5xl text-[#4F959D]">4.6/5</p>
                        <p className="text-neutral-800 text-sm md:text-md">1350+ Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
