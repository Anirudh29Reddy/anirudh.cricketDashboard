import * as requestFromServer from '../Cricketer/CricketerAuthCRUD'
import { updateCricketerDetails,logOut } from './CricketerAuthSlice' 

export const playerRegister = (data) => async (dispatch) => {
    try {
        console.log("Sending request with data:", data);
        
        const response = await requestFromServer.RegisterPlayer(data);
        console.log("Response received:", response); // Debugging

        if (response && response.status === 201) {
            console.log("Dispatched postCoachData with status:", response.status);
              // Fix here
        } else {
            console.log("Unexpected response format:", response);
        }
    } catch (error) {
        console.error("Error registering coach:", error);
    }
};


export const LoginForPlayer= (data) => async (dispatch) => {
    try {
        console.log("Sending request with data:", data);
        
        const response = await requestFromServer.LoginPlayer(data);
        console.log("Response received:", response.data); // Debugging

        if ( response.status === 200 ) {
            console.log("Login successful, updating Redux store.");

            dispatch(updateCricketerDetails({details:response.data,active:true}));

           
        } else {
            console.log("Unexpected response format or missing user data:", response);
        }
    } catch (error) {
        console.error("Error during coach login:", error);
    }
};

export const LogOutForPlayer= (data) => async (dispatch) => {
    try {
        console.log("Sending request with data:", data);
        
        
            console.log("Login successful, updating Redux store.");

            dispatch(logOut({details:data,active:false}));

           
       
    } catch (error) {
        console.error("Error during coach login:", error);
    }
};