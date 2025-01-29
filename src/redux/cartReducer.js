import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    productList:[],
    productToEdit: {},
    cart:{}
}

export const getData = createAsyncThunk("cart/getData", async(args, thunkAPI)=>{
    const res = await fetch(
      "https://my-json-server.typicode.com/Mayankyadav3980/QuickCartDb/products"
    );
    const json = await res.json();
    return json;
})

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        getD:()=>{

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getData.fulfilled, (state, action )=>{
            state.productList = action.payload;
        })
    }

})

export const cartReducer = cartSlice.reducer;
export  const {getD} = cartSlice.actions;
