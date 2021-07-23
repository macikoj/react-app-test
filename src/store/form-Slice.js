import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: { department:'',
    nameAndSurname:'',
    email:'',
    textArea:'' },
    reducers: {
        selectDepartment(state,action){
            state.department=action.payload.department
        },
        submitForm(state,action){
            state.nameAndSurname=action.payload.nameAndSurname
            state.email=action.payload.email
            state.textArea=action.payload.textArea
        },
        clearForm(state){
            state.nameAndSurname=''
            state.email=''
            state.textArea=''
            state.department=''
        }

    },
  });
  
  export const formActions = formSlice.actions;
  
  export default formSlice.reducer;