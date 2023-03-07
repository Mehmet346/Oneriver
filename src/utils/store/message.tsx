//@ts-ignore 
import { createSlice } from "@reduxjs/toolkit"
//@ts-ignore 
import data from '../../data.json'


const messageSlice = createSlice({
  name: "message",
  initialState: {
    basket: data,
    debt_state: [],
    isLogged: false
  },
  reducers: {
    setMessage(state, action) {
      let tempData = state.basket;
      let existItem = tempData.find((item) => item.id == action.payload.id) 

      if (!existItem) {                              
        tempData.push({ ...action.payload, quantity: 1 }) 
      } else {
        existItem.quantity += 1;         
      }
      let logRecord = state.debt_state;
      logRecord.push({ ...action.payload, buy: 1 });
      state.debt_state = logRecord;
      console.log(state.debt_state);
    },
    sell(state, action) {
      let tempData = state.basket;
      let existItem = tempData.find((item) => item.id == action.payload.id) 

      if (existItem) {
        if (existItem.quantity > 0) {         
            existItem.quantity -= 1;   
            
            let logRecord = state.debt_state;
            logRecord.push({ ...action.payload, buy: -1 });
            state.debt_state = logRecord;
            console.log(state.debt_state);
        } else {
            alert('elinizde bu coinden bulunmamaktadır')   
        }                                      
    }

    },
    setLogged(state, action) {
      let Logged = state.isLogged;
      if(!Logged) {
        state.isLogged = true;
      }
    }
  }
})

export const { setMessage, setLogged, sell } = messageSlice.actions
export default messageSlice.reducer