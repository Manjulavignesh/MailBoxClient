import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {  rcvdMessage: [] };
const emailReducer = createSlice({
  name: "rcvdEmail",
  initialState: initialState,
  reducers: {
    addMessage(state,action) {
      state.rcvdMessage.push(action.payload);
      },
  },
});
const store=configureStore({reducer:{mails:emailReducer.reducer}})
export const mailAction=emailReducer.actions;
export default store;
