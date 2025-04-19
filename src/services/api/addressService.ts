import axios from "axios";

const addressService = {
  getProvinces: async () => {
    const http = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });

    const response = await http.get("https://esgoo.net/api-tinhthanh/1/0.htm");
    return response.data;
},
};

export default addressService;
