import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    testcaseTitle:{
        
    },
    requiredEmptyField: ""
}
const inputValidationSlice = createSlice({
    name: 'validation',
    initialState,
    reducers: {
        checkValidation: (state, {payload}) => {
            
            state.requiredEmptyField = payload
        },
        removeValidation:state=>{
            state.requiredEmptyField=""
        }
    },
})
export const { checkValidation, removeValidation } = inputValidationSlice.actions

export const validationSelector = state => state.validation;

export default inputValidationSlice.reducer
export function checkInputValidation(message) {
    return async dispatch => {
        dispatch(checkValidation(message))
}
}
export function removeInputValidation(){
    return async dispatch=>{
        dispatch(removeValidation())
    }
}
