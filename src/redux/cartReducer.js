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
        updateProduct:(state, action)=>{
            console.log("in updatePrdt", state.productList);
            const up = action.payload;
            let idx = state.productList.findIndex(prdt => prdt.id === Number(up.id))
            // console.log(idx);
            console.log('in updatePrdt', state.productList);
            state.productList.splice(idx, 1, up);
            console.log('in updatePrdt', state.productList);
            
            // show popup
            alert('prdt updated successfully!');
            
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getData.fulfilled, (state, action )=>{
            state.productList = action.payload;
            console.log('in getData', state.productList);
            
        })
    }

})

export const cartReducer = cartSlice.reducer;
export  const { updateProduct } = cartSlice.actions;
