import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  productToEdit: {},
  cart: [],
  isSorted: false
};

export const getData = createAsyncThunk(
  "cart/getData",
  async (args, thunkAPI) => {
    const res = await fetch(
      "https://my-json-server.typicode.com/Mayankyadav3980/QuickCartDb/products"
    );
    const json = await res.json();
    return json;
  }
);

export const addProduct = createAsyncThunk(
  "cart/addProduct",
  async (args, thunkAPI) => {
    const res = await fetch(
      "https://my-json-server.typicode.com/Mayankyadav3980/QuickCartDb/products/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(args),
      }
    );
    if(res.ok) return res.json();
    // return thunkAPI.rejectWithValue(res)
  }
);

export const updateProduct = createAsyncThunk(
  "cart/updateProduct",
  async (args, thunkAPI) => {
    const res = await fetch(
      `https://my-json-server.typicode.com/Mayankyadav3980/QuickCartDb/products/${args.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(args),
      }
    );
    return args;
  }
);

export const deleteProduct = createAsyncThunk(
  "cart/deleteProduct",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(
        `https://my-json-server.typicode.com/Mayankyadav3980/QuickCartDb/products/${id}`,
        {
          method: "DELETE",
        }
      );
      return id;
    } catch (error) {
        return thunkAPI.rejectWithValue('err ocr2');
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    sortProducts: (state, action) => {
      state.isSorted = true;
      state.productList.sort((a, b) => a.price - b.price);
    },
    removeFilter: (state, action)=>{
      state.isSorted= false;
      // getData();
    },
    addProductToCart: (state, action)=>{
      state.cart.push({...action.payload, inCart: true});
    },
    removeProductFromCart: (state, action) => {
      let idx = state.cart.findIndex(p=>p.id===action.payload);
      state.cart.splice(idx,1);
    },
    resetCart: (state)=>{
      state.cart=[];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.sortedProducts = action.payload;
      // console.log('in getData', state.productList);
    });

    builder
      .addCase(updateProduct.fulfilled, (state, action) => {
        const idx = state.productList.findIndex(
          (prdt) => prdt.id === action.payload.id
        );
        state.productList.splice(idx, 1, action.payload);
        // console.log('in fulfilled');
        // console.log(action.payload)
      })
      .addCase(updateProduct.rejected, (state, action) => {
        console.log("error occured, keep calm");
      });

    builder
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const idx = state.productList.findIndex(
          (prdt) => prdt.id === action.payload
        );
        state.productList.splice(idx, 1);
        // alert('prdt del');
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        console.log(action.payload);
      });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      // console.log(action.payload)
      state.productList.unshift(action.payload);
    });
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  sortProducts,
  removeFilter,
  addProductToCart,
  removeProductFromCart,
  resetCart,
} = cartSlice.actions;
