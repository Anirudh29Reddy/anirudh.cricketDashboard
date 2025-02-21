import { createSlice } from "@reduxjs/toolkit";

const initialCoachRegister = {
    CoachRegisterDetails: {
        firstName: '',
        lastName: '',
        mobileNumber: '',
        profilePicture: null ,// Blob should not be directly initialized
        status:0
    },
    CoachRegisterInfo: {
        status: 0
    }
};

const CoachRegisterSlice = createSlice({
    name: 'CoachRegister',
    initialState: initialCoachRegister,
    reducers: {
        postCoachData: (state, action) => {
            console.log("Reducer called with:", action.payload);
            state.CoachRegisterInfo.status = action.payload;
            console.log("Updated state:", state.CoachRegisterInfo);
        },
        getCoachDetails: (state, action) => {
            state.CoachRegisterDetails = action.payload;
            console.log(state.CoachRegisterDetails,"hello");
        },   
        deleteCoach: (state, action) => {
            // Handle delete logic
        }, 
        updateCoachDetails: (state, action) => {
            // Handle update logic
        }
    }
});

export const { postCoachData, getCoachDetails, deleteCoach, updateCoachDetails } = CoachRegisterSlice.actions;
export default CoachRegisterSlice.reducer;
