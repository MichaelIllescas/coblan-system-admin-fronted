import apiClient from "../../../Services/apiClient";

export const registerCustomer = async (customerData) => {
    const response = await apiClient.post('/customers', customerData);
    return response.data;
};
