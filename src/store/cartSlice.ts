import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter(s => action.payload !== s.id)
        }
    }
})


export const { add, remove } = cartSlice.actions
export default cartSlice.reducer;