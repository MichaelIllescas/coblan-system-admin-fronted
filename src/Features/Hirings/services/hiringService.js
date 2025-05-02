import apiClient from "../../../Services/apiClient";

const createHiring = (payload) => {
  return apiClient.post('/hirings', payload);
};

const hiringService = {
  createHiring,
};

export default hiringService;
