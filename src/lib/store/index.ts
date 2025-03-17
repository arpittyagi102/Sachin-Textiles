import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slice'
import { searchSlice } from '@/components/Header/search'
import { cartSlice } from '@/components/Cart/cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        counter: counterSlice.reducer,
        search: searchSlice.reducer,
        cart: cartSlice.reducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']