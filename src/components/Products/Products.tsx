import Link from "next/link";
import type { Product } from "@/lib/types";
import AddToBagIcon from "./AddToBagIcon";

export default function Products({ items, title }: ProductsProps) {
    return (
        <section>
            <h1 className="text-2xl md:text-4xl text-center font-bold md:mb-6">{title || "Explore Our wide range of Products"}</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 mt-8">
                {items.map((item, index) => (
                    <Link key={index} className="m-1 p-2 bg-neutral-100 rounded-xl border border-neutral-300 max-w-96" href={`/products/${item?.Product_Name?.replace(/ /g, "-")}/${item.id}`}>
                        <img loading="lazy" decoding="async" height={500} width={500} src={"/images/Products/"+item.Images[0]} alt={item.Product_Name} className="w-full object-cover rounded-lg aspect-[1.25]" style={{color: ''}} />

                        <div className="bottom flex justify-between items-center md:m-2">
                            <div className="left max-w-3/4">
                                <h2 className="text-xs md:text-md md:font-bold mt-2">{item.Product_Name}</h2>
                                <div className="flex flex-col md:flex-row">
                                    <p className="text-primary text-xs md:text-md mr-2">₹{item.Price || "00"}</p>
                                    
                                    <div className="flex items-center">
                                        {Array(item.rating || 5).fill(0).map((_, i) => (
                                            <svg width="16" key={i} height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 0L12.2451 6.56434H19.5106L13.6327 10.6213L15.8779 17.1857L10 13.1287L4.12215 17.1857L6.36729 10.6213L0.489435 6.56434H7.75486L10 0Z" fill="#F9D30E"/>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <AddToBagIcon product={item} addClassName=""/>
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