import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'

interface searchState {
    value: string,
    category: string,
}

const initialState: searchState = {
    value: '',
    category: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchChange: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        categoryChange: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        }
    }
})

export const { searchChange, categoryChange } = searchSlice.actions

export const selectSearch = (state: RootState) => state.search.value
export const selectCategory = (state: RootState) => state.search.category

export default searchSlice.reducer;