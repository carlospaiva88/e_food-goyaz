import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MenuType } from "../../Pages/Product"


type Item = Pick<MenuType, "id" | "titulo" | "foto" | "preco" | "quantity">

type CartState = {
  isOpen: boolean
  items: Item[]
  checkoutOpen: boolean
}
const initialState: CartState = {
  isOpen: false,
  checkoutOpen: false,
  items: [],
}
export const openCheckout = () => {
  return {
    type: 'OPEN_CHECKOUT',
  }
}

export const closeCheckout = () => {
  return {
    type: 'CLOSE_CHECKOUT',
  }
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Item>) => {
      const restaurant = state.items.find((item) => item.id === action.payload.id)

      if (!restaurant) {
        action.payload.quantity = 1
        state.items.push(action.payload)
      } else {
          restaurant.quantity += 1;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})
export const cartReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    // ... outras cases ...

    case 'OPEN_CHECKOUT':
      return {
        ...state,
        checkoutOpen: true,
      };

    case 'CLOSE_CHECKOUT':
      return {
        ...state,
        checkoutOpen: false,
      };


    default:
      return state;
  }
}

export const { add, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
