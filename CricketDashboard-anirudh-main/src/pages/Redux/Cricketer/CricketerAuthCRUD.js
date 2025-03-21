import axios from 'axios';

export const RegisterPlayer = async (data) => {
  try {
    const response = await axios.post('/api/CricketerRegister', data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const LoginPlayer = async (data) => {
    try {
      const response = await axios.post('/api/CricketerLogin', data);
      return response;
    } catch (error) {
      throw error;
    }
  };
