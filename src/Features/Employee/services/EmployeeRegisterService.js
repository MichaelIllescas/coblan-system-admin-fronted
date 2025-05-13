import apiClient from "../../../Services/apiClient";

export const registerEmployee
 = async (employeeData) => {
    const response = await apiClient.post('/employees/create', employeeData);
    return response.data;
};
