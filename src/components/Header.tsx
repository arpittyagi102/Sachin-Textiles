import Image from "next/image";
import { CATEGORIES } from "@/constants";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-5 mt-3 py-4 bg-white">
            {/* Logo */}
            {/* <Image src="/vercel.svg" alt="Logo" width={50} height={50} /> */}
            <h1 className="font-bold text-4xl">LOGO</h1>

            {/* Search Section */}
            <div className="flex items-strech justify-between border border-neutral-300 rounded-full overflow-hidden">
                {/* Categories */}
                <select className="bg-neutral-200 px-2 py-3 text-neutral-500">
                    {CATEGORIES.map((category) => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
                
                {/* Search Bar */}
                    <input type="text" placeholder="Search for products" className="px-5 w-[350px]" />
                    <button className="p-2 pr-4">
                        <svg width="25px" height="25px" viewBox="0 0 24 24" className=" fill-neutral-400" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> 	
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z" fill="inherit"/> 
                            </g>
                        </svg>
                    </button>
            </div>

            {/* Right buttons */}
            <div className="right-buttons flex items-center">
                <button className="">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-black">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                        </g>
                    </svg>
                </button>
                <button className="bg-amber-500 ml-3 px-4 py-2 text-white rounded-lg">
                    Shop Now
                </button>
            </div>
        </header>
    );
}