import * as requestFromServer from '../CoachRegistration/CoachRegistrationCRUD'
import { postCoachData,getCoachDetails } from './CoachRegistrationSlice' 

export const CoachRegister = (data) => async (dispatch) => {
    try {
        console.log("Sending request with data:", data);
        
        const response = await requestFromServer.RegisterCoach(data);
        console.log("Response received:", response); // Debugging

        if (response && response.status === 200) {
            console.log("Dispatched postCoachData with status:", response.status);
            dispatch(postCoachData(200));  // Fix here
        } else {
            console.log("Unexpected response format:", response);
        }
    } catch (error) {
        console.error("Error registering coach:", error);
    }
};


// Coach Login

export const LoginForCoach = (data) => async (dispatch) => {
    try {
        console.log("Sending request with data:", data);
        
        const response = await requestFromServer.LoginCoach(data);
        console.log("Response received:", response.data); // Debugging

        if ( response.status === 200 ) {
            console.log("Login successful, updating Redux store.");

            
            dispatch(getCoachDetails({
                firstName: response.data.user.firstname || '',
                lastName: response.data.user.lastname || '',
                mobileNumber: response.data.user.phonenumber || '',
                profilePicture: response.data.user.profileimage?.data || null, // Avoid direct blob initialization
                status: response.data.user.status === 'Active' ? 1 : 0
            }));
        } else {
            console.log("Unexpected response format or missing user data:", response);
        }
    } catch (error) {
        console.error("Error during coach login:", error);
    }
};

