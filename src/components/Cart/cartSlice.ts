import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'
import type { Product } from "@/lib/types";

interface ProductInCart extends Product {
    quantity: number
}

const initialState: ProductInCart[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductInCart>) => {
            const item = state.find(item => item.id === action.payload.id)
            if (item) {
                item.quantity ++;
            } else {
                state.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const index = state.findIndex(item => item.id === action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
        clearCart: (state) => {
            return []
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;


