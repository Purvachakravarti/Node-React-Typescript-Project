import axios from "axios";

const API_URL = "http://localhost:3010"; // Replace with your backend URL

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  const { access_token } = response.data;

  // Save the token to localStorage
  localStorage.setItem("token", access_token);

  return response.data; // Optionally return additional data
};
