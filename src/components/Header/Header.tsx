'use client'
import { CATEGORIES, NAV_ITEMS, SOCIAL_MEDIA } from "@/constants";
import { useSelector, useDispatch } from 'react-redux'
import Image from "next/image";
import Link from "next/link";
import { searchChange } from './search'
import type { RootState } from '@/lib/store'
import { usePathname } from 'next/navigation'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const route = "/" + pathname.split("/")[1];

    const searchString = useSelector((state: RootState) => state.search.value)
    const dispatch = useDispatch()

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.push("/products?category=" + e.target.value);
        //dispatch(categoryChange(e.target.value))
    }

    return (<>
        <header className="flex items-center justify-between flex-wrap md:flex-nowrap lg:px-4 lg:py-2 bg-white xl:text-xl">
            {/* Logo */}
            <Image src="/images/Logo.webp" alt="Logo" width={200} height={200} className="w-30 lg:40 xl:w-50"/>

            {/* Right buttons */}
            <div className="right-buttons flex items-center order-2 md:order-3">
                <Link className="h-6 w-6 lg:h-10 lg:w-10" href="/cart">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-black">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                        </g>
                    </svg>
                </Link>
                <button className="hidden md:block bg-primary ml-3 px-4 py-2 xl:px-6 xl:py-2 text-white rounded-lg">
                    Shop Now
                </button>

                <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>

            {/* Search Section */}
            <div className="w-full flex items-center justify-between border mt-2 border-neutral-300 rounded-full overflow-hidden order-3 md:order-2 md:w-auto">
                {/* Categories */}
                <div className="bg-neutral-200 text-neutral-500 px-1 flex items-center lg:w-full lg:px-2 lg:py-3 ">
                    <select className="w-full focus:outline-none" onChange={handleSelectCategory}>
                        <option value="All Products">All Products</option>
                        {CATEGORIES.map((category) => (
                            <option key={category.name}>{category.name}</option>
                        ))}
                    </select>
                </div>
                
                {/* Search Bar */}
                <input type="text" placeholder="Search for products" className="w-full focus:outline-none px-1 lg:px-5 " value={searchString} onChange={(e) => dispatch(searchChange(e.target.value))}/>
                <button className="h-8 w-6 p-1 pr-8 md:h-10 md:w-10 md:p-2 md:pr-4">
                    <svg height="20px" width="20px" viewBox="0 0 24 24" className=" fill-neutral-400" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> 	
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z" fill="inherit"/> 
                        </g>
                    </svg>
                </button>
            </div>
        </header>

        {/* Lower Header */}
        <nav className="flex items-center justify-between md:mb-3 md:px-5 bg-white md:text-xl font-semibold" style={{fontWeight: 500}}>
            {/* Navigation */}
            <ul className={`${isNavOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row space-x-3 w-full `}>
                {NAV_ITEMS.map((item, index) => (
                    <li key={index}>
                        <Link href={item.path} className={`w-full block px-2 py-1 md:w-auto md:px-6 md:py-2 rounded-lg border-2 border-white ${route === item.path ? "bg-primary text-white" : "text-neutral-700"} hover:border-primary`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Social Media Icons */}
            <ul className="hidden md:flex items-center space-x-4">
                {SOCIAL_MEDIA.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link} target="_blank" rel="noreferrer">
                            <Image src={item.icon} alt={item.name} width={40} height={40} />
                        </Link>
                    </li>
                ))}
            </ul>  
        </nav>
    </>);
}