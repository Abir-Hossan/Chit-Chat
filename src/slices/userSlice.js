import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signedinUserInfo: (state, action) => {
     
    //   state.value += 1
    console.log(action.payload)
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { signedinUserInfo } = userSlice.actions

export default userSlice.reducer