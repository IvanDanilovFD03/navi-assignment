import api from "api/axios";

const exampleApi = {
  getExample: async () => {
    try {
      const response = await api.get("example/self/");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default exampleApi;
