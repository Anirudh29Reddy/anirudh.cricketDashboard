import { createSlice } from "@reduxjs/toolkit";

const initialCricketerState = {
  cricketerDetails: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    address: "",
    battingStyle: "",
    bowlingStyle: "",
    role: "",
    preferredPosition: "",
    profileImage: "",
    height: "",
    weight: "",
    currentTeam: "",
    status: "Active",
  },
  session:{
    active :false
  }
 
};

const cricketerAuthSlice = createSlice({
  name: "cricketer",
  initialState: initialCricketerState,
  reducers: {
    updateCricketerDetails: (state, action) => {
     console.log(action.payload.details.user,"hello",action.payload.active);
     state.cricketerDetails = action.payload.details.user;
     state.session=true;
     console.log(state.cricketerDetails,state.session,"state");
      
    },
    logOut: (state, action) => {
        console.log(action.payload.details.user,"hello",action.payload.active);
        state.cricketerDetails = action.payload.details.user;
        state.session=false;
        console.log(state.cricketerDetails,state.session,"state");
         
       },
    resetCricketerDetails: () => initialCricketerState, // Reset correctly
  },
});

export const { updateCricketerDetails, resetCricketerDetails,logOut } =
  cricketerAuthSlice.actions;
export default cricketerAuthSlice.reducer;
