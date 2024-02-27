import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

// Add your initial state here
const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    productSingle: [],
    productSingleStatus: STATUS.IDLE,
}

// Async thunks
export const fetchAsyncProducts = createAsyncThunk('products/fetch', async (limit) => {
    const response = await fetch(`${BASE_URL}products?limit=${limit}`);
    const data = await response.json();
    return data.products;
});

export const fetchAsyncProductSingle = createAsyncThunk('product-single/fetch', async (id) => {
    const response = await fetch(`${BASE_URL}products/${id}`);
    const data = await response.json();
    return data;
});

// Create the slice
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetchAsyncProducts
            .addCase(fetchAsyncProducts.pending, (state, action) => {
                state.productStatus = STATUS.LOADING;
            })
            .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.productStatus = STATUS.SUCCESS;
            })
            .addCase(fetchAsyncProducts.rejected, (state, action) => {
                state.productStatus = STATUS.FAILED;
            })

            // fetchAsyncProductSingle
            .addCase(fetchAsyncProductSingle.pending, (state, action) => {
                state.productSingleStatus = STATUS.LOADING;
            })
            .addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
                state.productSingle = action.payload;
                state.productSingleStatus = STATUS.SUCCESS;
            })
            .addCase(fetchAsyncProductSingle.rejected, (state, action) => {
                state.productSingleStatus = STATUS.FAILED;
            })
    }
});

// Export your selectors and reducer
export const getAllProducts = (state) => state.product.products;
export const getAllProductStatus = (state) => state.product.productStatus;
export const getProductSingle = (state) => state.product.productSingle;
export const getSingProductStatus = (state) => state.product.productSingleStatus; 
export default productSlice.reducer;
