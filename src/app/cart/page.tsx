"use client"
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export default function Page() {
    const cart = useSelector((state: RootState) => state.cart);
    console.log("cart", cart);
    
    return (
        <div>
            {cart.map((product) => ProductInCart(product))}
        </div>
    )
}

function ProductInCart(product){
    return (
        <div key={product.id} className='bg-neutral-100 flex items-center justify-between gap-2 p-2 border-b-4 border-neutral-300 md:px-8 md:py-4 max-w-[800px]'>
            <img src={"/images/Products/" + product.Images[0]} alt="White Bed Comfortor" className="w-24 h-20 md:w-36 md:h-30 border border-neutral-500 rounded-lg" />
            <div>
                <h3 className='font-bold md:text-xl'>{product.Product_Name}</h3>
                <p className='text-neutral-500 text-xs'>{product.Description.length < 60 ? product.Description : product.Description.slice(0,60)+"..."}</p>

                <div className='border-2 border-yellow-500 w-fit min-w-16 flex justify-between gap-2 px-2 rounded-lg'>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
            </div>
            <div>
                <span className="font-bold md:text-xl">₹{product.Price.split('/')[0]}</span>
            </div>
        </div>
    )
}