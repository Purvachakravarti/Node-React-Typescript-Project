import { Invoice } from "../types/invoice";
import axiosInstance from "./axiosInstance";
const API_URL = "http://localhost:3010"; // Backend URL

export const fetchInvoices = async () => {
  const response = await axiosInstance.get("/invoices");
  return response.data;
};

export const fetchInvoiceById = async (id: number): Promise<Invoice> => {
  const response = await axiosInstance.get(`${API_URL}/invoices/${id}`);
  return response.data;
};
