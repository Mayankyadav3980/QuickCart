import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  productList: [],
  productToEdit: {},
  cart: [],
  isSorted: false,
};

// Thunk middleware to handle async get request from API
export const getData = createAsyncThunk("cart/getData", async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/Mayankyadav3980/QuickCartDb/products"
  );
  const json = await res.json();
  return json;
});

// Thunk middleware to handle async POST request to API
export const addProduct = createAsyncThunk("cart/addProduct", async (args) => {
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
  if (res.ok) return res.json();
});

// Thunk middleware to handle async PUT request to API
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

// Thunk middleware to handle async DELETE request to API
export const deleteProduct = createAsyncThunk(
  "cart/deleteProduct",
  async (id) => {
    const res = await fetch(
      `https://my-json-server.typicode.com/Mayankyadav3980/QuickCartDb/products/${id}`,
      {
        method: "DELETE",
      }
    );
    return id;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    sortProducts: (state) => {
      state.isSorted = true;
      state.productList.sort((a, b) => a.price - b.price);
      toast.success("Filter Added");
    },
    removeFilter: (state) => {
      state.isSorted = false;
      toast.success("Filter Removed");
    },
    addProductToCart: (state, action) => {
      let prdt = { ...action.payload, inCart: true };
      let cart = state.cart;
      state.cart.push(prdt);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      toast.success("Product Added to Cart");
    },
    removeProductFromCart: (state, action) => {
      let idx = state.cart.findIndex((p) => p.id === action.payload);
      state.cart.splice(idx, 1);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      toast.success("Product Removed from Cart");
    },
    resetCart: (state) => {
      state.cart = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      toast.success("Your Purchase was successfull");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    });

    builder
      .addCase(updateProduct.fulfilled, (state, action) => {
        const idx = state.productList.findIndex(
          (prdt) => prdt.id === action.payload.id
        );
        state.productList.splice(idx, 1, action.payload);
        toast.success("Product Updated Successfully");
      })
      .addCase(updateProduct.rejected, () => {
        console.log("error occured");
      });

    builder
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const idx = state.productList.findIndex(
          (prdt) => prdt.id === action.payload
        );
        state.productList.splice(idx, 1);
        toast.success("Product Deleted Successfully");
      })
      .addCase(deleteProduct.rejected, (action) => {
        console.log(action.payload);
      });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.productList.unshift(action.payload);
      toast.success("Product Added Successfully");
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
