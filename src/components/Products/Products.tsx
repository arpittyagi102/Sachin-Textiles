import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";

export default function Products({ items, title }: ProductsProps) {
    return (
        <section>
            <h1 className="text-2xl md:text-4xl text-center font-bold md:mb-6">{title || "Explore Our wide range of Products"}</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 mt-8">
                {items.map((item, index) => (
                    <Link key={index} className="m-1 p-2 bg-neutral-100 rounded-xl border border-neutral-300 max-w-96" href={`/products/${item?.Product_Name?.replace(/ /g, "-")}/${item.id}`}>
                        <img loading="lazy" decoding="async" height={500} width={500} src={"/images/Products/"+item.Images[0]} alt={item.Product_Name} className="w-full object-cover rounded-lg aspect-[1.25]" style={{color: ''}} />

                        <div className="bottom flex justify-between items-center md:m-2">
                            <div className="left">
                                <h2 className="text-md font-bold mt-2">{item.Product_Name}</h2>
                                <div className="flex items-center">
                                    <p className="text-gray-800 text-md mr-2">₹{item.Price || "00"}</p>
                                    
                                    {Array(item.rating || 5).fill(0).map((_, i) => (
                                        <svg width="16" key={i} height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0L12.2451 6.56434H19.5106L13.6327 10.6213L15.8779 17.1857L10 13.1287L4.12215 17.1857L6.36729 10.6213L0.489435 6.56434H7.75486L10 0Z" fill="#F9D30E"/>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            
                            <button className="right">
                                <svg width="36" height="36" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="24.5" cy="23.5" rx="24.5" ry="23.5" fill="#FF8E09"/>
                                    <path d="M31.5418 32.7501C32.1828 32.7501 32.7975 33.0047 33.2507 33.4579C33.7039 33.9111 33.9585 34.5258 33.9585 35.1668C33.9585 35.8077 33.7039 36.4224 33.2507 36.8756C32.7975 37.3288 32.1828 37.5834 31.5418 37.5834C30.9009 37.5834 30.2862 37.3288 29.833 36.8756C29.3798 36.4224 29.1252 35.8077 29.1252 35.1668C29.1252 33.8255 30.2006 32.7501 31.5418 32.7501ZM12.2085 13.4167H16.1597L17.2956 15.8334H35.1668C35.4873 15.8334 35.7946 15.9607 36.0213 16.1873C36.2479 16.4139 36.3752 16.7213 36.3752 17.0417C36.3752 17.2472 36.3147 17.4526 36.2302 17.6459L31.9043 25.4638C31.4935 26.2009 30.696 26.7084 29.7897 26.7084H20.7877L19.7002 28.678L19.6639 28.823C19.6639 28.9031 19.6957 28.98 19.7524 29.0366C19.809 29.0933 19.8859 29.1251 19.966 29.1251H33.9585V31.5417H19.4585C18.8176 31.5417 18.2029 31.2871 17.7497 30.8339C17.2964 30.3807 17.0418 29.766 17.0418 29.1251C17.0418 28.7022 17.1506 28.3034 17.3318 27.9651L18.9752 25.0047L14.6252 15.8334H12.2085V13.4167ZM19.4585 32.7501C20.0994 32.7501 20.7141 33.0047 21.1673 33.4579C21.6206 33.9111 21.8752 34.5258 21.8752 35.1668C21.8752 35.8077 21.6206 36.4224 21.1673 36.8756C20.7141 37.3288 20.0994 37.5834 19.4585 37.5834C18.8176 37.5834 18.2029 37.3288 17.7497 36.8756C17.2964 36.4224 17.0418 35.8077 17.0418 35.1668C17.0418 33.8255 18.1172 32.7501 19.4585 32.7501ZM30.3335 24.2917L33.6927 18.2501H18.4193L21.271 24.2917H30.3335Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                        
                    </Link>
                ))}
            </div>
        </section>
    )
}

type ProductsProps = {
    items: Product[];
    title?: string;
}