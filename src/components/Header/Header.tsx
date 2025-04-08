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
    const cart = useSelector((state: RootState) => state.cart)

    const dispatch = useDispatch()

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.push("/products?category=" + e.target.value);
        //dispatch(categoryChange(e.target.value))
    }

    function handleChangePath(path: string) {
        setIsNavOpen(false);
        router.push(path);
    }

    return (<>
        <header className="mx-4 flex items-center justify-between flex-wrap md:flex-nowrap lg:px-4 pb-1 lg:py-2 bg-white xl:text-xl">
            {/* Logo */}
            <Image src="/images/logo2.png" alt="Logo" width={200} height={200} className="w-30 lg:40 xl:w-50" />

            {/* Right buttons */}
            <div className="right-buttons flex items-center order-2 md:order-3">
                <Link className="h-6 w-6 lg:h-10 lg:w-10 relative" href="/cart">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-black">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                    </svg>

                    {cart.length > 0 && <span className="absolute -right-1 md:right-0 -top-1 md:top-0 bg-orange-500 text-white w-3 lg:w-5 lg:h-5 text-xs flex items-center justify-center rounded-full">{cart.length}</span>}
                </Link>
                <Link href="/products" className="hidden md:block bg-primary ml-3 px-4 py-2 xl:px-6 xl:py-2 text-white rounded-lg">
                    Shop Now
                </Link>

                <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

            {/* Search Section */}
            <div className="w-full text-xs lg:text-[18px] flex items-stretch justify-between border mt-2 border-neutral-300 rounded-full overflow-hidden order-3 md:order-2 md:w-auto">
                {/* Categories */}
                <div className="bg-neutral-200 text-neutral-500 px-1 py-1 flex items-center w-full lg:px-2 lg:py-3 ">
                    <select className="w-full text-center focus:outline-none" onChange={handleSelectCategory}>
                        <option value="All Products">All Products</option>
                        {CATEGORIES.map((category) => (
                            <option key={category.name}>{category.name}</option>
                        ))}
                    </select>
                </div>

                {/* Search Bar */}
                <input type="text" placeholder="Search for products" className="w-full focus:outline-none px-1 lg:px-5 " value={searchString} onChange={(e) => dispatch(searchChange(e.target.value))} />
                <button className="h-8 w-6 p-1 my-auto pr-8 md:h-10 md:w-10 md:p-2 md:pr-4">
                    <svg height="20px" width="20px" viewBox="0 0 24 24" className=" fill-neutral-400" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z" fill="inherit" />
                        </g>
                    </svg>
                </button>
            </div>
        </header>

        {/* Lower Header */}
        <nav className="flex items-center justify-between md:mb-1 md:px-5 bg-white md:text-xl font-semibold" style={{ fontWeight: 500 }}>
            {/* Navigation */}
            <ul className={`${isNavOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row space-x-3 w-fit `}>
                {NAV_ITEMS.map((item, index) => (
                    <li key={index}>
                        <button onClick={() => handleChangePath(item.path)} className={`w-full text-[18px] text-left block px-2 py-1 md:w-auto md:px-6 md:py-2 rounded-lg cursor-pointer border-2 border-white ${route === item.path ? "bg-primary text-white" : "text-neutral-700"} hover:border-primary`}>
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Social Media Icons */}
            {/* <ul className="hidden md:flex items-center space-x-4">
                {SOCIAL_MEDIA.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link} target="_blank" rel="noreferrer">
                            <Image src={item.icon} alt={item.name} width={40} height={40} />
                        </Link>
                    </li>
                ))}
            </ul>   */}
            <h2 className="hidden md:flex items-center space-x-4 text-xl mr-3">
                <svg width="42px" height="42px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path>
                        <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path>
                        <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path>
                        <defs>
                            <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5BD066"></stop> <stop offset="1" stopColor="#27B43E"></stop>
                            </linearGradient>
                        </defs>
                    </g>
                </svg>
                <Link href="tel:+918272865740" className="text-neutral-700 font-bold hover:text-black">+91 8272865740</Link>
            </h2>
        </nav>
    </>);
}