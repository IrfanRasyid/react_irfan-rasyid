import axios from "axios";
import { CONST } from "../utils/constants"; // Pastikan Anda mengimpor konstanta yang benar

export const APIProducts = {
  getProducts: async () => {
    try {
      const result = await axios.get(`${CONST.BASE_URL_API}/products`);
      console.log(result);
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },
};
