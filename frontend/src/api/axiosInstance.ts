import axios from "axios";

const API_URL = "http://localhost:3010"; // Replace with your backend URL

// Create an Axios instance
export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

// Intercept requests to include the Authorization header
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Retrieve token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  const { access_token } = response.data;

  // Save the token to localStorage
  localStorage.setItem("token", access_token);

  return response.data;
};
export default axiosInstance;
