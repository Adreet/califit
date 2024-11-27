import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5002', // Replace with your API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getFormData = async (step: number) => {
  try {
    const response = await api.get(`/form-data/${step}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching form data:', error);
    throw error;
  }
};

export const submitFormData = async (formData: any) => {
  try {
    const response = await api.post('/submit-form', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form data:', error);
    throw error;
  }
};
