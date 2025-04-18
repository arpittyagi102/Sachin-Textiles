"use client"
import Products from "@/components/Products/Products";
import AddToBag from "@/components/Products/AddToBag";
import { useState } from "react";
import Footer from "@/components/Home/Footer";

export default function ProductView({ product, allProducts }) {
    const [index, setIndex] = useState(0);
    const colorsArray = product.Color.split(",").slice(0, product.Images.length);


    function colorSelected(index) {
        console.log("Color Selected: ", index);
        setIndex(index);
    }

    return (
        <main className="relative">
            
            <div className="Product-View flex flex-col md:flex-row justify-center gap-4 pt-4 md:gap-10">
                <button className="absolute top-1 md:top-4 left-1 md:left-4 text-white bg-neutral-600 hover:bg-neutral-800 p-2 rounded-xl cursor-pointer" onClick={() => window.history.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m0 0l9-9m-9 9l9 9m0-9h18" />
                    </svg>
                </button>
                <div className="Product-View-Image rounded-xl overflow-hidden flex justify-center items-center md:w-2/5">
                    <img loading="lazy" decoding="async" src={"/images/Products/" + product.Images[index]} alt={product.Product_Name} className="aspect-[4/3] h-full object-contain" />
                </div>
                <div className="Product-View-Details m-4 mb-0 md:mb-4 md:m-0 md:w-2/5 md:pr-8 flex flex-col">
                    <h1 className="text-2xl md:text-4xl md:mb-5 font-bold order-1">{product.Product_Name}</h1>
                    <p className="text-xs my-2 md:text-md text-neutral-500 order-4 md:mb-5 md:order-2">{product.Description}</p>
                    {colorsArray.length > 1 &&
                        <div className="flex gap-2 mb-2 order-4 md:order-2">
                            {colorsArray.map((color, i) => {
                                return <div key={i} onClick={() => colorSelected(i)} className={`color-circle w-6 h-6 rounded-full border cursor-pointer`} style={{ backgroundColor: color }}></div>
                            })}
                        </div>
                    }
                    <p className="text-lg md:text-2xl order-2">MRP: <span className="text-lg md:text-3xl font-bold text-primary">₹{product.Price}</span></p>
                    <p className="text-lg md:text-2xl text-neutral-500 order-3">Inclusive of all taxes</p>

                    <div className="quote bg-neutral-200 p-4 pl-8 rounded-xl mt-5 order-3">
                        <ul><li className="list-disc">No refund Policy</li></ul>
                    </div>

                    <div className="order-3">
                        <AddToBag product={product} colorIndexSelected={index}/>
                    </div>
                </div>
            </div>

            <div className="ml-4 md:ml-40 mb-10">
                <h2 className="text-xl md:text-3xl font-bold mt-10">Product Details</h2>
                {/* <p className="text-xs md:text-md text-neutral-500 md:mb-5">{product.Description}</p> */}
                <ul className="mt-2 ml-4 md:ml-8 text-lg md:text-2xl list-disc">
                    {product.Size && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Size : </span>{product.Size}</li>}
                    {product.Feature && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Feature : </span>{product.Feature}</li>}
                    {product.Gender && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Gender : </span>{product.Gender}</li>}
                    {product.Style && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Style : </span>{product.Style}</li>}
                    {product.Material && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Material : </span>{product.Material}</li>}
                    {product.Pattern && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Pattern : </span>{product.Pattern}</li>}
                    {product.Color && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Color : </span>{product.Color}</li>}
                    {product.Sleeve_Style && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Sleeve Style : </span>{product.Sleeve_Style}</li>}
                    {product.handeling && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Handeling : </span>{product.handeling}</li>}
                    {product.type && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Type : </span>{product.type}</li>}
                    {product.Waist_Pocket && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Waist Pocket : </span>{product.Waist_Pocket}</li>}
                    {product.Texture && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Texture : </span>{product.Texture}</li>}
                    {product.Strength && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Strength : </span>{product.Strength}</li>}
                    {product.Filling && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Filling : </span>{product.Filling}</li>}
                    {product.Reusable && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Reusable : </span>{product.Reusable}</li>}
                    {product.Disposable && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Disposable : </span>{product.Disposable}</li>}
                    {product.Shape && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Shape : </span>{product.Shape}</li>}
                    {product.Washable && <li className="text-sm md:text-md md:mb-2"><span className="font-bold">Washable : </span>{product.Washable}</li>}
                </ul>
            </div>

            <SimilarProducts product={product} allProducts={allProducts} />
            <Footer />
        </main>
    );
}

function SimilarProducts({ product, allProducts }) {
    const similar = allProducts.filter((p) => {
        return p.Product_Category == product.Product_Category && p.id != product.id;
    });

    return (
        <div className="Similar-Products">
            <Products items={similar} title="Similar Products" />
        </div>
    )
}
