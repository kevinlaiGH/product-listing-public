import { createSlice } from '@reduxjs/toolkit'
import productData from "./data/data.json";

const initialState = {
    products: productData,
    filteredProducts: productData,
}

export const appSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        productFilter: (state, action) => {
            if(action.payload) {
                state.filteredProducts = state.products.filter((product) => product.type === action.payload);
            }else{
                state.filteredProducts = state.products;
            }
        },
        search: (state, action) => {
            state.filteredProducts = state.products.filter((product) => product.productName.toLowerCase().includes(action.payload.toLowerCase()));
        },
    }
})
export const {productFilter, search} = appSlice.actions
export default appSlice.reducer