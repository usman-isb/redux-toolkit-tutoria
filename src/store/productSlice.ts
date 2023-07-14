import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    data: [],
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload
        }
    }
})

export const { fetchProducts } = productSlice.actions
export default productSlice.reducer;

export function getProducts() {
    return async function getProductsThunk(dispatch: any, getState: any) {
        const data: any = await fetch("https://fakestoreapi.com/products")
        const result: any = data.json()
        dispatch(fetchProducts(result))
    }
}