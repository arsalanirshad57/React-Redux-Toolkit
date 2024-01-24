import { createSlice } from "@reduxjs/toolkit";
import { Deleteuser } from "../actions";

const Userstate = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload)
    },
    removeUser(state, action) {
      state.splice(action.payload, 1)

    },
    // DleteUser(state, action) {
    //   return []
    // }
  },
  extraReducers(builder) {
    builder.addCase(Deleteuser, () => {
      return []
    })
  },

})
// console.loog(Userstate.actions)

export default Userstate.reducer;
export const { addUser, removeUser } = Userstate.actions