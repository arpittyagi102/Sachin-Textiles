"use client"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "@/components/Cart/cartSlice"; 
import type { Product } from '@/lib/types'
import type { RootState } from '@/lib/store'

export default function AddToBag({ product }: { product: Product }) {

    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    
    // Find the product in the cart using the product id
    const cartProduct = cart.find(item => item.id === product.id);

    const handleAddToCart = () => {
        dispatch(addToCart({...product, quantity: 1}));
    }

    const handleIncreaseQuantity = () => {
        dispatch(addToCart(cartProduct));
    }

    const handleDecreaseQuantity = () => {
        dispatch(removeFromCart(product.id));
    }

    return (
        <>
            {cartProduct ? (
                // If the product is in the cart, show quantity control buttons
                <div className='border-2 border-yellow-500 w-fit min-w-16 flex justify-between gap-1 rounded-lg md:text-2xl p-1 mt-5'>
                    <button 
                        onClick={handleDecreaseQuantity} 
                        className='cursor-pointer px-2'
                    >
                        -
                    </button>
                    <span>{cartProduct.quantity}</span>
                    <button 
                        onClick={handleIncreaseQuantity} 
                        className='cursor-pointer px-2'
                    >
                        +
                    </button>
                </div>
            ) : (
                // If the product is not in the cart, show "Add to Bag" button
                <button 
                    className="bg-[#205781] cursor-pointer text-white text-lg rounded-lg px-7 py-2 mt-5" 
                    onClick={handleAddToCart}
                >
                    Add to Bag
                </button>
            )}
        </>
    );
}
