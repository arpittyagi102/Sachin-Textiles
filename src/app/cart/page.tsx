"use client"
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/lib/store'
import { addToCart, removeFromCart } from "@/components/Cart/cartSlice"; 
import type { ProductInCart } from '@/lib/types'
import Checkout from '@/components/Cart/Checkout';

export default function Page() {
    const cart = useSelector((state: RootState) => state.cart);
    const subTotal = cart.reduce((acc, product) => acc + (parseInt(product.Price.split('/')[0] || "0") * product.quantity), 0);
    
    return (
        <div className='flex flex-col max-w-[800px] mb-96 mx-auto'>
            {cart.map((product) => ProductElementInCart(product))}

            <div className='bg-neutral-100 flex items-center justify-between gap-2 p-2 border-b-4 border-neutral-300 md:px-8 md:py-4'>
                <div className='ml-auto'>
                    <span className="font-bold md:text-xl">SubTotal : ₹{subTotal}</span>
                </div>
            </div>

            <Checkout amount={subTotal}/>
        </div>
    )
}

function ProductElementInCart(product: ProductInCart) {
    const dispatch = useDispatch();

    return (
        <div key={product.id} className='bg-neutral-100 flex items-center justify-between gap-2 p-2 border-b-4 border-neutral-300 md:px-8 md:py-4'>
            <img src={"/images/Products/" + product.Images[0]} alt="White Bed Comfortor" className="w-24 h-20 md:w-36 md:h-30 border border-neutral-500 rounded-lg" />
            <div className='flex-grow md:ml-10'>
                <h3 className='font-bold md:text-xl md:m-1'>{product.Product_Name}</h3>
                <p className='text-neutral-500 text-xs md:m-1'>{product.Description.length < 60 ? product.Description : product.Description.slice(0,60)+"..."}</p>

                <div className='border-2 border-yellow-500 w-fit min-w-16 flex justify-between gap-1 rounded-lg md:m-2'>
                    <button onClick={() => dispatch(removeFromCart(product.id))} className='cursor-pointer px-2'>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => dispatch(addToCart(product))} className='cursor-pointer px-2'>+</button>
                </div>
            </div>
            <div>
                <span className="font-bold ml-auto md:text-xl">₹{product.Price.split('/')[0] || "00"}</span>
            </div>
        </div>
    )
}