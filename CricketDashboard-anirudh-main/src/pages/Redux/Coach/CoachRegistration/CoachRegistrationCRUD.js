import axios from 'axios';

export const RegisterCoach = async (data) => {
  try {
    const response = await axios.post('/api/hello', data);
    return response;
  } catch (error) {
    throw error;
  }
};


// login Api to hit
export const LoginCoach = async (data) => {
  try {
    const response = await axios.post('/api/CoachLogin', data);
    return response;
  } catch (error) {
    throw error;
  }
};