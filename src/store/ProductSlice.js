import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    productSingle: [],
    productSingleStatus: STATUS.IDLE,
}

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
                state.productStatus = STATUS.LOADING;
            })
            .addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
                state.products = action.payload;
                state.productStatus = STATUS.SUCCESS;
            })
            .addCase(fetchAsyncProductSingle.rejected, (state, action) => {
                state.productStatus = STATUS.FAILED;
            })
    }
});

// for getting the products list with limitted numbers
export const fetchAsyncProducts = createAsyncThunk('products/fetch', async (limit) => {
    const response = await fetch(`${BASE_URL}products?limit=${limit}`)
    const data = await response.json();
    // console.log(data.products)
    return data.products;
})

// getting single product also
export const fetchAsyncProductSingle = createAsyncThunk('product-single/fetch', async (id) => {
    const response = await fetch(`${BASE_URL}products/${id}`)
    const data = await response.json();
    return data;
})

export const getAllProducts = (state) => state.product.products;
export const getAllProductStatus = (state) => state.product.productStatus;
export const getProductSingle = (state) => state.product.productSingle;
export const getSingProductStatus = (state) => state.product.getSingProductStatus;
export default productSlice.reducer;