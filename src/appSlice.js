import { createSlice } from '@reduxjs/toolkit'
import productData from "./data/data.json";

const initialState = {
    allProducts: productData,
    products: productData,
}

export const appSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        productFilter: (state, action) => {
            if(action.payload) {
                state.products = state.products.filter((product) => product.type === action.payload);
            }else{
                state.products = state.allProducts;
            }
        },
        search: (state, action) => {
            state.products = state.allProducts.filter((product) => product.productName.toLowerCase().includes(action.payload.toLowerCase()));
        },
    }
})
export const {productFilter, search} = appSlice.actions
export default appSlice.reducer