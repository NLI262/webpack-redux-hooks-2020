import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  
  users: [],

}


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
 
    getUserDetailsSuccess: (state, { payload }) => {
      state.users = payload
      
    },
  
  
  },
})
export const { getUserDetailsSuccess } = usersSlice.actions


export const userSelector = state => state.users;


export default usersSlice.reducer

export function fetchUserDetails() {
    return async dispatch => {
     

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
  
        dispatch(getUserDetailsSuccess(data))
      } catch (error) {
       console.log(error)
      }
    }
  }
