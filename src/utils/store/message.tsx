//@ts-ignore 
import { createSlice } from "@reduxjs/toolkit"
//@ts-ignore 
import data from '../../data.json'


const messageSlice = createSlice({
  name: "message",
  initialState: {
    basket: data,
    debt_state: [],
  },
  reducers: {
    setMessage(state, action) {
      let tempData = state.basket;
      let existItem = tempData.find((item) => item.id == action.payload.id) //We are checking if there is an item with the same data

      if (!existItem) {                               //if not
        tempData.push({ ...action.payload, quantity: 1 }) // create item and basketquantity 1
      } else {
        existItem.quantity += 1;         // else increase the number if any
      }
    }
  }
})

export const { setMessage } = messageSlice.actions
export default messageSlice.reducer