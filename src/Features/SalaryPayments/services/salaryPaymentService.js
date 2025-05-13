import apiClient from "../../../Services/apiClient";

const salaryPaymentService = {
  createSalaryPayment: (data) => apiClient.post('/salary-payments', data),
};

export default salaryPaymentService;
