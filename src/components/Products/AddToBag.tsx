"use client"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart, clearCart } from "@/components/Cart/cartSlice"; 
import { useState } from "react";

export default function AddToBag({ product }) {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = () => {
        setAddedToCart(true)
        dispatch(addToCart(product));
    }

    return (
        <button className={`${addedToCart ? "bg-[#228e1d]" : "bg-[#205781]"} cursor-pointer text-white text-lg rounded-lg px-7 py-2 mt-5`} onClick={handleAddToCart}>
            Add to Bag
        </button>
    )
}