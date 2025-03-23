import { NAV_ITEMS } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { DP_SECTION } from "@/constants"

export default function Page() {
    return (
        <main className="relative overflow-x-hidden">
            
            <ul className="text-xs md:text-md flex md:flex flex-row md:space-x-6 w-full justify-center mb-10">
                {NAV_ITEMS.map((item, index) => (
                    <li key={index}>
                        <Link href={item.path} className={`w-full block px-4 py-2 md:w-auto md:px-6 md:py-3 rounded-lg border-2 border-[#DCFDFF] ${"/about-us" === item.path ? "bg-primary text-white" : "text-neutral-700"} hover:border-primary`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <Hero/>

            <DpSection/>

            <div className="Quality flex flex-col md:flex-row items-center m-8 md:m-20">
                <Quality icon="/images/About/Quality/ap.png" name="Affordable Pricing" description="Lorem ipsum is a dummy or placeholder text commonly used in graphic design and publishing." className="md:border-r-4 border-neutral-300 "/>
                <Quality icon="/images/About/Quality/tq.png" name="Top Quality" description="Lorem ipsum is a dummy or placeholder text commonly used in graphic design and publishing." className="md:border-r-4 border-neutral-300 " />
                <Quality icon="/images/About/Quality/ef.png" name="Eco Friendly" description="Lorem ipsum is a dummy or placeholder text commonly used in graphic design and publishing." />
            </div>

            <AboutSection/>

            <Ratings/>
        </main>
    )
}

function Hero() {
    return (<>
        <section className="flex md:flex-row flex-col pt-10">   
            <div className="left md:w-1/2 px-[8%] ">
               <img src="/images/about/about-hero.png" className="grayscale" alt="hero" />
            </div>
            
            <div className="right md:w-1/2 flex flex-col items-center">
                <div className="flex">
                    <svg className="h-32 w-12" viewBox="0 0 28 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666667 14C0.666667 21.3638 6.6362 27.3333 14 27.3333C21.3638 27.3333 27.3333 21.3638 27.3333 14C27.3333 6.6362 21.3638 0.666667 14 0.666667C6.6362 0.666667 0.666667 6.6362 0.666667 14ZM0.666667 159C0.666667 166.364 6.6362 172.333 14 172.333C21.3638 172.333 27.3333 166.364 27.3333 159C27.3333 151.636 21.3638 145.667 14 145.667C6.6362 145.667 0.666667 151.636 0.666667 159ZM11.5 14V159H16.5V14H11.5Z" fill="black"/>
                    </svg>
                    <div className="mx-4 py-5 flex">
                        <Image src="/images/about/fabric.png" className="h-24 w-24" alt="hero" width={96} height={24} />
                        <p className=" ml-4 text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores in id et ex aut itaque soluta quisquam. Perspiciatis rem iusto commodi eveniet quos dolor, possimus natus voluptas quam nostrum quia.</p> 
                    </div>
                </div>
                <h1 className="text-3xl md:text-6xl text-center font-bold my-4 md:my-6">High Quality Tagline with specification</h1>
                <p className="text-lg md:text-xl text-center max-w-2/3 my-1 md:my-2 text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nostrum qui culpa nihil. Modi libero voluptate sapiente architecto et debitis optio id, amet voluptas consectetur laudantium at, dolor</p>
                <button className="bg-primary text-xl text-white px-4 py-2 rounded nd:mt-8">Learn More</button>
            </div>
        </section>

        <div className="background absolute w-full top-0 -z-1">
            <svg viewBox="0 0 1728 835" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H1728V835L0 539.5V0Z" fill="#DCFDFF"/>
            </svg>
        </div>
    </>)
}

function DpSection() {
    return (<>
        <section className="flex justify-center gap-[5%] mt-10">
            {DP_SECTION.map((image, index) => (
                <img key={index} src={image} alt="dp" className="w-1/5" />
            ))}
        </section>

        <div className="w-full flex justify-center">
            <button className="bg-primary text-xl text-white px-4 py-2 rounded mt-8">Buy Now</button>
        </div>
    </>)
}

function Quality({icon, name, description, className} : {icon: string, name: string, description: string, className?: string}) {
    return (
        <div className={`flex flex-col items-center ${className} my-4`}>
            <img src={icon} alt="icon" className="w-20 h-20 bg-cyan-300 p-2 rounded-lg" />
            <h2 className="text-2xl md:text-4xl font-bold my-2 md:my-5">{name}</h2>
            <p className="text-lg md:text-xl md:max-w-3/4 text-center text-neutral-500">{description}</p>
        </div>
    )
}

function AboutSection() {
    return (
        <section className="flex flex-col md:flex-row gap-20 m-5 md:m-20 mb-40">
            <div className="md:w-1/2">
                <p className="text-xl">About Us</p>
                <h1 className="text-4xl font-bold my-5">Making Every Fiber Count</h1>
                <p className="text-xl text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores in id et ex aut itaque soluta quisquam. Perspiciatis rem iusto commodi eveniet quos dolor, possimus natus voluptas quam nostrum quia.</p>

                <div className="flex">
                    <div className="h-48 w-48 m-2 rounded-3xl p-6 text-xl text-white bg-cyan-800">Our Vision</div>
                    <div className="h-48 w-48 m-2 rounded-3xl p-6 text-xl text-white bg-cyan-800">Our Mission</div>
                </div>
            </div>

            <div className="md:w-1/2 h-96 bg-neutral-300 rounded-2xl relative">
                <div className="flex flex-col items-center absolute  m-2 rounded-3xl p-4 px-8 text-xl text-white bg-cyan-800 -bottom-16 md:-left-12">
                    <svg width="64" height="64" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.5 3.375L10.125 16.875V37.125C10.125 55.8563 23.085 73.3725 40.5 77.625C57.915 73.3725 70.875 55.8563 70.875 37.125V16.875L40.5 3.375ZM50.895 54L40.5 47.7562L30.1388 54L32.8725 42.1875L23.7263 34.29L35.8087 33.2438L40.5 22.1063L45.1912 33.21L57.2737 34.2562L48.1275 42.1875L50.895 54Z" fill="white"/>
                    </svg>
                    <p className="text-7xl">11+</p>
                    <p>Experience</p>
                </div>
            </div>
        </section>
    )
}

function Ratings() {
    return (
        <div className="w-full flex justify-center my-20">
            <div className="flex flex-col md:flex-row rounded-3xl text-xl bg-[#C3EDEF]">
                <div className="bg-cyan-800 px-16 py-10 rounded-3xl text-white">
                    <p className="text-8xl font-bold">4.6</p>
                    <p className="flex items-center">
                        <span className="mr-2 text-2xl">of 5</span>
                        {Array(5).fill(0).map((_, i) => (
                            <svg className="inline" width="24" key={i} height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L12.2451 6.56434H19.5106L13.6327 10.6213L15.8779 17.1857L10 13.1287L4.12215 17.1857L6.36729 10.6213L0.489435 6.56434H7.75486L10 0Z" fill="#21BFF3"/>
                            </svg>
                        ))}
                
                    </p>
                </div>
                
                <div className="flex items-center px-16 py-10 text-cyan-800">
                    <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M37.638 51.5475H64.6785C64.9215 52.9785 65.1285 54.4095 65.1285 56.2905C65.1285 72.6525 54.162 84.2715 37.6335 84.2715C33.8728 84.2733 30.1486 83.5339 26.6738 82.0955C23.1991 80.6572 20.0418 78.5481 17.3826 75.8889C14.7234 73.2297 12.6143 70.0724 11.176 66.5977C9.73765 63.1229 8.99823 59.3987 9.00001 55.638C8.99764 51.8765 9.73677 48.1515 11.1751 44.6759C12.6135 41.2003 14.7228 38.0424 17.3826 35.3826C20.0424 32.7228 23.2003 30.6135 26.6759 29.1751C30.1515 27.7368 33.8765 26.9976 37.638 27C45.369 27 51.831 29.8215 56.8215 34.488L49.05 41.9715C46.9215 39.9285 43.2 37.5525 37.638 37.5525C27.8595 37.5525 19.881 45.6525 19.881 55.638C19.881 65.619 27.8595 73.719 37.638 73.719C48.969 73.719 53.2215 65.574 53.8785 61.362H37.6335L37.638 51.5475ZM99 51.5475V59.7285H90.819V67.9095H82.638V59.7285H74.4525V51.5475H82.638V43.362H90.819V51.5475H99Z" fill="#16627B"/>
                    </svg>

                    <div className="ml-4">
                        <p className="mr-2 text-5xl text-cyan-600">4.6/5</p>
                        <p className="text-neutral-800">350+ Reviews</p>
                    </div>
                </div>

                <div className="flex items-center px-16 py-10 text-cyan-800">
                    <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M68.04 0L3.96 0C2.90974 0 1.9025 0.370856 1.15986 1.03098C0.417213 1.69111 0 2.58644 0 3.52L0 60.48C0 61.4136 0.417213 62.3089 1.15986 62.969C1.9025 63.6291 2.90974 64 3.96 64H38.448V39.2H29.088V29.6H38.448V22.4C38.2541 20.7096 38.4786 19.002 39.1058 17.3969C39.7329 15.7918 40.7476 14.3281 42.0785 13.1085C43.4094 11.8889 45.0244 10.9429 46.8102 10.3368C48.596 9.73067 50.5093 9.47921 52.416 9.6C55.218 9.5828 58.0188 9.71102 60.804 9.984V18.624H55.08C50.544 18.624 49.68 20.544 49.68 23.328V29.504H60.48L59.076 39.104H49.68V64H68.04C68.56 64 69.075 63.909 69.5554 63.7321C70.0359 63.5552 70.4724 63.2959 70.8401 62.969C71.2079 62.6422 71.4995 62.2541 71.6986 61.827C71.8976 61.4 72 60.9423 72 60.48V3.52C72 3.05775 71.8976 2.60002 71.6986 2.17295C71.4995 1.74589 71.2079 1.35785 70.8401 1.03098C70.4724 0.704122 70.0359 0.444841 69.5554 0.267944C69.075 0.0910478 68.56 0 68.04 0Z" fill="#16627B"/>
                    </svg>

                    <div className="ml-8">
                        <p className="mr-2 text-5xl text-cyan-600">4.6/5</p>
                        <p className="text-neutral-800">1350+ Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

