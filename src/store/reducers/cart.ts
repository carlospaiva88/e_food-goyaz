import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MenuType } from "../../Pages/Product"

type Item = Pick<MenuType, "id" | "titulo" | "foto" | "preco" | "quantity">

type CartState = {
  isOpen: boolean
  items: Item[]
}
const initialState: CartState = {
  items: [],
  isOpen: false
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

export const { add, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
